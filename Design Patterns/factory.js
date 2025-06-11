// The Factory pattern provides an interface for creating objects, allowing subclasses to alter the type of objects that will be created.

class Car {
  constructor(model) {
    this.model = model;
  }
  drive() {
    console.log(`${this.model} is driving`);
  }
}

class CarFactory {
  static createCar(model) {
    if (model === "sedan") {
      return new Car("sedan");
    } else if (model === "suv") {
      return new Car("suv");
    }
  }
}

const sedan = CarFactory.createCar("sedan");
const suv = CarFactory.createCar("suv");

sedan.drive();
suv.drive();
