"""Apply the shared static footer to every public HTML page."""
from pathlib import Path
import re
footer=Path('partials/footer.html').read_text().strip()
for path in Path('.').rglob('*.html'):
    if any(part.startswith('.') for part in path.parts) or path.parts[0]=='partials':
        continue
    text=path.read_text()
    updated=re.sub(r'<footer\b[^>]*>.*?</footer>',lambda match:footer,text,flags=re.S)
    if updated!=text:
        path.write_text(updated)

# Footer edits are content changes; keep metadata and sitemap in sync.
if Path('scripts/update-seo.py').exists() and Path('seo-config.json').exists():
    import runpy
    runpy.run_path('scripts/update-seo.py',run_name='__main__')
