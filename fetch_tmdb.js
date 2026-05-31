const fs = require('fs');
const https = require('https');
const path = require('path');

const tmdb_images = [
  { name: 'Dune: Part Two', url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/1pdfLvkbY9ohJlCjQH2JGqq9TrU.jpg' },
  { name: 'Deadpool & Wolverine', url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg' },
  { name: 'Inside Out 2', url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/vpnVM9B6NMmQpWeZvzRxMgG2MHe.jpg' },
  { name: 'Shōgun', url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/7O4iVfOMQmdCSxhOg1WNzG1hq1IT.jpg' },
  { name: 'Fallout', url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/xUjR384vLd7E2dI7l8qNl1hG1U6.jpg' },
  { name: 'Oppenheimer', url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
  { name: 'The Last of Us', url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg' },
  { name: 'The Boys', url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/nxeHU7r8J7VzR1e5I9WdFqVjXgB.jpg' },
  { name: 'House of the Dragon', url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/7QVsGixIUrWuTUAJkUGBaX2eDXY.jpg' },
  { name: 'Godzilla x Kong', url: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/tMefBSflR6PGQLvLuPEg0rT1K1r.jpg' }
];

async function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => reject(err));
    });
  });
}

async function main() {
  const destDir = path.join(__dirname, 'public', 'movie-posters');
  for (let i = 0; i < tmdb_images.length; i++) {
    const item = tmdb_images[i];
    const destPath = path.join(destDir, `N${i+1}.jpg`);
    try {
      await downloadImage(item.url, destPath);
      console.log(`Downloaded ${item.name} to N${i+1}.jpg`);
    } catch (e) {
      console.error(`Error downloading ${item.name}:`, e);
    }
  }
}

main();
