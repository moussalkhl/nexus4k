const fs = require('fs');
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
  const options = { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } };
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  const results = [];
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    try {
      const html = await fetchHtml(page.url);
      const match = html.match(/class="infobox[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"/i) || html.match(/<img[^>]+src="(\/\/upload\.wikimedia\.org\/wikipedia\/en\/thumb\/[^"]+)"/i);
      if (match && match[1]) {
        let imgUrl = match[1];
        if (imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;
        results.push(`  { name: '${page.name}', img: '${imgUrl}' }`);
      }
    } catch (e) {
      console.error(`Error with ${page.name}:`, e);
    }
  }
  
  console.log("const MOVIE_ITEMS = [");
  console.log(results.join(',\n'));
  console.log("];");
}

main();
