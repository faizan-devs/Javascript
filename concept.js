//? How to Delete Object Key in JS

// 1. Using the delete Operator (Mutates the original object):
// This is the most direct way to remove a property.
/*
const myObject = {
    name: "Alice",
    age: 30,
    city: "New York"
};

delete myObject.city; // Using dot notation
// or
delete myObject['age']; // Using bracket notation
console.log(myObject); // Output: { name: "Alice" }
*/
// 2. Using Object Destructuring with the Rest Operator (Creates a new object):
// This method creates a new object without the specified key, leaving the original object untouched.
/*
const myObject = {
    name: "Bob",
    age: 25,
    occupation: "Engineer"
};

const { occupation, ...newObject } = myObject;
const { occupation, age,  ...newObject } = myObject;

console.log(newObject); // Output: { name: "Bob", age: 25 }
console.log(myObject);  // Output: { name: "Bob", age: 25, occupation: "Engineer" } (original remains unchanged)
*/

//? 3. Using Reflect.deleteProperty() (Mutates the original object, provides success indication):
// This method is similar to the delete operator but returns a boolean indicating whether the deletion was successful.
/*
const myObject = {
    id: 1,
    product: "Laptop",
    price: 1200
};

const success = Reflect.deleteProperty(myObject, 'price');

console.log(myObject); // Output: { id: 1, product: "Laptop" }
console.log(success);  // Output: true
*/

//? Recursion in JS
//* Recursion in JavaScript is a programming technique where a function calls itself repeatedly until a specific condition is met. This technique is often used to solve problems that can be broken down into smaller, self-similar subproblems.
//! A recursive function in JavaScript typically consists of two main parts:
// Base Case: This is the stopping condition for the recursion. When the base case is met, the function stops calling itself and returns a value. Without a base case, the function would call itself indefinitely, leading to an infinite loop and eventually a "Maximum call stack size exceeded" error.

// Recursive Case: This is the part of the function where it calls itself, typically with a modified input that moves closer to the base case.
//? Example of a Recursive Function (Factorial Calculation):
/*
function factorial(n) {
    // Base case: if n is 0 or 1, the factorial is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial(n-1)
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
*/

//? In this example:
// 1.The factorial(n) function calculates the factorial of a given number n.
// 2.The base case is if (n === 0 || n === 1) { return 1; }. This prevents infinite recursion when n reaches 0 or 1.
// 3.The recursive case is return n * factorial(n - 1);. Here, the function calls itself with a smaller input (n - 1), gradually moving towards the base case.

//? When to Use Recursion:
//* Recursion can be an elegant solution for problems that naturally lend themselves to a "divide and conquer" approach, such as:
// 1.Tree and graph traversals: Navigating through data structures like binary trees or graphs.
// 2.Mathematical calculations: Factorials, Fibonacci sequences, etc.
// 3.Parsing and processing hierarchical data: XML, JSON, file system structures.

//? Considerations:
//* While powerful, recursion can sometimes be less efficient than iterative solutions (using loops) due to the overhead of function calls and call stack management. It's important to ensure a clear base case to prevent infinite recursion and potential performance issues.