//* Encapsulation in JavaScript
//? Encapsulation is an object-oriented programming concept where data (properties) and methods (functions) are bundled together, and direct access to some parts of the object is restricted to prevent unintended interference.

// 1. Encapsulation Using Closures (Pre-ES6 Style)
function Person(name, age) {
    let _age = age; // Private variable using closure

    this.name = name;

    this.getAge = function () {
        return _age;
    };

    this.setAge = function (newAge) {
        if (newAge > 0) {
            _age = newAge;
        }
    };
}

const person = new Person("Alice", 25);
// console.log(person.name);
// console.log(person.getAge());
// console.log(person.setAge(32));
// console.log(person.getAge());

// 2. Encapsulation Using ES6 Classes with Public & Private Members
class Car {
    #mileage = 0; // Private fields with #

    constructor(brand) {
        this.brand = brand;
    }

    drive(km) {
        if (km > 0) this.#mileage += km;
    }

    getMileage() {
        return this.#mileage;
    }
}

const myCar = new Car("Toyota");
myCar.drive(100);
console.log(myCar.getMileage());
// console.log(myCar.#mileage) // Error: Private field

//  3. Encapsulation Using Symbols (Less Common)
const _salary = Symbol('symbol');

class Employee {
    constructor(name, salary) {
        this.name = name;
        this[_salary] = salary;
    }

    getSalary() {
        return this[_salary];
    }
}

const emp = new Employee("John", 50000);
console.log(emp.getSalary());
console.log(emp._salary); // undefined

// Why Encapsulation?
//? Prevents direct access to sensitive data.
//? Ensures internal logic is hidden from external access.
//? Encourages a clean API/interface.
//? Makes your code more secure and maintainable.

//* Summary
//? Method          || Privacy Level   || Notes

// Closures        || Private(Soft)   || Works in functions, not classes
// #private fields || Private(strict) || Modern and secure(ES2022+)
// Symbols         || Obfuscated      || Not truly private, just hidden

// Encapsulation with Private Fields in JavaScript is a technique to restrict direct access to some of an object's components, which helps prevent unwanted interference and misuse of internal object data.

//* What Are Private Fields?
//? Private fields are properties of a class that cannot be accessed or modified directly from outside the class. In modern JavaScript (ES2022+), private fields are defined using the # prefix.

//* Benefits of Encapsulation
//? Keeps internal implementation details hidden.
//? Prevents accidental modification of data.
//? Makes code easier to maintain and debug.
//? Helps enforce business rules and constraints.

// Example: Using Private Fields
class BankAccount {
    // Private field
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // Public method to deposit
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposit Amount: ${amount}. New Balance: ${this.#balance}`)
        } else {
            console.log(`Deposit amount must be positive`);
        }
    }

    // Public method to withdraw
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdraw Amount: ${amount}. New Balance: ${this.#balance}`)
        } else {
            console.log("Insufficient balance")
        }
    }

    // Public method to get balance
    getBalance() {
        return `Available balance: ${this.#balance}`;
    }
}

const account = new BankAccount(2000);
account.deposit(2200);
account.withdraw(1000);
account.withdraw(800);
console.log(account.getBalance());

//* Key Rules for Private Fields
//? Must start with #.
//? Can only be accessed within the class.
//? Cannot be accessed or modified using this['#balance'] or similar.
//? Not accessible via object destructuring.

//* When to Use private fields :-
//? when You need to hide internal data.
//? when You want to control access via methods.
//? when You aim for cleaner APIs and better abstraction.