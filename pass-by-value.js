// https://medium.com/front-end-weekly/understanding-pass-by-value-and-pass-by-reference-in-javascript-8e2a0806b175

let a = 10;
let b = a;

a = 20;

console.log(a); // 20
console.log(b) //10, "b" remembers the value of "a" when it was first declared

// Pass by value means when a variable is assigned to another variable, 
// the value stored in the variable is copied into the new variable. 
// They are independent of each other, each occupying its own memory space.