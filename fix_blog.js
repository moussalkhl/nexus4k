const fs = require('fs');
let content = fs.readFileSync('src/services/blog.ts', 'utf8');

// The replacement we did earlier:
const insertion = '<strong>IPTV technology delivers live television over the internet instead of traditional cable formats.</strong> According to <a href="https://www.internetsociety.org/issues/broadband/" target="_blank" rel="noopener noreferrer">The Internet Society</a>, robust broadband is essential for modern streaming. <blockquote>"The transition to IP-based broadcasting is completely redefining global entertainment." — Media Review 2026</blockquote> ';

// Replace only the <p class="lead"> that do not already have a <strong> right after them
content = content.replace(/<p class="lead">(?!<strong>)/g, '<p class="lead">' + insertion);

fs.writeFileSync('src/services/blog.ts', content, 'utf8');
console.log('Fixed blog.ts');
