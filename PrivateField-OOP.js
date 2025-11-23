// Private fields in JavaScript are variables or methods inside a class that cannot be accessed or modified from outside the class.
// They are marked using the # symbol, and they help achieve encapsulation, one of the pillars of OOP.

//* Why private fields exist
//? Because sometimes you want to protect internal data so other parts of the code cannot directly change or misuse it.

// Example scenarios:
// Prevent people from editing passwords directly
// Hide API keys or tokens
// Prevent tampering with internal state (like balance in a bank account)

class BankAccount {
    #balance = 0; // private field

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account1 = new BankAccount();
account.deposit(500);
console.log(account1.getBalance()); // 500

console.log(account1.#balance); // ❌ Error: Private field
// What happened here?
// #balance is private → cannot be accessed outside
// You must use the public method getBalance().

// Real project example (Node.js backend)
// User password protection
class User {
    #password;

    constructor(password) {
        this.#password = this.hash(password);
    }

    hash(pass) {
        return `hashed-${pass}`;
    }

    checkPassword(input) {
        return this.#password === this.hash(input);
    }
}
// Why useful
// Prevent someone from doing: user.password = "1234"
// Forces password to always go through hashing

//? When to use private fields
// You want to hide sensitive values:- tokens, password, secret keys
// You want to protect internal state:- bank balance, internal counters
// You want controlled access:- using getter/setter methods

//? Private fields are class properties or methods preceded by # that are only accessible inside the class. They provide encapsulation and protect internal data.

// 1. Private Fields vs Closures
// Both can be used to make data private, but they work differently.

//? Private Fields (#)
//* Built into the class syntax
//* Only accessible inside the class
//* Enforced by JavaScript at runtime
//* Cannot be accessed even with reflection or bracket notation
class User {
    #password = "secret"; // private field

    getPassword() {
        return this.#password;
    }
}

const u = new User();
console.log(u.getPassword()); // "secret"
console.log(u.#password); // ❌ Error

// Closures
// - Achieves privacy by defining variables inside a function scope, not class syntax
// - Commonly used before private fields existed
// - Still used in factory functions
function BankAccount() {
    let balance = 0; // private via closure

    return {
        deposit(amount) {
            balance += amount;
        },
        getBalance() {
            return balance;
        }
    };
}

const account = BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
console.log(account.balance); // undefined ❌

// #private vs _private (Convention)
/*
#privateField: Privacy: enforeced : True private field
_privateField: Privacy: convention only: Indicates dev should not access it
*/

class Example {
    #secret = 123;   // truly private
    _token = "abc";  // just convention
}

const e = new Example();
console.log(e._token); // ok, accessible
console.log(e.#secret); // ❌ real private error

// 3. Real Express.js Service Example (Practical Use Case)
// Example: AuthService with Private Fields
class AuthService {
    #secretKey = "my-secret"; // private
    #hash(password) {
        return password + this.#secretKey;
    }

    createUser(userData) {
        const hashed = this.#hash(userData.password);
        // save hashed to DB
        return { ...userData, password: hashed };
    }

    checkPassword(input, stored) {
        return stored === this.#hash(input);
    }
}

export const authService = new AuthService();

// Controller using service with abstraction
import { authService } from "../services/auth.service.js";

export const register = async (req, res) => {
    const user = authService.createUser(req.body); // no idea about hashing logic
    res.json({ success: true, user });
};

/*
1. Encapsulation: password hashing logic + secret key hidden by #
2. Abstraction: controller calls createUser() without knowing implementation
3. Inheritance: could extend base service later
4. Polymorphism: could create different auth strategies (JWT, OAuth, Session)
*/