//* 1. Polymorphism (Many Forms)
//? Definition: Polymorphism means the ability of different objects to respond to the same method name in different ways.

//? In JavaScript (especially using classes or prototypes), polymorphism is achieved through method overriding, where a child class provides its own version of a method inherited from a parent class.

class Animal {
    speak() {
        console.log("The animal makes a sound.")
    }
}

class Dog extends Animal {
    speak() {
        console.log("The dog barks.");
    }
}

class Cat extends Animal {
    speak() {
        console.log("The cat meows.")
    }
}

// Function that uses polymorphism
function makesAnimalSpeak(animal) {
    animal.speak();  // same method name, different behavior
}

const dog = new Dog();
const cat = new Cat();

// makesAnimalSpeak(dog);
// makesAnimalSpeak(cat);

// dog.speak();
// cat.speak();

// 1. Polymorphism with Inheritance
class Shape {
    area() {
        console.log("Area formula depends on the shape.")
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        console.log("Circle Area:", Math.PI * this.radius ** 2)
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        console.log("Square Area:", this.side ** 2);
    }
}

const shapes = [new Circle(5), new Square(4)];
shapes.forEach(shape => shape.area());

// Polymorphism via Function Parameters
// You can pass different object types to the same function, and they behave differently:
class EmailNotification {
    send() {
        console.log("Sending Email Notification...");
    }
}

class SMSNotification {
    send() {
        console.log("Sending SMS Notification...")
    }
}

function notify(userNotifier) {
    userNotifier.send();
}

const email = new EmailNotification();
const sms = new SMSNotification();

notify(email);
notify(sms);

// Polymorphism in Arrays of Objects
class Developer {
    work() {
        console.log("Writing code...");
    }
}

class Designer {
    work() {
        console.log("Designing interfaces...")
    }
}

class Tester {
    work() {
        console.log("Testing the product...")
    }
}

const team = [new Developer(), new Designer(), new Tester()];
team.forEach(member => member.work());

// Real-World Backend-Like Polymorphism Example
//* Imagine a basic Express.js-like structure:
class RequestHandler {
    handle(req) {
        console.log("Handling generic request.")
    }
}

class AuthHandler extends RequestHandler {
    handle(req) {
        console.log("Handling authentication request")
    }
}

class DataHandler extends RequestHandler {
    handle(req) {
        console.log("Handling data fetch request.")
    }
}

function handleRequest(handler, req) {
    handler.handle(req);  // same function, different behaviours
}

const auth = new AuthHandler();
const data = new DataHandler();

handleRequest(auth, {}); // Handling authentication request.
handleRequest(data, {}); // Handling data fetch request

// Summary
//* Type || Behavior
// Class-based || Method override in subclasses
// Function-based || Passing different objects to same function
// Array-based || Looping through polymorphic objects
// Real-world example || Request handlers, services, notification types

//* 2. Method Overriding
//? Definition: When a subclass provides a specific implementation of a method already defined in its superclass.

//? Overriding replaces the inherited method with a new one in the child class.

class Vehicle {
    start() {
        console.log("Starting a vehicle...");
    }
}

class Car extends Vehicle {
    start() {
        console.log("Starting the car...")
    }
}

const myCar = new Car();
myCar.start(); // Output: Starting the car

// 1. Basic Class Example
class Animal {
    sound() {
        console.log("Some generic animal sound")
    }
}

class Dog extends Animal {
    sound() {
        console.log("Bark");
    }
}

const myDog = new Dog();
myDog.sound();

// 2. Calling Parent Method using super
class Animal {
    sound() {
        console.log("Animal makes a sound")
    }
}

class Cat extends Animal {
    sound() {
        super.sound();
        console.log("meow")
    }
}

const myCat = new Cat();
myCat.sound();

// 3. Override in Multiple Child Classes
class Vehicle {
    start() {
        console.log("Starting Vehicle...")
    }
}

class Car extends Vehicle {
    start() {
        console.log("Starting car...")
    }
}

class Bike extends Vehicle {
    start() {
        console.log("Starting bike...")
    }
}

const car = new Car();
const bike = new Bike();
car.start();
car.bike();

// Override with Additional Behavior
class User {
    login() {
        console.log("Logging in user...");
    }
}

class Admin extends User {
    login() {
        console.log("Logging in admin...");
        this.logAdminActivity();
    }

    logAdminActivity() {
        console.log("Admin activity logged.");
    }
}

const admin = new Admin();
admin.login();

// 5. Overriding with Constructor Use
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

class Employee extends Person {
    constructor(name, job) {
        super(name);
        this.job = job;
    }

    greet() {
        console.log(`Hello, I'm ${this.name} and I work as a ${this.job}`);
    }
}

const emp = new Employee("Alice", "Backend Developer");
emp.greet();

// Polymorphism:- Same interface, different behavior.
// Overriding:- Redefining a parent class method in the child class.
// Use Case:- Useful in dynamic and flexible code like handling multiple object types through the same function.