// Real life example where both approaches (manual closure vs class) are used in a mini project of Bank Account.

//* Awesome! Let's create a simple real-world example of a Bank Account using:
//? Manual Closures (pre-class style)
//? Modern JavaScript Class with #private fields

// 1. Bank Account using Manual Closure
function createBankAccount(owner, balance = 0) {
    let _balance = balance;

    return {
        getOwner: () => owner,
        getBalance: () => _balance,
        deposit: (amount) => {
            if (amount > 0) _balance += amount;
        },
        withdraw: (amount) => {
            if (amount > 0 && amount <= _balance) _balance -= amount;
        }
    };
}

// usage
const acc1 = createBankAccount("Faizan", 10000);
acc1.deposit(2000);
acc1.withdraw(8000);
acc1.withdraw(1000);
acc1.deposit(3300);
acc1.withdraw(200);
acc1.deposit(30000);
acc1.deposit(1000);
acc1.withdraw(5500);
acc1.withdraw(45);
acc1.withdraw(3000);
acc1.withdraw(1500);
acc1.withdraw(2300);
// console.log(acc1.getBalance());
// console.log(`${acc1.getOwner()} Your current account balance is ${acc1.getBalance()}`);

//* Key Point:
//* let _balance is private due to the closure.
//* No one can modify it directly from outside.

// 2. Bank Account using Modern Class with #private Field
class BankAccount {
    #balance;

    constructor(owner, balance = 0) {
        this.owner = owner;
        this.#balance = balance;
    }

    getOwnerName() {
        return this.owner;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) this.#balance -= amount;
    }
}

// usage
const acc2 = new BankAccount("Sania", 2000);
acc2.deposit(10000);
acc2.withdraw(3300);
// console.log(acc2.getBalance());
// console.log(acc2.#balance);
// console.log(acc2.getOwnerName())
console.log(`${acc2.getOwnerName()} your current available balance is ${acc2.getBalance()}`);

//* Key Point:
//* #balance is a true private field supported natively by JavaScript (ES2022+).
//* Safer, cleaner, and easier to understand in larger apps.