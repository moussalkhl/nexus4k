const fs = require('fs');
const path = require('path');

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

async function main() {
  const destDir = path.join(__dirname, 'public', 'movie-posters');
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  const results = [];
  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];
    console.log(`Fetching: ${title}`);
    try {
      const url = `https://itunes.apple.com/search?term=${encodeURIComponent(title)}&media=movie,tvShow&limit=1`;
      const res = await fetch(url);
      const json = await res.json();
      
      if (json.results && json.results.length > 0) {
        let art = json.results[0].artworkUrl100;
        if (art) {
          art = art.replace('100x100bb.jpg', '600x600bb.jpg');
          
          // Download the image
          const imgRes = await fetch(art);
          const buffer = await imgRes.arrayBuffer();
          
          const destPath = path.join(destDir, `N${i + 1}.jpg`);
          fs.writeFileSync(destPath, Buffer.from(buffer));
          
          console.log(`Downloaded ${title}`);
          results.push(`  { name: '${title.replace(/'/g, "\\'")}', img: '/movie-posters/N${i + 1}.jpg' }`);
        } else {
          console.log(`No image found for ${title}`);
        }
      } else {
        console.log(`No results for ${title}`);
      }
    } catch (e) {
      console.error(`Error with ${title}:`, e);
    }
  }
  
  console.log("\n--- REPLACEMENT ARRAY ---\n");
  console.log(`const MOVIE_ITEMS = [\n${results.join(',\n')}\n];`);
}

main();
