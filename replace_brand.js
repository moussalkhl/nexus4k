const fs = require('fs');
const path = require('path');

const directory = './src';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  content = content.replace(/StreamVault/g, 'Nexus 4K IPTV');
  content = content.replace(/streamvault-iptv\.com/g, 'nexus4ktv.pro');
  content = content.replace(/streamvault/g, 'nexus4kiptv');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir(directory);
console.log('Done!');
