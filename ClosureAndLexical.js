// 1. Lexical Scope

// Meaning:
// The scope of a variable is determined by where it is written in the code, not by where it is executed.

// JavaScript uses lexical (static) scoping, which means:
//? - A function can access variables from its own scope
//? - plus the outer (parent) scopes
//? - all the way up to the global scope.

// Example
function outer() {
    let x = 10;

    function inner() {
        console.log(x); // inner can access x
    }

    inner();
}
outer();
// inner() can use x because of lexical scope:
// the function’s location in the code decides what variables it can access.

// 2. Closure

// A closure happens when a function remembers and keeps access to its outer variables even after the outer function has finished running.

// Key idea:
// - A closure is function + the lexical environment it was created in.

// Classic example:
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Why this works:
//? - createCounter() has finished.
//? - But the returned function still remembers the count variable.
//? - That memory is the closure.

// How they connect
// 1.Lexical scope decides which outer variables a function can access.
// 2.Closure allows a function to remember those variables even after the outer function is gone.

// So:
// Lexical scope → rule
// Closure → behavior created by that rule

function multiplyBy(n) {
    return function (x) {
        return x * n;
    };
}

const double = multiplyBy(2);
console.log(double(5));
// double keeps access to n = 2 because of closure.

// Q: Does every function create a closure?
// Yes — every function forms a closure, but closures matter only when you use outer variables after the outer function is gone.

// Q: Is closure a copy of the variable?
// No — it’s a reference, so updates are remembered.

// Real-world use case
// Encapsulation / Data Privacy
function createUser(name) {
    let loginCount = 0;

    return {
        // method inside returned object
        login() {
            loginCount++; // ← closure (still accessible)
            console.log(`${name} logged in ${loginCount} times`);
        },
    };
}
const user = createUser("Faizan");
user.login();
user.login();
user.login();

/*
1. Classic (long) syntax — no shorthand

This shows the fully expanded form.

function createUser(name) {
let loginCount = 0;

return {
    login: function () {
    loginCount++;
    console.log(name + " logged in " + loginCount + " times");
    }
};
}

const user = createUser("Faizan");
user.login();


✔ Shows how objects were written before ES6.
✔ Makes clear that login is a key whose value is a function.
*/

/*
3. Arrow function inside object

⚠ Important: Arrow functions do not bind their own this, but here we are not using this, so it’s fine.

function createUser(name) {
let loginCount = 0;

    return {
    login: () => {
        loginCount++;
        console.log(`${name} logged in ${loginCount} times`);
    }
};
}

✔ Works
⚠ Not recommended if you need this inside methods.
*/

/*
4. Constructor Function + Prototype (old OOP style)

This version does not use closures.
loginCount becomes a property on the object.

function User(name) {
this.name = name;
this.loginCount = 0;
}

User.prototype.login = function () {
this.loginCount++;
console.log(`${this.name} logged in ${this.loginCount} times`);
};

const user = new User("Faizan");
user.login();

✔ Memory-efficient: method stored in prototype
✔ No closure
❌ loginCount is not private anymore
*/

/*
5. ES6 Class Version (modern OOP)

This is just syntactic sugar over prototypes.

class User {
constructor(name) {
    this.name = name;
    this.loginCount = 0;
}

login() {
    this.loginCount++;
    console.log(`${this.name} logged in ${this.loginCount} times`);
}
}

const user = new User("Faizan");
user.login();

✔ Cleanest OOP syntax
✔ Still no closure
❌ loginCount is public
*/

/*
6. Factory function WITHOUT closure (simple version)

Everything is stored on the returned object, no private variables.

function createUser(name) {
return {
    name: name,
    loginCount: 0,

    login() {
    this.loginCount++;
    console.log(`${this.name} logged in ${this.loginCount} times`);
    }
};
}

const user = createUser("Faizan");
user.login();

✔ Simple to read
❌ No privacy
❌ Every object gets its own function (less memory-efficient)
*/

/*
7. Factory function WITH closure (your version — best for private data)
function createUser(name) {
let loginCount = 0;

return {
    login() {
    loginCount++;
    console.log(`${name} logged in ${loginCount} times`);
    }
};
}

✔ loginCount is private
✔ Perfect example of closures
✔ Clean syntax
✔ Ideal for encapsulation
*/
