// const http = require('node:http');
import http from 'node:http'

const server = http.createServer((req, res) => {
  const name = 'Bassy';
  const html = `
    <!DOCTYPE html>
    <html>
      <head><title>Hello World</title></head>
      <body>
        <h1>Hello, ${name}</h1>
      </body>
    </html>
  `
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);

  // JSON Example
  // res.writeHead(200, { 'Content-Type': 'application/json' });
  // res.end(JSON.stringify({
  //   data: 'Hello World!'
  // }))
}).listen(8000, () => console.log(`Server is running at http://localhost:8000`));
