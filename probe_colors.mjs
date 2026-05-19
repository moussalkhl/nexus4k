// probe_colors.mjs - Sample corner colors of all sport images
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const sharp = require('sharp');

const INPUT_DIR = path.join(__dirname, 'SPORTS IMAGES');
const files = ['s1.png','S2.png','S3.png','S4.png','S5.png','S6.png','S7.png','S8.png','S9.png','S10.png'];

for (const f of files) {
  const { data, info } = await sharp(path.join(INPUT_DIR, f))
    .ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const px = (x,y) => {
    const i = (y*width+x)*channels;
    return `rgba(${data[i]},${data[i+1]},${data[i+2]},${data[i+3]})`;
  };
  console.log(`${f}: TL=${px(0,0)} TR=${px(width-1,0)} BL=${px(0,height-1)} BR=${px(width-1,height-1)} CENTER=${px(Math.floor(width/2),Math.floor(height/2))}`);
}
