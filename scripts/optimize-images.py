"""Create WebP delivery variants without changing source JPEGs or their dimensions."""
from pathlib import Path
from PIL import Image
for name in ['campus-edone','enseignante-edone','famille-edone','bibliotheque-edone','administration-edone','campus-vie-edone']:
 source=Path('images')/(name+'.jpg');target=source.with_suffix('.webp')
 if not target.exists() or target.stat().st_mtime<source.stat().st_mtime:
  Image.open(source).convert('RGB').save(target,'WEBP',quality=82,method=6)
 print(source.name,source.stat().st_size,'->',target.name,target.stat().st_size)
