const parent = {
  value: 2,
  method() {
    return this.value + 1;
  }
}

//console.log(parent.method()); // this refers to parent in this case

// child is an object that inherits from parent
const child = {
  __proto__: parent
}

console.log(child.method()); // 3

child.value = 4;

console.log(child.method()); // 5

// Class based version of child inheriting properties and methods
class Parent {
  constructor(value) {
    this.value = value;
  }

  method() {
    return this.value + 1;
  }
}

const demo = new Parent(2);
console.log(demo.method());

let obj = {};
console.log(Object.getPrototypeOf(obj));
console.log(Object.getPrototypeOf(Object.prototype));