// jshint esversion: 6

// promise is a one time guaranteed return of some future value

// when value is figured out, the promise is either resolved or rejected

// in es6...
// - promises are created using new keyword
// - every promise constructor accepts a callback function which contains two params -- resolve and reject
// - these params are both functions to be run if the promise is resolved or rejected

// example
function displayAtRandomTime() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (Math.random() > 0.5) {
        resolve("Yes");
      } else {
        reject("No");
      }
    }, 1000);
  });
}

displayAtRandomTime()
  .then(function(value) {
    console.log(value);
  })
  .catch(function(error) {
    console.log(error);
  });

// using omdb api & jQuery... won't work in console bc jQuery... just for structure example
// main point is to show we can chain together .then because each one returns a promise
const years = [];

$.getJSON("https://omdbapi.com?t=titanic&apikey=thewdb")
  .then(movie => {
    years.push(movie.Year);
    return $.getJSON("https://omdbapi.com?t=shrek&apikey=thewdb");
  })
  .then(movie => {
    years.push(movie.Year);
    console.log(years);
  });

console.log("All done");

// Promise.all accepts an array of promises and resolves all of them or rejects once a single one of the promises has been first rejected. (fail fast)
// if all of the passed in promises fulfill, Promise.all is fulfilled with an array of the values from the passed in promises, in the same order as the promises passed in
// important to note that promises don't resolve sequentially, but Promise.all waits for them
function getMovie(title) {
  return $.getJSON(`https://omdbapi.com?t=${title}ic&apikey=thewdb`);
}

const titanicPromise = getMovie("titanic");
const shrekPromise = getMovie("shrek");
const takenPromise = getMovie("taken");

Promise.all([titanicPromise, shrekPromise, takenPromise]).then(movies => {
  return movies.forEach(movie => {
    console.log(movie.Year);
  });
});
