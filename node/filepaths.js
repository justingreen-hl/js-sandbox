import path from 'node:path';

const notes = 'test.txt';

console.log(path.dirname(notes))
console.log(path.basename(notes))
console.log(path.extname(notes))
console.log(path.resolve('text.txt'))