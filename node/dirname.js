import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url); // get path to file
const __dirname = path.dirname(__filename);

console.log(__dirname)