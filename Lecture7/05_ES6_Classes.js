// ES6 (ECMAScript 2015) introduced the class syntax to JavaScript to provide a cleaner and more familiar way for developers from other OOP languages (like Java, C++, or Python) to create objects and deal with inheritance.

//* 1. What is a Class?
//? A class is a blueprint for creating objects. It can contain properties (data) and methods (functions) related to that object.

// 2. Creating a Class
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

// constructor() is a special method called automatically when a new object is created.
// this refers to the current instance of the class.

// 3. Creating an Object from a Class
const person1 = new Person("Sania", 21);
person1.greet();

//*  4. Inheritance (Extending a Class)
//? You can create a child class that inherits from a parent class using extends.

class Student extends Person{
    constructor(name, age, grade){
        super(name, age); // Call the parent constructor
        this.grade = grade;
    }

    study(){
        console.log(`${this.name} is studying in grade ${this.grade}`);
    }
}

const student1 = new Student("Bob", 18, 12);
student1.greet();
student1.study();
// super() is used to call the constructor of the parent class.

//  5. Class Features

//* Feature || Description
// constructor()    || Sets up initial values when the object is created.
// extends          || Enables inheritance from another class.
// super()          || Calls the parent class's constructor or methods.
// Instance Methods	|| Functions defined inside the class.
// Static Methods	|| Functions defined with static (not tied to object).

class MathHelper{
    static square(x){
        return x * x;
    }
}
// console.log(MathHelper.square(5));

//* Benefits of Using ES6 Classes
// Cleaner and more readable syntax.
// Easier to work with inheritance.
// Better organization of code.
// Familiar structure for developers from other OOP languages.

class BankAccount{
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`Deposited ₹${amount}. New Balance: ₹${this.balance}`)
    }

    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdraw ₹${amount}. New Balance: ₹${this.balance}`);
        }else{
            console.log("Insufficient funds!")
        }
    }
}

const acc = new BankAccount("Sania", 2000);
acc.deposit(2300);
acc.withdraw(2000);