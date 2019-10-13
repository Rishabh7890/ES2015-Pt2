// jshint esversion: 6

// maps

// also called hash maps in other languages
// similar to objects, except the keys can be ANY data type
// in objects keys must be strings

// key features of using maps
// - finding size is easy -- no more loops or Object.keys()
// - keys can be any data type
// - you can accidently overwrite keys on the Object.prototype in an object but maps do not have that issue
// iterating keys and values is very easy

// Use maps
// - when you need to look up keys dynamically (not hard coded strings)
// - if you need keys that are not strings
// - if you are frequently adding and removing key/value pairs
// - if you are operating on multiple keys at a time

// created using new keyword
const firstMap = new Map();

// setting vals
firstMap.set(1, "Rishabh");
firstMap.set(false, "a boolean");

const arrayKey = [];
const objKey = {};

firstMap.set(arrayKey, [1, 2, 3]);
firstMap.set(objKey, { a: 1 });

console.log(firstMap);
console.log(firstMap.size);

// getting vals
console.log(firstMap.get(false));
console.log(firstMap.get(objKey));

// can iterate over a map using for... of loop since maps implement a Symbol.iterator
console.log(firstMap.keys()); // [Map Iterator] { 1, false, [], {} }
console.log(firstMap.values()); // [Map Iterator] { 'Rishabh', 'a boolean', [ 1, 2, 3 ], { a: 1 } }

// One special type of map is a WeakMap
// - WeakMap is similar to map but all keys MUST be objects
// - values can be cleared from memory if there is no reference to them
// - more performant than maps, but cannot be iterated over