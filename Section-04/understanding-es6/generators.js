/**
  * Generators are functions which can be paused and resumed later. Function 
  * context is saved across resumes.
  */

let array = [1, 2, 3];
let iteratorForArray = {};

iteratorForArray.next() 
// {value: 1, done: false}
iteratorForArray.next() 
// {value: 2, done: false}
iteratorForArray.next() 
// {value: 3, done: false}
iteratorForArray.next() 
// {value: undefined, done: true}

//--------------------------------------------//
'use strict';
// an array is a built-in iterable
let numberArray = [1, 2, 3];
// Symbol.iterator is the special property that contains a function that 
//returns an iterator
let it = numberArray[Symbol.iterator]();

// we can then use the iterator to manually iterate through the array's values
it.next(); // Object { value: 1, done: false }
it.next(); // Object { value: 2, done: false }
it.next(); // Object { value: 3, done: false }
it.next(); // // Object { value: undefined, done: true }

let stringArray = ['a', 'b', 'c'];

// the for...of loop consumes an iterable
for (let ch of stringArray) {
    console.log(ch) // a b c
}
//-------------------------------------------//
// we declare a generator using an asterisk
function* myGenerator (n) {
    // we yield values with the yield keyword
    yield n;
    n++;
    // we can yield as many times as we want
    // each yield is a "pause" in the generator function's execution
    yield n;
}
/* 
invoking a generator function returns an iterator!
*/
let myIterator = myGenerator(41);

// each call to next advances us to the next yield
let firstYield = myIterator.next();
console.log(firstYield.value); // 41
let secondYield = myIterator.next();
console.log(secondYield.value); //42

//---------------------------------------------------//

function* count(){
  var start = 0;
  while(true) {
    yield start;
    ++start;
  }
}
var iterator = count();

iterator.next(); //{value: 0, done: false}
iterator.next(); //{value: 1, done: false}
iterator.next(); //{value: 2, done: false}
iterator.return();