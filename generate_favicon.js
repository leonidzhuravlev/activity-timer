import fs from 'fs';

const svg = fs.readFileSync('public/vite.svg', 'utf8');
const base64 = Buffer.from(svg).toString('base64');
const dataUri = `data:image/svg+xml;base64,${base64}`;
fs.writeFileSync('favicon_base64.txt', dataUri);
console.log(`Length: ${dataUri.length}`);
console.log(`Ends with: ${dataUri.slice(-20)}`);
