const https = require('https');

const titles = [
  "Spider-Man:_Across_the_Spider-Verse",
  "The_Super_Mario_Bros._Movie",
  "Kung_Fu_Panda_4",
  "Despicable_Me_4",
  "Elemental_(2023_film)",
  "Minions:_The_Rise_of_Gru",
  "Puss_in_Boots:_The_Last_Wish",
  "Encanto",
  "Frozen_II",
  "The_Bad_Guys_(film)"
];

const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${titles.join('|')}&prop=pageimages&format=json&pithumbsize=800`;

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    const pages = json.query.pages;
    const items = [];
    for (const key in pages) {
      const page = pages[key];
      if (page.thumbnail) {
        items.push(`  { name: '${page.title.replace(/_\(.*\)/, '')}', img: '${page.thumbnail.source}' }`);
      } else {
        console.log("No thumbnail for", page.title);
      }
    }
    console.log(items.join(',\n'));
  });
}).on('error', console.error);
