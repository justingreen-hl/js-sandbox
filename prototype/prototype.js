const count = 123;
//console.log(count.toString()); // .toString() comes from the objects prototype chain

const o = {
  a: 1,
  b: 2,
  __proto__: {
    b: 3,
    c: 4
  }
}

console.log(o.a) // exists in o
console.log(o.b) // exists in o (exists in proto as well)
console.log(o.c); // c doesnt exist on o but it does exist in its prototype
console.log(o.d); // property doesn't exist on o or it's prototype
// console.log(o.__proto__);
