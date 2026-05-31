const fs = require('fs');
const path = require('path');
const https = require('https');

const titles = [
  "Dune Part Two",
  "Deadpool Wolverine",
  "Inside Out 2",
  "Shogun",
  "Fallout",
  "Oppenheimer",
  "The Last of Us",
  "The Boys",
  "House of the Dragon",
  "Godzilla x Kong"
];

async function fetchItunes(title) {
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(title)}&media=movie,tvShow&limit=1`;
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.results && json.results.length > 0) {
            // Get the highest resolution artwork (replace 100x100 with 600x600)
            let art = json.results[0].artworkUrl100;
            if (art) {
              art = art.replace('100x100bb.jpg', '600x600bb.jpg');
              resolve(art);
            } else {
              resolve(null);
            }
          } else {
            resolve(null);
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Status Code: ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  const destDir = path.join(__dirname, 'public', 'movie-posters');
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  const results = [];
  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];
    console.log(`Fetching: ${title}`);
    try {
      const imgUrl = await fetchItunes(title);
      if (imgUrl) {
        const destPath = path.join(destDir, `N${i + 1}.jpg`);
        await downloadImage(imgUrl, destPath);
        console.log(`Downloaded ${title}`);
        results.push(`  { name: '${title}', img: '/movie-posters/N${i + 1}.jpg' }`);
      } else {
        console.log(`No image found for ${title}`);
      }
    } catch (e) {
      console.error(`Error with ${title}:`, e.message);
    }
  }
  
  console.log("\n--- REPLACEMENT ARRAY ---\n");
  console.log(`const MOVIE_ITEMS = [\n${results.join(',\n')}\n];`);
}

main();
