/**
  * Syntactic sugar for string construction
*/
var name = "John doe";
var companty = "@company";

// es5
var join = 'My name is '+ name + 'i work with'+ company 

// es6
var join = `My name is ${name} & i work with ${company}`; 

// es5
var join = 'My name is '+name + '\n' + 'i work with '+company;

// es6
var join = `My name is ${name} 
            i work with ${company}`;
