// Encapsulation with Private Fields in JavaScript is a technique to restrict direct access to some of an object's components, which helps prevent unwanted interference and misuse of internal object data.

//* What Are Private Fields?
//? Private fields are properties of a class that cannot be accessed or modified directly from outside the class. In modern JavaScript (ES2022+), private fields are defined using the # prefix.

//* Benefits of Encapsulation
//? Keeps internal implementation details hidden.
//? Prevents accidental modification of data.
//? Makes code easier to maintain and debug.
//? Helps enforce business rules and constraints.

// Example: Using Private Fields
class BankAccount{
    // Private field
    #balance;

    constructor(initialBalance){
        this.initialBalance = initialBalance;
    }

    // Public method to deposit
    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
        }else{
            console.log(`Deposit amount must be positive`);
        }
    }

    // Public method to withdraw
    withdraw(amount){
        if(amount > this.#balance){
            this.#balance -= amount;
        }else{
            console.log("Insufficient balance")
        }
    }

    // Public method to get balance
    getBalance(){
        return this.#balance;
    }
}

const account = new BankAccount(2000);
account.deposit(2200);
account.withdraw(1000);
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