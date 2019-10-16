// jshint esversion: 6

// find
// - invoked on arrays
// - accepts a callback with value, index and array (just like forEach, map, filter etc.)
// - returns the value found, or undefined if not found
const ballers = [
  { name: "Dwyane" },
  { name: "LeBron" },
  { name: "Chris" },
  { name: "Mario" },
  { name: "Shane" }
];

console.log(ballers.find(val => val.name === "Mario")); // { name: 'Mario' }

// findIndex
// - similar to find, but returns an index or -1 if the value is not found
console.log(ballers.findIndex(val => val.name === "Dwyane")); // 0

// includes
// - returns a boolean if a value is in a string
// - easier than using indexOf
// ES5 way
console.log("awesome".indexOf("some") > -1); // true
// ES6 way
console.log("awesome".includes("some")); // true

// Number.isFinite
// - static method on Number
// - good way for handling NaN being a typeOf number
// ES5 way
function seeIfNumberOld(val) {
  if (typeof val === "number" && !isNaN(val)) {
    return "It is a number";
  }
}
// ES6 way
let seeIfNumberNew = val => {
  if (Number.isFinite(val)) {
    return "It is a number";
  }
};
