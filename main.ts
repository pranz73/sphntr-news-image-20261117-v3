import { mkdir, copyFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');
await mkdir(outputDir, { recursive: true });
const destination = join(outputDir, 'entry.png');
await copyFile(source, destination);
const [sourceInfo, copiedInfo] = await Promise.all([stat(source), stat(destination)]);
if (sourceInfo.size !== copiedInfo.size) throw new Error('Copied PNG size does not match source');
console.log(`Copied entry.png (${copiedInfo.size} bytes) to ${destination}`);
