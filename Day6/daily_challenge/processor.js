import { readFileAsync } from './fileReader.js';
import { writeFileAsync } from './fileWriter.js';
import { readdir } from 'fs/promises';
import path from 'path';

export async function processFiles() {
  const inputDir = './input';
  const outputDir = './output';

  try {
    const files = await readdir(inputDir);

    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, `processed_${file}`);

      const content = await readFileAsync(inputPath);
      const modified = `${new Date().toISOString()}\n${content.toUpperCase()}`;

      const result = await writeFileAsync(outputPath, modified);
      console.log(result);
    }
  } catch (err) {
    console.error(`Processing error: ${err.message}`);
  }
}