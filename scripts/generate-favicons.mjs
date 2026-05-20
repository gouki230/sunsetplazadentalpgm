import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const src = join(root, 'public', 'images', 'sunset-logo.png');
const publicDir = join(root, 'public');

async function main() {
  const meta = await sharp(src).metadata();
  console.log(`Source logo: ${meta.width}x${meta.height}`);

  // The wordmark "SUNSET PLAZA DENTAL" takes ~45% of the height at the bottom.
  // Crop just the sun-with-dolphin icon at top — it stays legible at favicon sizes.
  // From inspection the sun graphic occupies roughly the top 55% of the artwork.
  const iconHeight = Math.round(meta.height * 0.55);
  const iconCropWidth = Math.min(meta.width, iconHeight); // keep square-ish
  const iconLeft = Math.max(0, Math.round((meta.width - iconCropWidth) / 2));

  // Build a square padded canvas with the cropped icon centered.
  const cropped = await sharp(src)
    .extract({ left: iconLeft, top: 0, width: iconCropWidth, height: iconHeight })
    .png()
    .toBuffer();

  const square = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    },
  })
    .composite([
      {
        input: await sharp(cropped)
          .resize({ width: 460, height: 460, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .toBuffer(),
        gravity: 'center',
      },
    ])
    .png()
    .toBuffer();

  const targets = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-96x96.png', size: 96 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'icon-192.png', size: 192 },
    { name: 'icon-512.png', size: 512 },
  ];

  for (const t of targets) {
    const buf = await sharp(square).resize(t.size, t.size).png({ compressionLevel: 9 }).toBuffer();
    await writeFile(join(publicDir, t.name), buf);
    console.log(`  ${t.name}  ${buf.length} bytes`);
  }

  // Also output an OG fallback (1200x630) with the logo centered on cream
  const ogBg = { r: 250, g: 246, b: 239, alpha: 1 };
  const ogLogo = await sharp(src).resize({ width: 460, fit: 'inside' }).toBuffer();
  const og = await sharp({
    create: { width: 1200, height: 630, channels: 4, background: ogBg },
  })
    .composite([{ input: ogLogo, gravity: 'center' }])
    .jpeg({ quality: 88 })
    .toFile(join(publicDir, 'images', 'og-default.jpg'));
  console.log(`  og-default.jpg ${og.size} bytes`);

  // Multi-size favicon.ico from 16/32/48 PNGs
  const ico16 = await sharp(square).resize(16, 16).png().toBuffer();
  const ico32 = await sharp(square).resize(32, 32).png().toBuffer();
  const ico48 = await sharp(square).resize(48, 48).png().toBuffer();
  const ico = await pngToIco([ico16, ico32, ico48]);
  await writeFile(join(publicDir, 'favicon.ico'), ico);
  console.log(`  favicon.ico  ${ico.length} bytes`);

  console.log('All favicons generated.');
}

await mkdir(publicDir, { recursive: true });
main().catch((err) => {
  console.error(err);
  process.exit(1);
});
