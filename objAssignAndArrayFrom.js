// jshint esversion: 6

// Object.assign will create copies of objects WITHOUT the same reference
// IMPORTANT: it will not create 'deep clone' -- if you need a deep clone write your own function or explore libs like lodash

// ES5 problem
var o = { name: "Rishabh" };
var o2 = o;
// a problem will arise because this just creates a reference to the 'o' object. By changing o2.name we actually change o.name as well
o2.name = "Sparsh";
console.log(o.name); // Sparsh

// ES6 fix with Object.assign. Notice first param is empty object. This is crucial
const obj = { name: "Rishabh" };
const obj2 = Object.assign({}, obj);

// now obj 2 has changed but no effect on obj
obj2.name = "Sparsh";
console.log(obj2.name);
console.log(obj.name);

// Array.from

// converts other data types into arrays
// very useful for converting array-like-objects into arrays
// in example below what we get back will be an array like obj of all elements by tag name div
const divs = document.getElementsByTagName("div");
const converted = Array.from(divs);

// using Array.from to convert sets into arrays
const firstSet = new Set([1, 2, 2, 2, 3, 3, 4, 5]);
const arrayFromSet = Array.from(firstSet);
