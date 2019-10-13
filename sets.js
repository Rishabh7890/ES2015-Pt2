// jshint esversion: 6

// set is a data structure where all the values are unique. A type of object
// any type of value can exist in a set
// created using new keyword

const s = new Set();

// can also be created from an array
const s2 = new Set([1, 1, 2, 2, 2, 3, 4, 5]);

s.add(10);
s.add(20);
s.add(10); // this 10 will not get added since one already exists

console.log(s); // Set { 10, 20 }
console.log(s2); // Set { 1, 2, 3, 4, 5 }

// to check size
console.log(s.size); // 2

// to check if a set contains a value
console.log(s.has(10)); // true

// to delete from set
console.log(s2.delete(5)); // true

// sets implement Symbol.iterator so we can iterate over values using for...of loop
let printVals = set => {
  for (let val of set) {
    console.log(val);
  }
};

printVals(s2);

// Similar to maps, sets also contain a special set called WeakSet
// values MUST be objects
// values in a WeakSet can be cleared from memory if there is no reference to them
// More performant than sets, but cannot be iterated over
