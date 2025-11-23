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

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance()); // 500

// console.log(account.#balance); // ❌ Error: Private field
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

//? Private fields are class properties or methods preceded by # that are only accessible inside the class. They provide encapsulation and protect internal data.