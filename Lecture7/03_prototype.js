//* What is a Prototype in JavaScript?
//? In JavaScript, every object has an internal link to another object called its prototype. This prototype object can contain properties and methods that the original object can access through prototype chaining.

//? JavaScript uses prototype-based inheritance, not class-based (although ES6 class syntax exists, it's just syntactic sugar over prototypes).

function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function () {
    console.log(`Hello ${this.name}, How are you?`)
};
const user1 = new Person("Zara");
user1.sayHello();
// sayHello is not a direct property of user1.
// Instead, user1 inherits it from Person.prototype.

//*  Prototype Chain
//? When you try to access a property or method:
//? JavaScript first checks if the object has it directly.
//? If not, it looks up the chain via __proto__ (or [[Prototype]] internally).
//? This continues until it either finds it or reaches null.

console.log(user1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true

// Use Cases of Prototypes
// Reusing methods across object instances.
// Memory efficiency (methods aren’t duplicated).
// Building custom inheritance hierarchies.

// ES6 Class Equivalent
class Persons {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const user = new Person("Sania");
user.sayHello();

// This class syntax still uses prototypes behind the scenes. sayHello() is added to Person.prototype.

//* Prototype:- An object from which other objects inherit properties.
//* Prototype chain:- Chain of inheritance followed when looking for a property.
//* Purpose:- Enable method sharing and inheritance in javascript.

// Visual Diagram of the Prototype chain
// user1 ---> Person.prototype ---> Object.prototype ---> null

// Legend:
// ---> means "inherits from" or "looks up to"

function Hero(name) {
    this.name = name;
}

Hero.prototype.sayHello = function () {
    console.log(`Hero name is ${this.name}`);
}

const hero = new Hero("Ironman");
hero.sayHello();

// hero has name directly on the object (hero.name)
// No sayHello() directly, so it looks up to Hero.prototype
// if not found in Person.Prototype, it would go to Object.prototype, then null 

console.log(hero.__proto__ === Hero.prototype); // true
console.log(Hero.prototype.__proto__ === Object.prototype); // true

// Constructor function for a game character
function GameCharacter(name, health) {
    this.name = name;
    this.health = health;
}

// Add methods using prototype
GameCharacter.prototype.attack = function (target) {
    console.log(`${this.name} attacks ${target.name}!`);
    target.health -= 10;
};

GameCharacter.prototype.status = function () {
    console.log(`${this.name} has ${this.health} health.`);
};

// Create two characters 
const hero1 = new GameCharacter("Hero", 100);
const villain = new GameCharacter("Villain", 80);

// Use shared prototype methods
hero1.attack(villain); // Hero attacks villain
hero1.attack(villain); // Hero attacks villain
villain.status(); // Villain has 70 health

//* What’s Happening:
//? attack() and status() are not copied for every object — they live once on GameCharacter.prototype.
//? Both hero and villain share the same logic via prototype chaining.

// You can inspect:
console.log(hero1.__proto__ === GameCharacter.prototype); // true
console.log(villain.__proto__ === GameCharacter.prototype); // true

// Efficient memory use :- Methods defined once on prototype
// Inheritance :- Child object look up to prototype for behavior
// Core to JS OOP :- Used behind the scenes in ES^ classes too

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} the ${this.breed} barks!`);
    }
}

const myDog = new Dog("Bruno", "Labrador");

myDog.bark();
myDog.eat();

// Prototype Chain in This Example
// myDog
//   ↓
// Dog.prototype
//   ↓
// Animal.prototype
//   ↓
// Object.prototype
//   ↓
// null

//* JavaScript checks each prototype level until it finds the method:
// bark() → found on Dog.prototype
// eat() → not on Dog.prototype, so it looks at Animal.prototype
// Built-in methods like toString() → from Object.prototype

//* Feature || class syntax || Prototype chaining under the hood
// constructor || constructor() method || Function constructor
// Inheritance || extends + super() || Object.create() or manual link
// Prototype chain || Automatically handled || Must manually connect prototypes
// Behind the scenes || Uses prototype chain || Explicit prototype manipulation

//* Key Takeaway
// Even with modern class syntax, JavaScript still uses prototype chaining to handle inheritance. The class syntax just makes it easier and cleaner to write OOP code.