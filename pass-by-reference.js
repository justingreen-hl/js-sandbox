// https://medium.com/front-end-weekly/understanding-pass-by-value-and-pass-by-reference-in-javascript-8e2a0806b175

let obj1 = { value: 10 };
let obj2 = obj1;

obj1.value = 20;

console.log(obj1.value); // 20
console.log(obj2.value); // 20

// While JavaScript is primarily a “pass by value” language, 
// it uses a concept called “pass by reference” when dealing with objects (including arrays and functions).

// When an object is created in JavaScript, it is stored in a memory space, 
// and the variable associated with it stores the memory address or reference where the object is stored.

// If you assign this object variable to another variable, 
// it does not copy the object. Instead, it copies the reference to the object. 
// Both variables now point to the same memory space, 
// which means changes through one variable are reflected when accessing the object through the other variable.

// Remember, JavaScript handles primitives 
// (Boolean, null, undefined, String, and Number) by value and objects (including arrays and functions) by reference. 
// Therefore, changes to a copied primitive value will not affect the original, while changes to a copied object will reflect on the original.