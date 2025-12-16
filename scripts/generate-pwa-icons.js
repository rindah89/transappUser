const fs = require('fs');
const path = require('path');

// This script generates PWA icons from the logo SVG
// It requires sharp to be installed: npm install --save-dev sharp

async function generateIcons() {
  try {
    // Try to use sharp if available
    let sharp;
    try {
      sharp = require('sharp');
    } catch (e) {
      console.error('Error: sharp is not installed. Please run: npm install --save-dev sharp');
      console.error('Alternatively, you can manually convert the SVG to PNG using an online tool or image editor.');
      console.error('Required sizes: 192x192, 512x512, and 180x180 (for apple-touch-icon)');
      process.exit(1);
    }

    const logoPath = path.join(__dirname, '../src/assets/images/transapp-logo.svg');
    const iconsDir = path.join(__dirname, '../public/icons');
    
    // Ensure icons directory exists
    if (!fs.existsSync(iconsDir)) {
      fs.mkdirSync(iconsDir, { recursive: true });
    }

    // Read the SVG
    const svgBuffer = fs.readFileSync(logoPath);
    
    // Generate icons with proper sizing
    // For PWA icons, we want a square version with padding
    const sizes = [
      { size: 192, name: 'icon-192x192.png' },
      { size: 512, name: 'icon-512x512.png' },
      { size: 180, name: 'apple-touch-icon.png' },
    ];

    console.log('Generating PWA icons from logo...');

    for (const { size, name } of sizes) {
      // Create a square canvas with the logo centered
      // The logo is 113x48, so we'll scale it to fit nicely in a square
      const padding = size * 0.1; // 10% padding
      const logoSize = size - (padding * 2);
      
      // Calculate scale to fit the logo (maintaining aspect ratio)
      const logoAspectRatio = 113 / 48; // width / height
      let logoWidth, logoHeight;
      
      if (logoAspectRatio > 1) {
        // Logo is wider than tall
        logoWidth = logoSize;
        logoHeight = logoSize / logoAspectRatio;
      } else {
        // Logo is taller than wide
        logoHeight = logoSize;
        logoWidth = logoSize * logoAspectRatio;
      }

      // Read and parse the original SVG
      const svgContent = svgBuffer.toString();
      
      // Extract the SVG content (everything between <svg> tags)
      const svgMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
      if (!svgMatch) {
        throw new Error('Could not parse SVG content');
      }
      
      const innerSvg = svgMatch[1];
      
      // Create SVG wrapper with proper background and centered logo
      const svgWrapper = `
        <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
          <rect width="${size}" height="${size}" fill="#ffffff"/>
          <g transform="translate(${(size - logoWidth) / 2}, ${(size - logoHeight) / 2}) scale(${logoWidth / 113})">
            ${innerSvg}
          </g>
        </svg>
      `;

      // Convert to PNG
      await sharp(Buffer.from(svgWrapper))
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .png()
        .toFile(path.join(iconsDir, name));

      console.log(`✓ Generated ${name} (${size}x${size})`);
    }

    console.log('\n✅ All PWA icons generated successfully!');
    console.log('Icons are located in: public/icons/');
    
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();

