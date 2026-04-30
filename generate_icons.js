const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateIcons() {
  const inputPath = path.join(__dirname, 'public', 'logo.png');
  
  if (!fs.existsSync(inputPath)) {
    console.error("Input file not found:", inputPath);
    return;
  }

  try {
    console.log("Generating icons from:", inputPath);
    
    // We want a square for the icon. 
    // Since the logo is wide (1024x426), we will add padding to make it square.
    const background = { r: 0, g: 0, b: 0, alpha: 0 }; // Transparent background

    const baseImage = sharp(inputPath);
    const metadata = await baseImage.metadata();
    
    const size = Math.max(metadata.width, metadata.height);
    
    // Create a square version with padding
    const squareImage = baseImage
      .extend({
        top: Math.floor((size - metadata.height) / 2),
        bottom: Math.ceil((size - metadata.height) / 2),
        left: Math.floor((size - metadata.width) / 2),
        right: Math.ceil((size - metadata.width) / 2),
        background: background
      });

    // Generate src/app/icon.png (Next.js App Router standard)
    await squareImage.clone()
      .resize(512, 512, { fit: 'contain', background: background })
      .toFile(path.join(__dirname, 'src', 'app', 'icon.png'));
    console.log("Created src/app/icon.png");

    // Generate src/app/apple-icon.png
    await squareImage.clone()
      .resize(180, 180, { fit: 'contain', background: background })
      .toFile(path.join(__dirname, 'src', 'app', 'apple-icon.png'));
    console.log("Created src/app/apple-icon.png");

    // Generate public/favicon.ico
    await squareImage.clone()
      .resize(32, 32, { fit: 'contain', background: background })
      .toFile(path.join(__dirname, 'public', 'favicon.ico'), { overwrite: true });
    console.log("Created public/favicon.ico");

  } catch (err) {
    console.error("Error generating icons:", err);
  }
}

generateIcons();
