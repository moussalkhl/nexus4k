// fix_bundesliga_v2.mjs — Enhanced fix for Bundesliga JPEG-compressed white bg
// Strategy: Use much more aggressive tolerance since JPEG artifacts create a gradient edge
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const sharp = require('sharp');

const dist = (r1,g1,b1,r2,g2,b2) => Math.sqrt((r1-r2)**2+(g1-g2)**2+(b1-b2)**2);

async function main() {
  const inputPath = path.join(__dirname, 'SPORTS IMAGES', 'S9.png');
  const outputPath = path.join(__dirname, 'public', 'sports-logos', 'S9.png');

  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.from(data);
  const visited = new Uint8Array(width * height);
  
  // Precise queue implementation (no Int32Array overflow risk)
  const queueX = new Uint16Array(width * height * 4);
  const queueY = new Uint16Array(width * height * 4);
  let head = 0, tail = 0;
  
  const enq = (x, y) => { queueX[tail] = x; queueY[tail++] = y; };
  
  // Seed edges
  for (let x = 0; x < width; x++) { enq(x, 0); enq(x, height-1); }
  for (let y = 1; y < height-1; y++) { enq(0, y); enq(width-1, y); }
  
  // Target: near-white (JPEG artifacts range from 237-255)
  const BGr = 255, BGg = 255, BGb = 255;
  const TOL = 55;   // higher for JPEG artifacts
  const FEATHER = 25;
  const TOTAL = TOL + FEATHER;
  
  while (head < tail) {
    const cx = queueX[head], cy = queueY[head++];
    const pidx = cy * width + cx;
    if (visited[pidx]) continue;
    visited[pidx] = 1;
    const bi = pidx * 4;
    const pr = out[bi], pg = out[bi+1], pb = out[bi+2];
    const d = dist(pr, pg, pb, BGr, BGg, BGb);
    if (d <= TOTAL) {
      const newAlpha = d <= TOL ? 0 : Math.round(((d - TOL) / FEATHER) * out[bi+3]);
      out[bi+3] = Math.min(out[bi+3], newAlpha);
      if (cx > 0)        enq(cx-1, cy);
      if (cx < width-1)  enq(cx+1, cy);
      if (cy > 0)        enq(cx, cy-1);
      if (cy < height-1) enq(cx, cy+1);
    }
  }
  
  await sharp(out, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);
    
  console.log('✓ Bundesliga fixed:', outputPath);
}

main().catch(console.error);
