"""Use the same native SVG icons on every platform. No emoji fonts or external icon CDN."""
from pathlib import Path
from html.parser import HTMLParser
import json,re
icons=json.loads(Path('icons.json').read_text())
def svg(name):return '<svg class="ui-icon ui-icon-'+name+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">'+icons[name]+'</svg>'
mapping={'↗':'arrow-up-right','↑':'arrow-up','↓':'arrow-down','↳':'turn-right','✓':'check','✳':'asterisk','▷':'play','Ⅱ':'pause','↻':'refresh','▦':'grid','▤':'list','♙':'users','▥':'calendar','▣':'wallet','▧':'file','▱':'book','▮':'signal','▰':'battery','×':'close','↯':'signal'}
class Icons(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=False);self.parts=[];self.raw=0
 def handle_starttag(self,tag,attrs):
  self.parts.append(self.get_starttag_text())
  if tag in {'script','style','svg'}:self.raw+=1
 def handle_endtag(self,tag):
  self.parts.append('</'+tag+'>')
  if tag in {'script','style','svg'}:self.raw-=1
 def handle_startendtag(self,tag,attrs):self.parts.append(self.get_starttag_text())
 def handle_data(self,data):
  if not self.raw:
   data=data.replace('👋','').replace('▮▮▮',svg('signal'))
   # Existing SVG markup inserted above must not be processed as text again.
   for ch,name in mapping.items():data=data.replace(ch,svg(name))
  self.parts.append(data)
 def handle_decl(self,decl):self.parts.append('<!'+decl+'>')
 def handle_comment(self,data):self.parts.append('<!--'+data+'-->')
 def handle_entityref(self,name):self.parts.append('&'+name+';')
 def handle_charref(self,name):self.parts.append('&#'+name+';')
for file in Path('.').rglob('*.html'):
 if any(part.startswith('.') for part in file.parts):continue
 original=file.read_text();parser=Icons();parser.feed(original);result=''.join(parser.parts)
 if result!=original:file.write_text(result)
js="'use strict';\n// Shared, code-native SVGs. Logo artwork is kept separate.\n(()=>{const paths="+json.dumps(icons,separators=(',',':'))+";window.EdOneIcons={markup(name){return '<svg class=\"ui-icon ui-icon-'+name+'\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">'+(paths[name]||paths['grid'])+'</svg>';}};})();\n"
Path('icons.js').write_text(js)
