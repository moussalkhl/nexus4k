const sharp = require('sharp');
const fs = require('fs');

async function processImage() {
  const { data, info } = await sharp('public/logo.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixelArray = new Uint8Array(data.length / 3 * 4);
  let j = 0;
  for (let i = 0; i < data.length; i += 3) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    const max = Math.max(r, g, b);
    if (max === 0) {
      pixelArray[j] = 0;
      pixelArray[j+1] = 0;
      pixelArray[j+2] = 0;
      pixelArray[j+3] = 0;
    } else {
      pixelArray[j] = Math.min(255, Math.round((r * 255) / max));
      pixelArray[j+1] = Math.min(255, Math.round((g * 255) / max));
      pixelArray[j+2] = Math.min(255, Math.round((b * 255) / max));
      // Increase alpha slightly to preserve glow without making it too transparent
      pixelArray[j+3] = Math.min(255, Math.round(max * 1.1)); 
    }
    j += 4;
  }

  await sharp(pixelArray, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  }).png().toFile('public/logo.png');
  console.log('Successfully created logo.png with transparent background');
}

processImage().catch(console.error);
