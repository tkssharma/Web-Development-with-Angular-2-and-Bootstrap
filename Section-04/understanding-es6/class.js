'use strict';

function Dog (name, breed) {
	this.name = name;
	this.breed = breed;
}
// instance methods
Dog.prototype.bark = function () {
	console.log('arf!');
};
Dog.prototype.sayName = function () {
	console.log('Hi, my name is ', this.name); 
};

// static methods
Dog.fetchAll = function () {
	return $http.get('/api/dogs')
	.then(res => res.data)
	.catch(console.error);
};
const ben = new Dog('Ben', 'pitbull');
ben.bark(); // arf!


//-----------------------------------------------------//

class Dog {
	constructor (name, breed) {
		this.name = name;
		this.breed = breed;
	}
	sayName () {
		console.log('Hi, my name is ', this.name);
	}
	bark () {
		console.log('arf!');
	}
	static fetchAll () {
		return $http.get('/api/dogs')
		.then(res => res.data)
		.catch(console.error);
	}
}
const ben = new Dog('Ben', 'pitbull');
ben.bark() // arf!


//------------------------------------------------//
'use strict';

function Animal (name) {
    this.name = name;
}
Animal.prototype.sayName = function () {
    console.log('Hi, my name is ', this.name);
};

function Dog (name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}
Dog.prototype.bark = function () {
    console.log('arf!');
};

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;




//--------------------------------------------------------//
'use strict';

class Animal {
    constructor (name) {
        this.name = name;
    }
	
    sayName () {
	console.log('Hi, my name is ', this.name);
    }
}

class Dog extends Animal {
    constructor (name, breed) {
        super(name);
	this.breed = breed;
    }
	
    bark () {
	console.log('arf!');
    }
}