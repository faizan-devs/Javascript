// Inheritance in JavaScript is a mechanism that allows one object or class to access the properties and methods of another. JavaScript supports inheritance primarily through prototypes (prototype-based inheritance) and ES6 classes (class-based syntax that uses prototypal inheritance under the hood).

//* 1. Prototype-Based Inheritance (Traditional JS)
//? In JavaScript, every object has an internal link to another object called its prototype. You can use this to implement inheritance.
/*
function Animal(name){
    this.name = name
}

Animal.prototype.speak = function(){
    console.log(`${this.name} makes a sound.`)
}

function Dog(name){
    Animal.call(this, name); // Inherit properties
}

Dog.prototype = Object.create(Animal.prototype); // Inherit methods
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
    console.log(`${this.name} barks.`)
}

const dog = new Dog("Rex");
dog.speak(); // Rex makes a sound.
dog.bark(); // Rex barks
*/

//* 2. Class-Based Inheritance (ES6)
//? JavaScript introduced the class syntax in ES6 to make inheritance cleaner and more readable.

class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a sound.`)
    }
}

class Dog extends Animal{
    bark(){
        console.log(`${this.name} barks.`)
    }
}

const dog = new Dog("Max");
dog.speak(); // Max makes a sound.
dog.bark(); // Max barks.

// Key COncept

//* Concept || Description
// extends || Used in class-based inheritance to inherit from another class
// super() || Calls the parents class constructor
// Object.create() || Creates a new object with the specified prtotype
// Prototype Chain || Objects inherit form other objects via a chain of prototypes 

// Object Inheritance Example
const aniaml = {
    speak(){
        console.log(`Animal speaks`)
    }
};

const dogie = Object.create(aniaml);
dogie.speak();