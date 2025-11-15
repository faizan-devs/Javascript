//? 1. Function Declaration
function typesOfFunction() {
    console.log("typesOfFunction");
}
// ✔ Features
// Hoisted fully (you can call it before its definition).
// Creates its own this, arguments, super, and new.target.
// Good for normal functions used throughout the code.

// ✔ Example
hello(); // works
function hello() { console.log("hello"); }

//? 2. Function Expression
let typesOfFunction = function () {
    console.log("typesOfFunction");
}
// ✔ Features
// Not hoisted (cannot call before definition).
// Function is stored inside a variable.
// Useful when you need dynamic assignment, pass as callback, etc.

// ✔ Example
hello(); // ❌ error
let hello = function () { console.log("hello"); }

//? 3. Arrow Function
let typesOfFunction = () => {
    console.log("typesOfFunction");
}
// ✔ Features
// Shorter syntax.
// Does NOT have its own this, arguments, new.target, or prototype.
// Cannot be used as a constructor (new func() ❌).
// Great for callbacks and functional programming.

// Example
let add = (a, b) => a + b;

//? 4. IIFE — Immediately Invoked Function Expression
(() => {
    console.log("typesOfFunction")
})();
// ✔ Features
// Runs immediately.
// Used to create a private scope.
// Can be function expression or arrow function.

// Example
(function () { console.log("run immediately") })();

//? 5. Named Function Expression
let greet = function hello() {
    console.log("hello");
}
// ✔ Features
// Has an internal name (hello) for debugging & recursion.
// The outer variable name is what you actually call.

//? 6. Anonymous Function (mostly used in callbacks)
setTimeout(function () {
    console.log("timer");
}, 1000);
// ✔ Features
// No name.
// Used in callbacks, event listeners, etc.

//? 7. Constructor Function
function Person(name) {
    this.name = name;
}

let p = new Person("Faizan");
// ✔ Features
// Called with new.
// Creates objects and uses prototypes.

//? 8. Generator Function
function* gen() {
    yield 1;
    yield 2;
}
// ✔ Features
// Uses function*.
// Returns an iterator with next().

//? 9. Async Function
async function fetchData() {
    return "data";
}
// ✔ Features
// Always returns a promise.
// Can use await.

//? 10. Async Arrow Function
let getData = async () => {
    return "data";
}

//? 11. Method Definition (inside object)
const obj = {
    speak() {
        console.log("speaking");
    }
}
// ✔ Features
// ES6 shorthand.
// Uses internal slots for method behavior.

//? 12. Class Method
class User {
    sayHi() {
        console.log("hi");
    }
}

//? 13. Getter and Setter Functions
const obj1 = {
    get value() { return 10; },
    set value(v) { console.log(v); }
};

//? 14. Callback Function
// (Technically not a syntax type, but important)
[1, 2, 3].map(function (num) { return num * 2; });