import { readFile } from 'fs/promises';

export async function readFileAsync(filePath) {
  try {
    const data = await readFile(filePath, 'utf-8');
    return data;
  } catch (err) {
    return `Error reading file ${filePath}: ${err.message}`;
  }
}