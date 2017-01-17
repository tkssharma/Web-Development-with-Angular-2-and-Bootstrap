// inline
var reflect = function(value) {
	 return value;
}
// can be written as 
var reflect = value => value;
// block
var reflect = value => {
    return value;
};
// effectively equivalent to:
var reflect = function(value) {
    return value;
};
//---------------------------------------------------//
// parenthesis
var sum = function(num1,num2){
	return num1+num2;
}
var sum = (num1, num2) => num1 + num2;
// empty
var nothing = () => {};
// return object inline

//Arrow Functions - syntax
var sum = (num1, num2) => num1 + num2;

// effectively equivalent to:

var sum = function(num1, num2) {
    return num1 + num2;
};
var getName = () => "Trogdor";

// effectively equivalent to:

var getName = function() {
    return "Trogdor";
};

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);  // 66

var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]

var double = arr.map(v => v * 2);       // [10, 12, 26, 0, 2, 36, 46]

//-----------------------------------------------------//

var PageHandler = {
    id: "123456",
    init: function() {
        document.addEventListener("click", (function(event) {
            this.doSomething(event.type);     // no error
            // bind function with this 
        }).bind(this), false);
    },
    doSomething: function(type) {
    	// assign this object to another var
        var self = this;
        setTimeout(function() {
            console.log("Handling " + type  + " for " + self.id);
        });
    }
};

var PageHandler = {

    id: "123456",

    init: function() {
        document.addEventListener("click",
                event => this.doSomething(event.type), false);
    },

    doSomething: function(type) {
        setTimeout(() => console.log("Handling " + type  + " for " + this.id));
    }
};