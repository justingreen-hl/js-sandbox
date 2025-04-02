// const a = {x: 1}
const a = {
  x: 1,
  // toString() {
  //   return `x is ${this.x}`
  // }
}
let aClone = {...a};
console.log(a.toString())


const myArr = [1,2,3];
const myArrTwo = [...myArr, 4];

const myObj = { 
  one: "Hello",
  two: "World"
};

const myObjTwo = {...myObj, three: "How are you"};
const myObjThree = {four: "doing?", ...myObjTwo};

// console.log(myArrTwo);
// console.log(myObjThree)