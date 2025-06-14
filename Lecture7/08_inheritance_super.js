//* Inheritance and super in JavaScript (ES6+)
//? In JavaScript, inheritance allows one class to acquire the properties and methods of another class. The super keyword is used to access and call functions on an object's parent.

//* 1. Class Inheritance in JavaScript
//? JavaScript uses prototypal inheritance under the hood, but with ES6, we can use the class syntax to make it more readable.
/*
class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a noise.`)
    }
}

class Dog extends Animal{
    bark(){
        console.log(`${this.name} barks`)
    }
}

const dog = new Dog("Rocky");
dog.speak();
dog.bark();
*/

//* 1. Class Inheritance in JavaScript
//? JavaScript uses prototypal inheritance under the hood, but with ES6, we can use the class syntax to make it more readable.
/*
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // calls Aniaml's constructor
        this.breed = breed;
    }

    display() {
        console.log(`${this.name} is a ${this.breed}`)
    }
}

const dog = new Dog("Buddy", "Labrador");
dog.display();
*/

// Calling Parent Method with super.method()
class Aniaml {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Aniaml {
    speak() {
        super.speak(); // call Aniaml's speak
        console.log("Dog Barks");
    }
}

const dog = new Dog();
dog.speak();

// Summary

//* Concept       || Syntax            || Purpose
// Inheritance    || class B extends A || To inherit methods and properties
// Super()        || In constructor    || To call the parent constructor
// super.method() || Inside method     || To call a method from the parent class

//* We'll build a simple system with a base class Employee and two child classes: Manager and Developer.

class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
    }
}

class Manager extends Employee {
    constructor(name, age, salary, department) {
        super(name, age, salary);
        this.department = department;
    }

    getDetails() {
        return `${super.getDetails()}, Department: ${this.department}`;
    }
}

class Developer extends Employee {
    constructor(name, age, salary, language) {
        super(name, age, salary);
        this.language = language;
    }

    getDetails() {
        return `${super.getDetails()}, Language: ${this.language}`;
    }
}

const employee = new Employee("Faizan", 22, 50000);
const manager = new Manager("Zara", 20, 80000, "Google Gemini Team");
const developer = new Developer("Sania", 21, 70000, "Javascript");

console.log(employee.getDetails());
console.log(manager.getDetails());
console.log(developer.getDetails());