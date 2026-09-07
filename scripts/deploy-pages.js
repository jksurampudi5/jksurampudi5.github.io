const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist', 'portfolio', 'browser');

console.log('1. Building Angular application...');
execSync('npm run build', { cwd: rootDir, stdio: 'inherit' });

if (!fs.existsSync(distDir)) {
  console.error(`Error: Dist directory ${distDir} not found.`);
  process.exit(1);
}

console.log('2. Syncing build artifacts to repository root...');
const files = fs.readdirSync(distDir);
for (const file of files) {
  const src = path.join(distDir, file);
  const dest = path.join(rootDir, file);
  fs.copyFileSync(src, dest);
  console.log(` - Copied ${file} -> ./`);
}

console.log('3. Creating 404.html (for SPA routing fallback)...');
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(rootDir, '404.html'));

console.log('4. Creating .nojekyll (to bypass Jekyll processing on GitHub Pages)...');
fs.writeFileSync(path.join(rootDir, '.nojekyll'), '');

console.log('✓ Successfully prepared files for GitHub Pages root deployment!');
