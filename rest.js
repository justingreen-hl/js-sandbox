// Rest parameter must be last parameter
let {x, y, ...z} = {
  x: 1,
  y: 2,
  a: 3,
  b: 4
};

// console.log(z);

// Nested Objects
let complex = {
  x: {a: 1, b: 2, c: 3},
  y: [4,5,6]
};

let { 
  x: {a:xa, ...xbc },
  y: [y0, ...y12]
 } = complex;

// console.log(y12)

// Errors
// let { x, y, ...z } = null; // runtime error
// let { ...x, y, z } = obj; // syntax error
// let { x, ...y, ...z } = obj; // syntax error, rest properties must be last argument only can't have two