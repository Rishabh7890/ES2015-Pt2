// jshint esversion: 6

// generators are a special kind of function which can pause execution and resume at any time
// created using '*'
// when invoked, a generator object  is returned to us with the keys of value and done
// value is what is returned from the paused function using the yield keyword
// done is a boolean which returns true when the function has completed

function* pauseAndReturnValues(num) {
  for (let i = 0; i < num; i++) {
    yield i;
  }
}

const gen = pauseAndReturnValues(5);

console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// we can place multiple yield keywords inside of a generator function to pause multiple times
function* printVals() {
  yield "First";
  yield "Second";
  yield "Third";
}

const g = printVals();
console.log(g.next().value); // First
console.log(g.next().value); // Second
console.log(g.next().value); // Third

/// We can iterate over a generator using for... of loops because it implements a Symbol.iterator
for (num of pauseAndReturnValues(3)) {
  console.log(num);
}

// Async Generators
// we can use generators to pause async code
function* getMovieData(movieName) {
  console.log("starting");
  yield $.getJSON(`https://omdbapi.com?t=${movieName}ic&apikey=thewdb`);
  console.log("ending");
}

const movieGetter = getMovieData("titanic");
movieGetter.next().value.then(val => console.log(val));
