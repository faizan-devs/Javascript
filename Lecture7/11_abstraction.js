//* 1. Abstraction
//? Abstraction hides complex implementation details and shows only the necessary features of an object.

//* Key Concepts:
//? Focus on what an object does, not how.
//? Achieved using abstract classes or interfaces in many languages.
//? Enforces a contract for subclasses.

// JavaScript doesn't have native abstract keyword, but we simulate abstraction:
class Vehicle {
    constructor() {
        if (new.target === Vehicle) {
            throw new TypeError("Cannot construct Vehicle instances directly")
        }
    }

    start() {
        throw new Error("Method 'start()' must be implemented");
    }
}

class Car extends Vehicle {
    start() {
        console.log("Car starting...");
    }
}

const myCar = new Car();
myCar.start();
// Benefits:
// Improves code structure and reusability.
// Helps define consistent APIs.

//* 2. Mixins
// Mixins are a way to compose behavior across unrelated classes, avoiding deep inheritance.

//* Key Concepts:
//? Used for multiple inheritance (unsupported in JavaScript natively).
//? Share functionality across classes.
//? Avoid “diamond problem” of classical multiple inheritance.

let CanFly = (Base) => class extends Base {
    fly() {
        console.log(`${this.name} is flying!`);
    }
};

let CanSwim = (Base) => class extends Base {
    swim() {
        console.log(`${this.name} is swimming!`);
    }
};

class Animal {
    constructor(name) {
        this.name = name;
    }
}

// Compose behavior
class Duck extends CanSwim(CanFly(Animal)) { }

const daffy = new Duck("Daffy");
daffy.fly();  // Daffy is flying!
daffy.swim(); // Daffy is swimming!
//  Benefits:
// Promotes composition over inheritance.
// Makes behavior reusable and flexible.

//* Best Practices:
//? Use abstraction to enforce a clear API and hide implementation details.
//? Use mixins when you want to share behavior across classes that don't share a common parent.
//? Favor composition over inheritance where applicable.