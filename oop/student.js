class Student {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  introduceSelf(greeting) {
    if(greeting) {
      return greeting;
    }
    return `Hello my name is ${this.name}`;
  }
}

const studentOne = new Student("Bobby", 1999);
console.log(studentOne.introduceSelf());
console.log(studentOne.introduceSelf("a custom greeting"));