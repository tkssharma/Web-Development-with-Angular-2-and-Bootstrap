/**
  * spread allows you to pass each element of an array as a parameter.
  */
var list = [1, 2, 3, 4];

function foo(i, j, k, l){
  	return i*j*k*l;
}

foo(...list); // 24

function calcTaxSpread( customer1, customer2, customer3, income) {
	console.log("ES6. Calculating tax for customers with the income ", income);
	console.log("Processing ", customer1, customer2, customer3);
}
var customers = ["Smith", "Johnson", "McDonald"];
// spread operator
calcTaxSpread(...customers, 50000);

// cleaner than Function.prototype.apply
function foo (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let arr = [1, 2, 3];
foo(...arr); // same as foo.apply(foo, arr);

// declaratively flatten arrays
let numbers = [1, 2, 3];
let letters = ['a', 'b', 'c'];
let both = [...numbers, ...letters];
console.log(both); // => [ 1, 2, 3, 'a', 'b', 'c' ]


// for strings, the spread operator is an alternative to String.prototype.split
let string = "Hello";
console.log([...string]); // => [ 'H', 'e', 'l', 'l', 'o' ]