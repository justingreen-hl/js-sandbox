// Create an index.html file using node.js
import pug from 'pug';
import fs from 'node:fs';

const compiledPug = pug.compileFile('template.pug');

const html = compiledPug({
  title: 'Generated Page',
  message: 'Hello, Puggy'
});

// const name = 'Bassy';
// const html = `<!DOCTYPE html>
//   <html>
//     <head><title>Hello World</title></head>
//     <body>
//       <h1>Hello, ${name}</h1>
//     </body>
//   </html>`;

fs.writeFile('test.html', html, err => {
  if(err) console.log(err);
  console.log('success')
})