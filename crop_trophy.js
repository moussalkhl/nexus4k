const sharp = require('sharp');

async function processImage() {
  const inputPath = 'C:/Users/Admin/.gemini/antigravity/brain/e9c0c29b-72a0-4350-8877-74ced444eeb6/media__1779455454972.png';
  const metadata = await sharp(inputPath).metadata();
  console.log(`Original size: ${metadata.width}x${metadata.height}`);
  
  // Crop out top and bottom sections containing the text
  const topCrop = Math.floor(metadata.height * 0.15);
  const bottomCrop = Math.floor(metadata.height * 0.18);
  const newHeight = metadata.height - topCrop - bottomCrop;
  
  await sharp(inputPath)
    .extract({ left: 0, top: topCrop, width: metadata.width, height: newHeight })
    .toFile('public/images/fifa-trophy-bg-v2.png');
  console.log('Successfully cropped and saved to public/images/fifa-trophy-bg-v2.png');
}

processImage().catch(console.error);
