import { spawnSync } from 'node:child_process';
import { readdir, readFile, stat } from 'node:fs/promises';
import { homedir } from 'node:os';
import { join, resolve } from 'node:path';

const root = new URL('.', import.meta.url);
const cache = join(homedir(), '.cache', 'ms-playwright');
const entries = (await readdir(cache, { withFileTypes: true }))
  .filter(entry => entry.isDirectory() && entry.name.startsWith('chromium_headless_shell-'))
  .sort((a, b) => b.name.localeCompare(a.name, undefined, { numeric: true }));
let binary;
for (const entry of entries) {
  const candidate = join(cache, entry.name, 'chrome-linux', 'headless_shell');
  try { await stat(candidate); binary = candidate; break; } catch {}
}
if (!binary) throw new Error(`No cached Playwright headless shell found under ${cache}`);
const output = resolve(new URL('entry.png', root).pathname);
const page = new URL('page.html', root).href;
const result = spawnSync(binary, [
  '--no-sandbox', '--disable-gpu', '--hide-scrollbars', '--window-size=1024,1024',
  `--screenshot=${output}`, page,
], { stdio: 'inherit' });
if (result.error) throw result.error;
if (result.status !== 0) throw new Error(`Headless shell exited with status ${result.status}`);
const png = await readFile(output);
if (png.readUInt32BE(16) !== 1024 || png.readUInt32BE(20) !== 1024) {
  throw new Error(`Unexpected PNG dimensions: ${png.readUInt32BE(16)} x ${png.readUInt32BE(20)}`);
}
console.log(`entry.png: ${png.length} bytes (1024 x 1024)`);
