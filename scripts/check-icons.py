"""Ensure rendered page text does not rely on emoji or symbol fonts for UI icons."""
from pathlib import Path
from html.parser import HTMLParser
import re
EMOJI=re.compile('[\U0001F000-\U0001FAFF\u2600-\u26FF\u2700-\u27BF\uFE0F]')
FONT_ICONS=set('↗↑↓↳✓✳▷Ⅱ↻▦▤♙▥▣▧▱▮▰↯')
class Text(HTMLParser):
 def __init__(self):super().__init__();self.skip=0;self.text=[];self.icons=0
 def handle_starttag(self,tag,attrs):
  if tag in {'script','style','svg'}:self.skip+=1
  if tag=='svg' and 'ui-icon' in dict(attrs).get('class','').split():self.icons+=1
 def handle_startendtag(self,tag,attrs):pass
 def handle_endtag(self,tag):
  if tag in {'script','style','svg'}:self.skip-=1
 def handle_data(self,data):
  if not self.skip:self.text.append(data)
count=0
for p in Path('.').rglob('*.html'):
 if any(part.startswith('.') for part in p.parts):continue
 t=Text();t.feed(p.read_text());value=''.join(t.text)
 assert not EMOJI.search(value),(str(p),'emoji')
 assert not set(value)&FONT_ICONS,(str(p),'font icons',set(value)&FONT_ICONS)
 count+=1
assert Path('icons.js').exists() and Path('icons.json').exists()
print('Icônes validées :',count,'pages et fragments sans emoji ni icône en caractère Unicode.')
