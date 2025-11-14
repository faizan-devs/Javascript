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
        console.log(x);  // inner can access x
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

function multiplyBy(n){
    return function(x){
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