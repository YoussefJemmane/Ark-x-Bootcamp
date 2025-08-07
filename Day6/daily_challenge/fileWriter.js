import { writeFile } from 'fs/promises';

export async function writeFileAsync(filePath, content) {
  try {
    await writeFile(filePath, content, 'utf-8');
    return `Successfully wrote to ${filePath}`;
  } catch (err) {
    return `Error writing to file ${filePath}: ${err.message}`;
  }
}