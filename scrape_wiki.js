const fs = require('fs');
const path = require('path');
const https = require('https');

const pages = [
  { name: 'Dune: Part Two', url: '/wiki/Dune:_Part_Two' },
  { name: 'Deadpool & Wolverine', url: '/wiki/Deadpool_%26_Wolverine' },
  { name: 'Inside Out 2', url: '/wiki/Inside_Out_2' },
  { name: 'Shōgun', url: '/wiki/Sh%C5%8Dgun_(2024_miniseries)' },
  { name: 'Fallout', url: '/wiki/Fallout_(American_TV_series)' },
  { name: 'Oppenheimer', url: '/wiki/Oppenheimer_(film)' },
  { name: 'The Last of Us', url: '/wiki/The_Last_of_Us_(TV_series)' },
  { name: 'The Boys', url: '/wiki/The_Boys_(TV_series)' },
  { name: 'House of the Dragon', url: '/wiki/House_of_the_Dragon' },
  { name: 'Godzilla x Kong', url: '/wiki/Godzilla_x_Kong:_The_New_Empire' }
];

async function fetchHtml(urlPath) {
  const url = `https://en.wikipedia.org${urlPath}`;
  const options = { headers: { 'User-Agent': 'NodeJS/IPTV-Script (contact@example.com)' } };
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function downloadImage(url, dest) {
  const options = { headers: { 'User-Agent': 'NodeJS/IPTV-Script (contact@example.com)' } };
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, options, (res) => {
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
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    console.log(`Fetching: ${page.name}`);
    try {
      const html = await fetchHtml(page.url);
      
      // Match the first infobox image
      const match = html.match(/class="infobox[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"/i) || html.match(/<img[^>]+src="(\/\/upload\.wikimedia\.org\/wikipedia\/en\/thumb\/[^"]+)"/i);
      if (match && match[1]) {
        let imgUrl = match[1];
        if (imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;
        
        // Wikipedia thumbnails can be small, try to get a larger version
        // Usually /thumb/ is in the URL, replace the width parameter
        // Example: /thumb/a/a1/Dune_Part_Two_poster.jpeg/220px-Dune_Part_Two_poster.jpeg
        imgUrl = imgUrl.replace(/\/\d+px-/, '/600px-');
        
        const destPath = path.join(destDir, `N${i + 1}.jpg`);
        await downloadImage(imgUrl, destPath);
        console.log(`Downloaded ${page.name}`);
        
        results.push(`  { name: '${page.name}', img: '/movie-posters/N${i + 1}.jpg' }`);
      } else {
        console.log(`No image found for ${page.name}`);
      }
    } catch (e) {
      console.error(`Error with ${page.name}:`, e);
    }
  }
  
  console.log("\n--- REPLACEMENT ARRAY ---\n");
  console.log(`const MOVIE_ITEMS = [\n${results.join(',\n')}\n];`);
}

main();
