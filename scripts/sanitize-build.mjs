import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../dist/', import.meta.url);
const replacements = [
  ['example.com', 'invalid.invalid'],
  ['localhost', '127.0.0.1'],
];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const target = join(directory, entry.name);
    if (entry.isDirectory()) await walk(target);
    else await sanitize(target);
  }
}

async function sanitize(file) {
  const info = await stat(file);
  if (info.size > 8_000_000) return;
  const content = await readFile(file);
  if (content.includes(0)) return;
  let text = content.toString('utf8');
  const original = text;
  for (const [from, to] of replacements) text = text.replaceAll(from, to);
  if (text !== original) await writeFile(file, text);
}

await walk(root.pathname);
