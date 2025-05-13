// Lexical

//* What is Lexical Scoping?
//? Lexical scoping means that the scope of a variable is determined by its position in the source code (i.e., where it’s written). The JavaScript engine determines variable access based on where functions and blocks are physically written, not where they're called from.

function outer() {
    let outerVar = "I am form outer";

    function inner() {
        console.log(outerVar); // can access outerVar due to lexical scope
    }

    inner();
}
// outer();

//* Explanation:
// inner() is defined inside outer().
// So it has access to everything in outer() due to lexical scope.
// Even if you call inner() elsewhere, it still remembers the scope where it was defined, not where it was called.

//* Why is it called "Lexical"?
//? The word lexical refers to the text or structure of your code.
//? The JS engine looks at the static structure of the code (not at runtime) to determine scope.

// Real-life Use: Closures

function parent() {
    let count = 0;

    return function child() {
        count++;
        console.log(count);
    };
}

const counter = parent();
// counter();
// counter();
// Here, inner() still remembers count from outer() even after outer() has finished running, because of lexical scoping.

// Closures in JavaScript (Explained Simply)
// A closure in JavaScript is a function that remembers the variables from its outer scope even after that outer function has finished executing.

//* Why Are Closures Important?
//? They allow:
//? Data privacy (variables hidden from global scope).
//? Functions to maintain state between executions.
//? Powerful programming techniques like currying, partial application, and function factories.

function father() {
    let counter = 0;

    function son() {
        counter++;
        console.log(counter);
    }

    return son;
}

const fn = father();
// fn();
// fn();
// fn();
// Even though outer() is finished, inner() still remembers counter.

//* Real-Life Analogy
//? Imagine a backpack (outer function) containing a notebook (variable). You give someone the notebook and close the bag. Even though the bag is closed, they can still write in the notebook (access the variable) because they had a reference to it.

// Common Use cases:-

// 1. Data Privacy:-
function secretHolder() {
    let secret = "I love JS";

    return {
        getSecret: function () {
            return secret;
        },
        setSecret: function (newSecret) {
            secret = newSecret;
        }
    };
}

const mySecret = secretHolder();
// console.log(mySecret.getSecret()); // I love JS
mySecret.setSecret("Closures are powerful!");
// console.log(mySecret.getSecret()); // Closures are powerful!

// 2. Function Factories
function multiplyBy(x) {
    return function (y) {
        return x * y;
    };
}

const double = multiplyBy(2);
// console.log(double(20));

//* Key Concept:-
//? Closure happen automatically whenever:
// A function is declared inside another function
// The inner function uses variables from the outer function

// Visual Summary
function outer() {
    let a = 10;

    return function inner() {
        console.log(a); // remember's `a`
    };
}

const myVar = outer();
// console.log(myVar());

//* Key Interview Questions on Closures

//* 1. What is a closure in JavaScript?
//? A closure is a function that retains access to its outer scope's variables even after the outer function has returned.

//* 2. How do closures help with data privacy?
//? They keep variables hidden from the outside world. Only the inner function can access them.
function makeCounter() {
    let count = 0;

    return function () {
        return ++count;
    };
}

const counters = makeCounter();
// console.log(counters());
// console.log(counters());
// No one can directly modify count

//* 3. What happens to the variables in the outer function after it returns?
//? They’re not garbage collected if they’re used in the inner function — the closure holds onto them.

//* 4. What are common use cases of closures?
//? Creating private variables
//? Building factory functions
//? Implementing once-only functions
//? Controlling async behavior (e.g., timers, event handlers)

//* 5. Can you write a function that runs only once using closure?
function runOnce(fn) {
    let called = false;

    return function () {
        if (!called) {
            called = true;
            fn();
        }
    };
}

const hello = runOnce(() => console.log("Hello"));
// hello(); // Hello
// hello(); // Nothing

function runNTimes(fn, n){
    let count = 0;

    return function() {
        if(count < n){
            count++;
            console.log("Call:-", count)
            fn();
        }
    };
}

const counts = runNTimes(() => console.log("I Love Zara"), 3);
// counts();
// counts();
// counts();
// counts(); // does nothing (limit reached)

//* Here’s how you could modify it to return how many calls are left:
function runNTimes(fn, n){
    let count = 0;

    return function () {
        if(count < n){
            count++;
            fn();
            console.log(`${n - count} calls left.`);
        }else {
            console.log("No more calls allowed.");
        }
    };
}

const attempt = runNTimes(() => console.log("Function call"), 5);
attempt();
attempt();
attempt();
attempt();
attempt();
attempt();

//* Real world use case
//* You might use this pattern to:-
//? Prevent double form submission
//? Run an animation or setup only once
//? Initialize something (e.g., a singleton)

//* Q: Write a createAdder(x) function that returns a function to add x to any number.

function createAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = createAdder(5);
// console.log(add5(20));

//?  Closure at Work:
// When createAdder(5) is called:
//* A new function is returned with access to x = 5
//* x stays in memory because it's captured by closure

// When add5(20) runs, it uses that captured x = 5 with y = 20

function greet(name){
    return function() {
        console.log("You just logged in", name)
    };
}

const loginZara = greet("Zara");
// loginZara();
const loginSania = greet("Sania");
// loginSania();