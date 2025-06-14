// In JavaScript, Objects and the keyword this are core concepts in Object-Oriented Programming (OOP). Let’s break them down with examples:

//* 1. What Are Objects?
//? An object is a collection of key-value pairs (properties and methods). In OOP, we use objects to represent real-world entities.
const person = {
    name: "Alice",
    age: 25,
    greet: function () {
        console.log(`Hi my name is ${this.name} and i am ${this.age} years old`)
    }
};
// person.greet();

//* 2. this Keyword
//? The this keyword refers to the object that is calling the method.
const car = {
    brand: "Tesla",
    model: "Model S",
    getDetails: function () {
        return `${this.brand}:- ${this.model}`
    }
};
// console.log(car.getDetails());

//* 3. Constructor Functions
//? We can use constructor functions to create multiple objects with the same structure:
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        return `Hi I'm ${this.name}`
    }
}

const p1 = new Person("Zara Ali", 18);
const p2 = new Person("Sania Ali", 21);
// console.log(p1.greet());
// console.log(p2.greet());
// When using new, this refers to the new object being created.

//* 4. this in Arrow Functions
//? Arrow functions do not have their own this. They inherit it from their surrounding (lexical) scope.
const user = {
    name: "Tom",
    greet: () => {
        // return `Hello, ${user.name}`
        return `Hello, ${this.name}` // give undefined because they inherit this from surrounding context and this is a object
    }
};
// console.log(user.greet())
//  Don't use arrow functions for methods inside objects if you need to access this.

//* 5. Classes (Modern JavaScript OOP)
//? JavaScript introduced the class syntax in ES6.

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound a lot`;
    }
}

const tiger = new Animal("Tiger");
console.log(tiger.speak());