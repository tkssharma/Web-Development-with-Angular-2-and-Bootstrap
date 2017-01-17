// example 01
function foo (a, ...args) {
    // much easier and more descriptive than
	// Array.prototype.slice.call!
    args.forEach(arg => {
    	console.log(a + arg);
    });
}
foo(1, 2)        // => 3
foo(1, 2, 3)    // => 3 4
// example 02
function calcTaxES6(income, ...customers) {
	console.log("ES6. Calculating tax for customers with the income "
	, income);

	customers.forEach(function (customer) {
		console.log("Processing ", customer);
	});
}

calcTaxES6(50000, "Smith", "Johnson", "McDonald");
calcTaxES6(750000, "Olson", "Clinton");