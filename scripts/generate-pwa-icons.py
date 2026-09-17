"""Generate the PWA icon set from the brand palette used by the favicons.

The visual language follows public/favicon-32.png / apple-touch-icon.png:
dark green background (#234D3C), cream foreground (#EDF2E9) and a gold
(#D7A84E) accent.

Usage:  python scripts/generate-pwa-icons.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "icons"

BG = (35, 77, 60, 255)
FG = (237, 242, 233, 255)
GOLD = (215, 168, 78, 255)

FONTS = [
    "C:/Windows/Fonts/msyhbd.ttc",
    "C:/Windows/Fonts/msyh.ttc",
    "C:/Windows/Fonts/msjhbd.ttc",
    "C:/Windows/Fonts/msjh.ttc",
]


def load_font(size: int) -> ImageFont.FreeTypeFont:
    for candidate in FONTS:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default(size)


def draw_icon(size: int, maskable: bool = False) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)

    pad = int(size * 0.22) if maskable else 0
    box = (pad, pad, size - pad, size - pad)
    radius = int((box[2] - box[0]) * 0.22)
    draw.rounded_rectangle(box, radius=radius, fill=BG)

    font = load_font(int((box[2] - box[0]) * 0.46))
    label = "央"
    left, top, right, bottom = draw.textbbox((0, 0), label, font=font)
    draw.text(
        (
            (size - (right - left)) / 2 - left,
            (size - (bottom - top)) / 2 - top - int(size * 0.02),
        ),
        label,
        font=font,
        fill=FG,
    )

    # Gold accent leaf / branch line under the glyph.
    accent_y = size * 0.74
    accent_width = (box[2] - box[0]) * 0.34
    draw.rounded_rectangle(
        (
            (size - accent_width) / 2,
            accent_y,
            (size + accent_width) / 2,
            accent_y + max(2, size * 0.035),
        ),
        radius=max(1, size * 0.02),
        fill=GOLD,
    )
    return canvas


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    targets = {
        "icon-192.png": (192, False),
        "icon-512.png": (512, False),
        "icon-maskable-512.png": (512, True),
    }
    for name, (size, maskable) in targets.items():
        draw_icon(size, maskable).save(OUT / name, optimize=True)
        print(f"生成 {name} ({size}x{size})")


if __name__ == "__main__":
    main()
