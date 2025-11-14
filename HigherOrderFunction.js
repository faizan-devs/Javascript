//? A higher-order function is a function that takes another function as an argument, returns a function, or does both.

// Passing a function as an argument:
function greet(name){
    return `Hello ${name}`;
}

function callFunction(fn, value){
    return fn(value);
}

console.log(callFunction(greet, "Faizan"));

// Returning a function
function power(n){
    return function(x){
        return x ** n;
    };
}

const square = power(2);
console.log(square(5)); //25

// Best Real Examples (You use these daily)
// map, filter, reduce
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(n => n * 2);
const even = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((total, n) => total + n, 0);

console.log(doubled)
console.log(even)
console.log(sum)
// These are higher-order functions because they take callbacks.

// Higher-Order Functions + Closures
function createCounter(){
    let count = 0;

    return function(){
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

function createCounters(){
    let count = 1;

    function increment(){
        console.log(count++)
    }
    return increment;
}

const counters = createCounters();
counters();
counters();
counters();
// createCounter is a higher-order function returning another function that closes over count.

// Common Interview Question

//* Q: Why are callbacks and promises examples of higher-order functions?
//? Because they both accept functions as input (callback, then, catch).

//* Q: Are all callbacks higher-order functions?
//? No.
//? A callback is just a function passed as input.
//? A higher-order function is the function receiving or returning other functions.

// Example:
// setTimeout → Higher-order function
// () => console.log("done") → Callback