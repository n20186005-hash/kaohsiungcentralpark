from pathlib import Path
from PIL import Image

source = Path('public/images')
for path in sorted(source.glob('*.jpg')):
    with Image.open(path) as image:
        image = image.convert('RGB')
        image.thumbnail((2200, 1600), Image.Resampling.LANCZOS)
        target = Path('/tmp') / path.name
        image.save(target, format='JPEG', quality=82, optimize=True, progressive=True)
        print(f'{path.name}: {path.stat().st_size} -> {target.stat().st_size}')
        path.write_bytes(target.read_bytes())
