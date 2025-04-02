class Professor {
  constructor(name, teaches) {
    this.name = name;
    this.teaches = teaches;
  }

  grade(paper) {
    return paper;
  }

  introduceSelf(greeting) {
    return greeting
  }
}

const profOne = new Professor("Mr. Ledbetter", "Tech Ed");
// console.log(profOne.name, profOne.teaches);
console.log(profOne.introduceSelf(`Hello class my name is ${profOne.name}`));