// https://webcluesinfo.medium.com/buffer-objects-handling-binary-data-in-node-js-1e742475b96f#:~:text=A%20buffer%20is%20a%20space,from%20one%20place%20to%20another.
let buf = Buffer.from("Node.js");
console.log(buf[0]); // 78 (ASCII code for 'N')
console.log(String.fromCharCode(buf[0])); // N

for(let byte of buf) {
  console.log(byte);
}