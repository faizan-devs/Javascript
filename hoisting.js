/*
Hoisting in JavaScript

Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during the compile phase.
Because of this, you can technically use variables and functions before they appear in the code — but the details depend on how they are declared.

Think of it as JavaScript scanning your file first, pulling declarations up, and then running your code.
*/

// 1. Function Declarations Are Fully Hoisted

// Function declarations are moved to the top with their full definition.
sayHello();

function sayHello() {
    console.log("Hello");
}

// 2. var Is Hoisted (Initialized to undefined)

// var declarations are hoisted, but only the declaration, not the assignment.
// So before the assignment runs, the value is undefined.
console.log(a); // undefined (not error)
var a = 10;
console.log(a); // 10
// Internally:
var a;       // hoisted → undefined
console.log(a);
a = 10;

// 3. let and const Are Hoisted but Not Initialized

// They are moved to the top, but not initialized, which creates a Temporal Dead Zone (TDZ) — the period from start of scope until initialization.

// Accessing them before the line of declaration gives an error.
console.log(x); // ❌ ReferenceError (TDZ)
let x = 5;

console.log(y); // ❌ ReferenceError (TDZ)
const y = 20;

// 4. Function Expressions (var) Are Not Hoisted the Same Way

// When functions are assigned to variables using var, the variable is hoisted but starts as undefined.
greet(); // ❌ TypeError: greet is not a function

var greet = function () {
    console.log("Hi!");
};

// 5. Arrow Functions Behave Like Function Expressions
add(); // ❌ TypeError

const add = () => console.log("Added");
// Because const is in TDZ and not initialized yet.

// ❌ Wrong
const obj = new Person(); // ReferenceError: Cannot access 'Person' before initialization
class Person {}
// ✔ Correct
class Person {}
const obj2 = new Person(); // Works
// Key point:
// Class declarations are NEVER available before their definition. JavaScript does this intentionally to prevent confusing patterns that were possible with var + function expressions.
