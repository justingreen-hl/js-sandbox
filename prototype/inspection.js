const o = { a: 1 };
// The newly created object o has Object.prototype as its [[Prototype]]
// Object.prototype has null as its [[Prototype]].
// o ---> Object.prototype ---> null

const b = ["a", "b", "c"];
// Arrays inherit from Array.prototype
// b ---> Array.prototype ---> Object.prototype ---> null

function g() {
  return 3;
}
// Functions inherit from Function.prototype
// (which has methods call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null


