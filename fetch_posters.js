const fs = require('fs');
const path = require('path');
const https = require('https');

const titles = [
  "Dune: Part Two",
  "Deadpool & Wolverine",
  "Inside Out 2",
  "Shōgun (2024 miniseries)",
  "Fallout (American TV series)",
  "Oppenheimer (film)",
  "The Last of Us (TV series)",
  "The Boys (TV series)",
  "House of the Dragon",
  "Godzilla x Kong: The New Empire"
];

async function fetchMainImage(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=600`;
  const options = { headers: { 'User-Agent': 'NodeJS/IPTV-Script (contact@example.com)' } };
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pages[pageId].thumbnail) {
            resolve(pages[pageId].thumbnail.source);
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
    console.log(`Fetching image for: ${title}`);
    try {
      const imgUrl = await fetchMainImage(title);
      if (imgUrl) {
        const destPath = path.join(destDir, `N${i + 1}.jpg`);
        await downloadImage(imgUrl, destPath);
        console.log(`Downloaded ${title} to N${i + 1}.jpg`);
        
        let displayTitle = title.replace(/ \(.+\)/, '');
        results.push(`{ name: '${displayTitle}', img: '/movie-posters/N${i + 1}.jpg' }`);
      } else {
        console.log(`No image found for ${title}`);
      }
    } catch (e) {
      console.error(`Error with ${title}:`, e);
    }
  }
  
  console.log("\n--- REPLACEMENT ARRAY ---\n");
  console.log(`const MOVIE_ITEMS = [\n  ${results.join(',\n  ')}\n];`);
}

main();
