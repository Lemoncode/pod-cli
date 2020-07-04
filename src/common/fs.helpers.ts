import fs from 'fs';
import path from 'path';

export const writeFile = async (file: string, content: string = '') => {
  await fs.promises.mkdir(path.dirname(file), { recursive: true });
  await fs.promises.writeFile(file, content);
};
