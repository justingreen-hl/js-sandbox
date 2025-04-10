// https://webcluesinfo.medium.com/buffer-objects-handling-binary-data-in-node-js-1e742475b96f#:~:text=A%20buffer%20is%20a%20space,from%20one%20place%20to%20another.
import fs from 'fs';

fs.readFile('./test.txt', 'utf8', (err, data) => {
  if(err) {
    console.error(err);
    return;
  }

  console.log(data);
})