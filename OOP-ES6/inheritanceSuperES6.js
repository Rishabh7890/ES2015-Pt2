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
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
}

const tim = new Student("Tim", "Duncan");
console.log(tim.sayHi()); // "Hi Tim Duncan"
