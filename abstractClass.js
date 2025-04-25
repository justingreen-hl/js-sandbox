// An abstract class cannot be instantiated
// It serves only as a blueprint for a class
abstract class Shape {
  constructor(name) {
    this.name = name;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
}

const myShape = new Shape('My shape'); // this will throw an error
const shortCircle = new Circle("Short circle", 0.5); // works as expected