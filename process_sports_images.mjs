/**
 * process_sports_final.mjs
 * Precise background removal based on exact pixel sampling results.
 * 
 * Corner color analysis:
 *   s1.png  → alpha=0 corners (ALREADY TRANSPARENT) → just copy with alpha
 *   S2.png  → dark ~(32,32,32) solid bg → remove dark
 *   S3.png  → alpha=0 corners (ALREADY TRANSPARENT) → just copy
 *   S4.png  → white/grey checkerboard bg (255,255,255) → remove white
 *   S5.png  → alpha=0 corners (ALREADY TRANSPARENT) → just copy
 *   S6.png  → alpha=0 corners (ALREADY TRANSPARENT) → just copy
 *   S7.png  → alpha=0 corners (ALREADY TRANSPARENT) → just copy
 *   S8.png  → solid coral-red (254,75,68) → remove that red
 *   S9.png  → white/near-white bg → remove white  
 *   S10.png → white/grey bg → remove white
 */

import { createRequire } from 'module';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const sharp = require('sharp');

const INPUT_DIR  = path.join(__dirname, 'SPORTS IMAGES');
const OUTPUT_DIR = path.join(__dirname, 'public', 'sports-logos');

/** RGB Euclidean distance */
const dist = (r1,g1,b1,r2,g2,b2) => Math.sqrt((r1-r2)**2+(g1-g2)**2+(b1-b2)**2);

/**
 * Flood-fill background removal from all 4 edges.
 * @param {string} inputPath
 * @param {string} outputPath
 * @param {number} bgR - target background red
 * @param {number} bgG - target background green
 * @param {number} bgB - target background blue
 * @param {number} tol  - hard tolerance (pixels within this are fully removed)
 * @param {number} feather - additional feathering range for anti-aliasing
 */
async function removeBgColor(inputPath, outputPath, bgR, bgG, bgB, tol = 25, feather = 10) {
  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info; // channels = 4
  const out = Buffer.from(data);
  const visited = new Uint8Array(width * height);

  // Queue stores flat pairs [x, y] using indices
  const queue = new Int32Array(width * height * 8);
  let head = 0, tail = 0;

  const enqueue = (x, y) => { queue[tail++] = x; queue[tail++] = y; };
  const dequeue = () => ({ x: queue[head++], y: queue[head++] });

  // Seed all edge pixels
  for (let x = 0; x < width; x++) { enqueue(x, 0); enqueue(x, height-1); }
  for (let y = 1; y < height-1; y++) { enqueue(0, y); enqueue(width-1, y); }

  const totalTol = tol + feather;

  while (head < tail) {
    const { x: cx, y: cy } = dequeue();
    const pidx = cy * width + cx;
    if (visited[pidx]) continue;
    visited[pidx] = 1;

    const bi = pidx * 4;
    const pr = out[bi], pg = out[bi+1], pb = out[bi+2];
    const d = dist(pr, pg, pb, bgR, bgG, bgB);

    if (d <= totalTol) {
      // Fully transparent within tolerance, feather at edges
      let newAlpha;
      if (d <= tol) {
        newAlpha = 0;
      } else {
        // Feather: linearly interpolate between 0 and original alpha
        const t = (d - tol) / feather;
        newAlpha = Math.round(t * out[bi+3]);
      }
      out[bi+3] = Math.min(out[bi+3], newAlpha);

      if (cx > 0)        enqueue(cx-1, cy);
      if (cx < width-1)  enqueue(cx+1, cy);
      if (cy > 0)        enqueue(cx, cy-1);
      if (cy < height-1) enqueue(cx, cy+1);
    }
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9, palette: false })
    .toFile(outputPath);
  
  console.log(`✓ ${path.basename(inputPath)} (bg rgba(${bgR},${bgG},${bgB}) removed)`);
}

/**
 * Simply pass through with ensured alpha (image already transparent).
 */
async function passThrough(inputPath, outputPath) {
  await sharp(inputPath).ensureAlpha().png({ compressionLevel: 9 }).toFile(outputPath);
  console.log(`✓ ${path.basename(inputPath)} (already transparent — copied)`);
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  // s1.png  — NBA: ALREADY TRANSPARENT at corners → passthrough
  await passThrough(path.join(INPUT_DIR, 's1.png'), path.join(OUTPUT_DIR, 's1.png'));

  // S2.png  — Champions League: dark near-black bg (~32,32,32) → remove dark
  await removeBgColor(path.join(INPUT_DIR, 'S2.png'), path.join(OUTPUT_DIR, 'S2.png'), 32, 32, 32, 40, 18);

  // S3.png  — Sport1: ALREADY TRANSPARENT → passthrough
  await passThrough(path.join(INPUT_DIR, 'S3.png'), path.join(OUTPUT_DIR, 'S3.png'));

  // S4.png  — Eurosport: white/checkerboard bg → remove white
  await removeBgColor(path.join(INPUT_DIR, 'S4.png'), path.join(OUTPUT_DIR, 'S4.png'), 248, 248, 248, 22, 12);

  // S5.png  — Premier League: ALREADY TRANSPARENT → passthrough
  await passThrough(path.join(INPUT_DIR, 'S5.png'), path.join(OUTPUT_DIR, 'S5.png'));

  // S6.png  — MLB: ALREADY TRANSPARENT → passthrough
  await passThrough(path.join(INPUT_DIR, 'S6.png'), path.join(OUTPUT_DIR, 'S6.png'));

  // S7.png  — NFL: ALREADY TRANSPARENT → passthrough
  await passThrough(path.join(INPUT_DIR, 'S7.png'), path.join(OUTPUT_DIR, 'S7.png'));

  // S8.png  — LaLiga: solid coral-red bg (254,75,68) → remove that exact red
  await removeBgColor(path.join(INPUT_DIR, 'S8.png'), path.join(OUTPUT_DIR, 'S8.png'), 254, 75, 68, 35, 18);

  // S9.png  — Bundesliga: white + light grey bg → remove white
  await removeBgColor(path.join(INPUT_DIR, 'S9.png'), path.join(OUTPUT_DIR, 'S9.png'), 248, 248, 248, 22, 12);

  // S10.png — Ligue 1: white/grey checkerboard bg → remove white
  await removeBgColor(path.join(INPUT_DIR, 'S10.png'), path.join(OUTPUT_DIR, 'S10.png'), 248, 248, 248, 22, 12);

  console.log('\n✅ All sports images processed with precision!');
}

main().catch(err => { console.error('ERROR:', err); process.exit(1); });
