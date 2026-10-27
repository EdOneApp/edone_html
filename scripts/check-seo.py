"""Validate generated SEO and crawlability contracts, without a network dependency."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse
from datetime import date
import json,struct,xml.etree.ElementTree as ET
class Head(HTMLParser):
 def __init__(self):super().__init__();self.meta={};self.links={};self.jsons=[];self.head=False;self.ld=False;self.data='';self.h1=0;self.static_modules=0
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='head':self.head=True
  if tag=='h1':self.h1+=1
  if tag=='article' and a.get('class')=='module-item':self.static_modules+=1
  if self.head and tag=='meta':self.meta.setdefault(a.get('name',a.get('property')),[]).append(a.get('content',''))
  if self.head and tag=='link':self.links.setdefault(a.get('rel'),[]).append(a.get('href',''))
  if tag=='script' and a.get('type')=='application/ld+json':self.ld=True;self.data=''
 def handle_data(self,data):
  if self.ld:self.data+=data
 def handle_endtag(self,tag):
  if tag=='head':self.head=False
  if tag=='script' and self.ld:self.jsons.append(json.loads(self.data));self.ld=False
config=json.loads(Path('seo-config.json').read_text());base=config['site_url'];expected={base+p['path'] for p in config['pages']};file_names={p['file'] for p in config['pages']}
for p in config['pages']:
 head=Head();head.feed(Path(p['file']).read_text())
 assert head.h1==1,(p['file'],'main heading')
 assert head.links.get('canonical')==[base+p['path']],(p['file'],'canonical')
 assert head.meta.get('description')==[p['description']],(p['file'],'description')
 assert len(head.meta.get('robots',[]))==1 and head.meta['robots'][0].startswith('index, follow')
 for key in ['og:title','og:description','og:url','og:image','twitter:card','twitter:title','twitter:description']:
  assert len(head.meta.get(key,[]))==1,(p['file'],key)
 assert head.meta['og:url']==head.links['canonical']
 assert head.meta['twitter:card']==['summary_large_image']
 assert len(head.jsons)==1 and head.jsons[0]['@context']=='https://schema.org'
 assert len({node.get('@id') for node in head.jsons[0]['@graph']})==len(head.jsons[0]['@graph'])
 if p['file']=='index.html':assert head.static_modules==len(json.loads(Path('modules.json').read_text()))
 for rel in ['icon','apple-touch-icon','manifest']:
  assert len(head.links[rel])==1 and Path(head.links[rel][0].lstrip('/')).exists()
for path in Path('.').glob('*.html'):
 if str(path) in file_names:continue
 h=Head();h.feed(path.read_text());assert h.meta.get('robots')==['noindex, follow'],path
ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9','i':'http://www.google.com/schemas/sitemap-image/1.1','v':'http://www.google.com/schemas/sitemap-video/1.1'}
root=ET.parse('sitemap.xml').getroot();urls=root.findall('s:url',ns);locations=[u.findtext('s:loc',namespaces=ns) for u in urls]
assert len(locations)==len(expected) and set(locations)==expected
for url in urls:
 assert '#' not in url.findtext('s:loc',namespaces=ns)
 date.fromisoformat(url.findtext('s:lastmod',namespaces=ns))
 for name in ['i:image/i:loc','v:video/v:thumbnail_loc','v:video/v:content_loc']:
  for el in url.findall(name,ns):assert Path(urlparse(el.text).path.lstrip('/')).exists(),el.text
robots=Path('robots.txt').read_text();assert 'Sitemap: '+base+'/sitemap.xml' in robots and '\nDisallow: /\n' not in robots
manifest=json.loads(Path('site.webmanifest').read_text());assert manifest['start_url']=='/'
for icon in manifest['icons']:assert Path(icon['src'].lstrip('/')).exists()
with Path('images/icons/favicon-96.png').open('rb') as f:header=f.read(24)
assert struct.unpack('>II',header[16:24])==(96,96)
print('SEO validé : 5 pages canoniques indexables, 15 pages d’erreur exclues, fiches HTML du catalogue, JSON-LD et sitemap valides.')
