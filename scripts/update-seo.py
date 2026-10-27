"""Generate static SEO metadata, robots.txt and sitemap from the actual public pages.
Run from repository root: python3 scripts/update-seo.py [--date YYYY-MM-DD]
Keeps lastmod stable unless the page content changes. Does not submit to Search Console.
"""
from pathlib import Path
from datetime import datetime,timezone
from html import escape,unescape
import argparse,hashlib,json,re,xml.etree.ElementTree as ET
parser=argparse.ArgumentParser();parser.add_argument('--date',default=datetime.now(timezone.utc).date().isoformat());args=parser.parse_args();today=args.date
config=json.loads(Path('seo-config.json').read_text());base=config['site_url'].rstrip('/');pages=config['pages'];page_map={p['file']:p for p in pages}
state_path=Path('docs/seo-state.json');state=json.loads(state_path.read_text()) if state_path.exists() else {};new_state={}
INDEX='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
org={'@type':'Organization','@id':base+'/#organization','name':'EdOne','url':base+'/','logo':{'@type':'ImageObject','url':base+'/images/icons/icon-512.png','width':512,'height':512},'email':'edoneapp@gmail.com','telephone':'+2250105232335','contactPoint':{'@type':'ContactPoint','contactType':'customer support','email':'edoneapp@gmail.com','telephone':'+2250105232335','availableLanguage':'French'}}
website={'@type':'WebSite','@id':base+'/#website','url':base+'/','name':'EdOne','alternateName':'EdOne Gestion scolaire','inLanguage':'fr','publisher':{'@id':base+'/#organization'}}
video={'@type':'VideoObject','@id':base+'/#film','name':'EdOne : une école mieux connectée','description':config['video_description'],'thumbnailUrl':[base+config['social_image']],'uploadDate':config['video_upload_date'],'duration':'PT'+str(config['video_duration_seconds'])+'S','contentUrl':base+config['video_path'],'inLanguage':'fr','isFamilyFriendly':True,'publisher':{'@id':base+'/#organization'}}
for file in sorted(Path('.').rglob('*.html')):
 if any(part in {'partials','.git'} for part in file.parts):continue
 text=file.read_text()
 # Deliver optimized images with JPEG fallbacks; leave dynamic profile images alone.
 def responsive_image(match):
  tag=match.group(0);prefix=text[:match.start()]
  if 'id="rolePhoto"' in tag or prefix.rfind('<picture>')>prefix.rfind('</picture>'):return tag
  src=re.search(r'src="([^"]+\.jpg)"',tag)[1];webp=src[:-4]+'.webp'
  if not Path(webp).exists():return tag
  return '<picture><source type="image/webp" srcset="'+webp+'">'+tag+'</picture>'
 text=re.sub(r'<img\b[^>]*src="images/(?:campus-edone|enseignante-edone|famille-edone|bibliotheque-edone|administration-edone|campus-vie-edone)\.jpg"[^>]*>',responsive_image,text)
 head_match=re.search(r'<head>(.*?)</head>',text,re.S);head=head_match[1]
 head=re.sub(r'\s*<!-- SEO:START -->.*?<!-- SEO:END -->','',head,flags=re.S)
 # Page-specific values replace inherited metadata, rather than accumulating duplicates.
 head=re.sub(r'<meta\b[^>]*(?:name=["\'](?:description|robots|googlebot|author|application-name|twitter:[^"\']+)["\']|property=["\']og:[^"\']+["\'])[^>]*>','',head,flags=re.I)
 head=re.sub(r'<link\b[^>]*rel=["\'](?:canonical|icon|apple-touch-icon|manifest)["\'][^>]*>','',head,flags=re.I)
 if str(file) in page_map:
  page=page_map[str(file)];title=page['title'];description=page['description'];canonical=base+page['path'];robots=INDEX
 else:
  title=unescape(re.search(r'<title>(.*?)</title>',head,re.S)[1]);description_match=re.search(r'<p class="description">(.*?)</p>',text,re.S);description=unescape(re.sub('<[^>]+>','',description_match[1])) if description_match else 'Page d’information et d’assistance EdOne.';canonical=None;robots='noindex, follow'
 head=re.sub(r'<title>.*?</title>','<title>'+escape(title)+'</title>',head,flags=re.S)
 # Normalize links to the canonical home URL across the site.
 text=text.replace('href="index.html#','href="/#').replace('href="index.html"','href="/"')
 source_hash=hashlib.sha256((head.strip()+text[head_match.end():]).encode()).hexdigest()
 previous=state.get(str(file),{});modified=previous.get('lastmod',today) if previous.get('hash')==source_hash else today
 new_state[str(file)]={'hash':source_hash,'lastmod':modified}
 tags=['<meta name="description" content="'+escape(description,quote=True)+'">','<meta name="robots" content="'+robots+'">','<meta name="author" content="EdOne">','<meta name="application-name" content="EdOne">','<link rel="icon" type="image/png" sizes="96x96" href="/images/icons/favicon-96.png">','<link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png">','<link rel="manifest" href="/site.webmanifest">']
 if canonical:
  tags+=['<link rel="canonical" href="'+canonical+'">','<meta property="og:type" content="website">','<meta property="og:locale" content="fr_CI">','<meta property="og:site_name" content="EdOne">','<meta property="og:title" content="'+escape(title,quote=True)+'">','<meta property="og:description" content="'+escape(description,quote=True)+'">','<meta property="og:url" content="'+canonical+'">','<meta property="og:image" content="'+base+config['social_image']+'">','<meta property="og:image:secure_url" content="'+base+config['social_image']+'">','<meta property="og:image:type" content="image/jpeg">','<meta property="og:image:width" content="1280">','<meta property="og:image:height" content="720">','<meta property="og:image:alt" content="EdOne, logiciel de gestion scolaire : moins de paperasse, plus d’avenir.">','<meta name="twitter:card" content="summary_large_image">','<meta name="twitter:title" content="'+escape(title,quote=True)+'">','<meta name="twitter:description" content="'+escape(description,quote=True)+'">','<meta name="twitter:image" content="'+base+config['social_image']+'">','<meta name="twitter:image:alt" content="Présentation d’EdOne, logiciel de gestion scolaire">']
  webpage={'@type':'WebPage','@id':canonical+'#webpage','url':canonical,'name':title,'description':description,'inLanguage':'fr','isPartOf':{'@id':base+'/#website'},'publisher':{'@id':base+'/#organization'},'dateModified':modified,'primaryImageOfPage':{'@type':'ImageObject','url':base+config['social_image']}}
  graph=[org,website,webpage]
  if str(file)=='index.html':
   offers=[{'@type':'Offer','name':name,'price':str(price),'priceCurrency':'XOF','url':base+'/#tarifs','description':description+' Frais d’installation uniques par établissement : 250 000 FCFA, en plus de l’abonnement mensuel.','priceSpecification':{'@type':'UnitPriceSpecification','price':str(price),'priceCurrency':'XOF','unitText':'mois'}} for name,price,description in [('Starter',25000,'Abonnement mensuel, jusqu’à 200 étudiants.'),('School',75000,'Abonnement mensuel, jusqu’à 800 étudiants.'),('Campus',200000,'Abonnement mensuel, jusqu’à 3 000 étudiants.')]]
   service={'@type':'Service','@id':base+'/#service','name':'EdOne, logiciel de gestion scolaire','url':base+'/','description':'Plateforme en ligne pour centraliser inscriptions, notes, bulletins, paiements, bibliothèque et administration des établissements.','serviceType':'Logiciel de gestion scolaire en ligne','provider':{'@id':base+'/#organization'},'image':base+config['social_image'],'offers':offers}
   webpage['about']={'@id':base+'/#service'};webpage['hasPart']={'@id':base+'/#film'};graph+=[service,video]
  else:
   graph.append({'@type':'BreadcrumbList','@id':canonical+'#breadcrumb','itemListElement':[{'@type':'ListItem','position':1,'name':'Accueil','item':base+'/'},{'@type':'ListItem','position':2,'name':page['name'],'item':canonical}]});webpage['breadcrumb']={'@id':canonical+'#breadcrumb'}
  tags+=['<script type="application/ld+json">'+json.dumps({'@context':'https://schema.org','@graph':graph},ensure_ascii=False,separators=(',',':')).replace('</','<\\/')+'</script>']
 block='\n<!-- SEO:START -->\n'+'\n'.join(tags)+'\n<!-- SEO:END -->\n'
 # Use the normalized body, while replacing its original head region.
 text=re.sub(r'<head>.*?</head>',lambda _: '<head>'+head.rstrip()+block+'</head>',text,count=1,flags=re.S)
 if text!=file.read_text():file.write_text(text)
