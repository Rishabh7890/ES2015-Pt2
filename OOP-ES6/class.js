// jshint esversion: 6

// class...
// - a new reserved keyword provided by es2015
// - class keyword creates a const --  which means it cannot be redeclared
// - it is an abstraction of constructor functions and prototypes. JS does not have built in support for OOP
// - class keyword does not hoist so you have to make them before using them

// instance methods -- if we need to place methods inside a class.
// under the hood it is placing methods on the prototype object

// class methods -- placing methods directly on a constructor
// make use of keyword 'static'

// example
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
  static isStudent(obj) {
    return obj.constructor === Student;
  }
}

const rishabh = new Student("Rishabh", "Goel");
console.log(rishabh.sayHello());
console.log(Student.isStudent(rishabh));
