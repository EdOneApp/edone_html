"""Check shared catalogue, profiles, video references and internal links without a browser."""
import json
from pathlib import Path
import re
from html.parser import HTMLParser
from urllib.parse import unquote, urlsplit


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.ids=[]; self.links=[]; self.sources=[]; self.roles=[]; self.text=[]; self.modules=0
        self.feed(source)
    def handle_starttag(self, tag, attributes):
        data=dict(attributes)
        if data.get('id'): self.ids.append(data['id'])
        if tag=='a' and data.get('href'): self.links.append(data['href'])
        if tag=='source' and data.get('src'): self.sources.append(data['src'])
        if data.get('data-role'): self.roles.append(data['data-role'])
        if tag=='article' and data.get('class')=='module-item': self.modules+=1
    def handle_data(self, data): self.text.append(data)


modules=json.loads(Path('modules.json').read_text())
roles=json.loads(Path('docs/roles.json').read_text())
assert len({m['id'] for m in modules})==len(modules)
assert len({m['title'] for m in modules})==len(modules)
js=Path('app.js').read_text()
assert json.loads(re.search(r'const modules=(\[.*?\]);\nlet selectedCategory=',js,re.S)[1])==modules
assert json.loads(re.search(r'const roles=(\{.*?\});\nconst tabs=',js,re.S)[1])==roles
pages={name:Page(Path(name).read_text()) for name in ['index.html','fonctionnalites.html']}
assert pages['index.html'].modules==len(modules)
assert set(pages['index.html'].roles)<=set(roles)
assert 'fondateurs' in pages['index.html'].roles
for page in pages.values():
    assert len(page.ids)==len(set(page.ids)), 'Duplicate HTML ID'
    text=''.join(page.text)
    assert all(module['title'] in text for module in modules)
    for link in page.links:
        url=urlsplit(link)
        if url.scheme or url.netloc: continue
        target=unquote(url.path.lstrip('/'))
        if url.path=='/': target='index.html'
        elif not target: target=next(name for name, value in pages.items() if value is page)
        elif target.endswith('/'): target+='index.html'
        assert Path(target).exists(), link
        if url.fragment:
            other=pages.get(target) or Page(Path(target).read_text())
            assert unquote(url.fragment) in other.ids, link
config=json.loads(Path('seo-config.json').read_text())
assert config['video_path'].lstrip('/') in pages['index.html'].sources
assert config['video_duration_seconds']==60
assert Path(config['video_path'].lstrip('/')).exists()
assert Path(config['social_image'].lstrip('/')).exists()
assert all(role['description'] in ''.join(pages['fonctionnalites.html'].text) for role in roles.values())

assert config['contact_email']=='admin@edone.my'
for path in [Path('index.html'),Path('fonctionnalites.html'),Path('partials/footer.html'),Path('mentions-legales/index.html'),Path('confidentialite/index.html'),Path('cgu/index.html')]:
    text=path.read_text()
    assert 'mailto:admin@edone.my' in text,path
    assert 'edoneapp@gmail.com' not in text,path
print(f'Catalogue validé : {len(modules)} fiches, {len(set(m["category"] for m in modules))} familles, {len(roles)} profils; HTML, JavaScript, vidéo et liens cohérents.')