# Only real, indexable canonical pages belong in the sitemap. No fragments or error pages.
NS='http://www.sitemaps.org/schemas/sitemap/0.9';IM='http://www.google.com/schemas/sitemap-image/1.1';VI='http://www.google.com/schemas/sitemap-video/1.1'
ET.register_namespace('',NS);ET.register_namespace('image',IM);ET.register_namespace('video',VI)
root=ET.Element('{'+NS+'}urlset')
for page in pages:
 node=ET.SubElement(root,'{'+NS+'}url');ET.SubElement(node,'{'+NS+'}loc').text=base+page['path'];ET.SubElement(node,'{'+NS+'}lastmod').text=new_state[page['file']]['lastmod']
 if page['file']=='index.html':
  for path in ['images/campus-edone.jpg','images/enseignante-edone.jpg','images/famille-edone.jpg','images/bibliotheque-edone.jpg','images/administration-edone.jpg','images/campus-vie-edone.jpg']:
   picture=ET.SubElement(node,'{'+IM+'}image');ET.SubElement(picture,'{'+IM+'}loc').text=base+'/'+path
  vn=ET.SubElement(node,'{'+VI+'}video')
  for key,value in [('thumbnail_loc',base+config['social_image']),('title',video['name']),('description',video['description']),('content_loc',video['contentUrl']),('duration',str(config['video_duration_seconds'])),('publication_date',config['video_upload_date']),('family_friendly','yes')]:ET.SubElement(vn,'{'+VI+'}'+key).text=value
ET.indent(root,space='  ');ET.ElementTree(root).write('sitemap.xml',encoding='utf-8',xml_declaration=True)
Path('robots.txt').write_text('''User-agent: *
Allow: /
Disallow: /.git/
Disallow: /docs/
Disallow: /scripts/
Disallow: /partials/

Sitemap: https://edone.my/sitemap.xml
''')
manifest={'id':'/','name':'EdOne, gestion scolaire','short_name':'EdOne','description':'La vie scolaire, simplement.','lang':'fr','start_url':'/','scope':'/','display':'browser','background_color':'#f8f6ef','theme_color':'#214f3f','icons':[{'src':'/images/icons/icon-192.png','sizes':'192x192','type':'image/png'},{'src':'/images/icons/icon-512.png','sizes':'512x512','type':'image/png'}]}
Path('site.webmanifest').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n');Path('.nojekyll').touch();state_path.write_text(json.dumps(new_state,ensure_ascii=False,indent=2,sort_keys=True)+'\n')
print('SEO mis à jour :',len(pages),'pages indexables, sitemap images/vidéo et robots.txt.')
