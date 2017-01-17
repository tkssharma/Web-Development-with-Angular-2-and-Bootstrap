/**
  * extract data from arrays or objects
  */

var foo = [1, 2, 3];
var [one, two, three] = foo;
// one => 1, two => 2, three => 3

var {a, b} = {a:1, b:2};
//-----------------------------------//
// a => 1, b => 2
var foo = ["one", "two", "three"];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
//------------------------------------//
var x = [1, 2, 3, 4, 5];
var [y, z] = x;

console.log(y); // 1

console.log(z); // 2