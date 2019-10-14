// jshint esversion: 6

// passing along methods and properties from class to another

// in ES2015 this can be done through 'extends' keyword

// the keyword 'super' allows us to pass a class parent class params to its own
// super can only be used if a method by the same name is implemented in the parent class

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHi() {
    return `Hi ${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor() {
    super(firstName, lastName);
  }
}

const tim = new Student("Tim", "Duncan");
console.log(tim.sayHi()); // "Hi Tim Duncan"

// Some more practice...

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start() {
    return `Vroom!`;
  }
  toString() {
    return `The make, model and year of your vehicle is: ${this.make} ${this.model} ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor() {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(...arguments); // can use this rather than super(make,model,year) as well to spread values of arguements array
    this.numWheels = 2;
  }
}

