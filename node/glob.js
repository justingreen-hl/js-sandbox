import { glob, globSync } from 'glob';

const jsFiles = await glob('**/*.js', { ignore: '**/node_modules/**' });

const images = globSync('{css,public}/*.{png,jpg}');

console.log(images);