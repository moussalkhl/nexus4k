const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateIcons() {
  const inputPath = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\11d2a57a-ffb5-4a4b-9ed6-43ad4817dca5\\media__1777164155386.jpg';
  
  if (!fs.existsSync(inputPath)) {
    console.error("Input file not found:", inputPath);
    return;
  }

  try {
    const metadata = await sharp(inputPath).metadata();
    console.log("Image metadata:", metadata);
    
    // We want a square. The image is likely vertical (e.g. 1000x1500).
    // Let's crop a square from the center.
    const size = Math.min(metadata.width, metadata.height);
    const left = Math.floor((metadata.width - size) / 2);
    const top = Math.floor((metadata.height - size) / 2);

    const squareImage = sharp(inputPath).extract({ left, top, width: size, height: size });

    // Generate src/app/icon.png (Next.js App Router standard)
    await squareImage.clone().resize(512, 512).toFile(path.join(__dirname, 'src', 'app', 'icon.png'));
    console.log("Created src/app/icon.png");

    // Generate src/app/apple-icon.png
    await squareImage.clone().resize(180, 180).toFile(path.join(__dirname, 'src', 'app', 'apple-icon.png'));
    console.log("Created src/app/apple-icon.png");

    // Generate public/favicon.ico (just a 32x32 png, browsers accept png as ico or we can just save as public/icon.png)
    // Actually next.js automatically handles favicon.ico if it's in app directory, but public/favicon.ico is good fallback.
    await squareImage.clone().resize(32, 32).toFile(path.join(__dirname, 'public', 'favicon.ico'));
    console.log("Created public/favicon.ico");

  } catch (err) {
    console.error("Error generating icons:", err);
  }
}

generateIcons();
