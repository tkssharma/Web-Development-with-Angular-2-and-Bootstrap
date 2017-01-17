/**
  * default arguments in ES5 vs ES6 
  */
//ES5
function multiply(a, b) {
  // initilize b with value manually ...
  var b = typeof b !== 'undefined' ?  b : 1;

  return a*b;
}

multiply(5); // 

//ES6 declaration 
function multiply(a, b = 1) {
	return a*b;
}
multiply(5); // 5




//ES5
function calcTaxES5(income, state){

	state = state || "Florida";

	console.log("ES5. Calclating tax for the resident of \n" 
		         + state + " with the income " + income);

}

calcTaxES5(50000);

//ES6
function calcTaxES6(income, state="Florida") {
	console.log(`ES6.Calclating tax for the resident of  ${state}  
		         with the income ${income}`);
}

calcTaxES6(50000);
