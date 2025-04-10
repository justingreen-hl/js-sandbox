// Intro - https://webcluesinfo.medium.com/buffer-objects-handling-binary-data-in-node-js-1e742475b96f#:~:text=A%20buffer%20is%20a%20space,from%20one%20place%20to%20another.
// In Depth - https://ruanmartinelli.com/blog/a-complete-guide-to-buffers/
let buf = Buffer.from("Node.js");
console.log(buf[0]); // 78 (ASCII code for 'N')
console.log(String.fromCharCode(buf[0])); // N

for(let byte of buf) {
  console.log(byte);
}

console.log(buf.length + ' is the length of the buffer')

const buffer1 = Buffer.from('cars');
const buffer2 = Buffer.from(buffer1);

buffer2[0] = 0x6d;

console.log(buffer1.toString());
console.log(buffer2.toString());