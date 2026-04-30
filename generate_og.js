const sharp = require('sharp');
const path = require('path');

async function generateOgImage() {
  const logoPath = path.join(__dirname, 'public', 'logo.png');
  const outputPath = path.join(__dirname, 'public', 'og-image.png');
  
  try {
    const logo = sharp(logoPath);
    const logoMetadata = await logo.metadata();
    
    // OG Image standard size
    const width = 1200;
    const height = 630;
    
    // Dark background matching the site theme
    const background = { r: 2, g: 4, b: 8, alpha: 1 }; // #020408
    
    // Resize logo to fit nicely within the OG image (with some margin)
    const maxLogoWidth = 800;
    const maxLogoHeight = 400;
    
    const resizedLogo = await logo
      .resize(maxLogoWidth, maxLogoHeight, { fit: 'inside' })
      .toBuffer();
    
    const resizedLogoMetadata = await sharp(resizedLogo).metadata();
    
    // Create the final OG image
    await sharp({
      create: {
        width: width,
        height: height,
        channels: 4,
        background: background
      }
    })
    .composite([{
      input: resizedLogo,
      left: Math.floor((width - resizedLogoMetadata.width) / 2),
      top: Math.floor((height - resizedLogoMetadata.height) / 2)
    }])
    .png()
    .toFile(outputPath);
    
    console.log("Created public/og-image.png");
  } catch (err) {
    console.error("Error generating OG image:", err);
  }
}

generateOgImage();
