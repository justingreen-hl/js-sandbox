class Person {
  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    return `Hello my name is ${this.name}`;
  }
}

class Professor extends Person {
  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  grade(paper) {

  }

  introduceSelf() {
    return `Hello class my name is ${this.name} and I teach ${this.teaches}`;
  }
}

class Student extends Person {
  constructor(name, year) {
    super(name)
    this.year = year;
  }

  canStudyArchery() {
    return this.year > 1
  }
}

const studentOne = new Student("Bobby", 1998);
const profOne = new Professor("Mr. Gilfoyle", "Computer Science")
console.log(studentOne.introduceSelf())
console.log(profOne.introduceSelf());

if(studentOne.canStudyArchery()) {
  console.log("Enrolled in Archery");
}