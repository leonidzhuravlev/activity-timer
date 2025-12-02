import fs from 'fs';

const svg = fs.readFileSync('public/vite.svg', 'utf8');
const base64 = Buffer.from(svg).toString('base64');
fs.writeFileSync('favicon_base64.txt', `data:image/svg+xml;base64,${base64}`);
