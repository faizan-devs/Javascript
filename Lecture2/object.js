// objectName.property
// let age = person.age;

//objectName["property"]
// let age = person["age"];

//objectName[expression]
// let age = person[x];

let mysym = Symbol("key1")
const person1 = {
	name: "Faizan",
	age: 50,
	[mysym]: "newsym"
};
// console.log(person1[mysym])
// console.log(typeof person1[mysym])
let x = "name";
let y = "age";

// console.log(person[x] + " is " + person[y] + " years old");

// Object Properties
// Properties are key-value pairs where the key is a string (or Symbol) and the value can be any data type.

let person = {
	name: "John",     // String property
	age: 25,          // Number property
	isStudent: false, // Boolean property
	hobbies: ["reading", "gaming"], // Array property
	address: { city: "New York", zip: 10001 } // Object property
};

// console.log(person.name);   // Accessing property → "John"
// console.log(person["age"]); // Alternative way → 25

// Adding & Updating Properties
person.email = "john@example.com"; // Adding new property
person.age = 26; // Updating property
// console.log(person);

// Deleting a Property
delete person.isStudent;
// console.log(person);

// Object Methods
// Methods are functions inside objects.

let person2 = {
	name: "Alice",
	greet: function () {
		console.log("Hello, my name is " + this.name);
	},
};

// person2.greet(); // Output: Hello, my name is Alice

// Shorter Syntax for Methods
let car = {
	brand: "Tesla",
	start() {
		console.log(this.brand + " is starting...");
	},
};

// car.start(); // Output: Tesla is starting...

let admin = {
	name: "Zara",
	isLoggedIn: true,
	device: "DHPQSKT232",
	greet() {
		const adminStatus = () => (
			`Hi, ${this.name} you just loggedIn in this device ${this.device}`
		);
		console.log(adminStatus());
	},
};
admin.greet()
// console.log("age" in admin);
Object.assign(admin, { age: 20 });
console.log(admin);

//? this Keyword
//? Refers to the object it belongs to.
//? In arrow functions, this behaves differently (inherits from outer scope).

let student = { name: "Emma", age: 22, grade: "A" };

// console.log(Object.keys(student));   // ["name", "age", "grade"]
// console.log(Object.values(student)); // ["Emma", 22, "A"]
// console.log(Object.entries(student)); // [["name", "Emma"], ["age", 22], ["grade", "A"]]

// Working with Objects
// 🔹 Object Shorthand
let name = "Sam";
let age = 30;
let person3 = { name, age }; // Same as { name: name, age: age }

// console.log(person3); // { name: "Sam", age: 30 }

// Spread Operator (...)
let car1 = { brand: "BMW", color: "red" };
let car2 = { ...car1, model: "X5" }; // Copy & add new property

// console.log(car2); // { brand: "BMW", color: "red", model: "X5" }

// Object Destructuring
let user = { firstName: "John", lastName: "Doe" };
// let { firstName, lastName } = user;
let { firstName: first, lastName: last } = user;

// console.log(firstName); // "John"
// console.log(first);


// Object Constructor Functions
// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.


// An object constructor in JavaScript is a special function used to create and initialize objects. It acts like a blueprint for creating multiple objects with similar properties and methods.

// How It Works:
// Define a function (constructor function) with a capitalized name (by convention).
// Use this to assign properties and methods.
// Use the new keyword to create new instances.

function Person(first, last, age) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;

	this.fullName = function () {
		console.log(`${this.firstName} ${this.lastName}`)
	}
}

Person.prototype.nationality = "Indian";
Person.prototype.eyeColor = "Black";

Person.prototype.changeColor = function (eye) {
	this.eyeColor = eye;
}

let myFather = new Person("Sarfaraz", "Alam", 45);
let myMother = new Person("Zeenat", "Parween", 38);


myMother.changeColor("Brown")

console.log(myFather)
console.log(myMother)
console.log(myFather.fullName())
console.log(myMother.fullName())
console.log(myFather.eyeColor)
console.log(myMother.eyeColor)