// Synchronous
// synchronous means the code runs in a particular sequence of instructions given in the program. Each instructions waits for the previous instruction to complete its execution.

// console.log("one");
// console.log("two");
// console.log("three");

// Asynchronous
// Due to synchronous programming, sometimes imp instruction get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("hello")
// }, 2000);
// console.log("three");

// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.

// In simpler terms:
// It’s a way to say, “Hey, when you're done doing this, run this function.”
// It's often used to handle asynchronous operations like API calls, file reading, or timers.

function greet(name){
    console.log(`Hello, ${name}`);
}

function processUserInput(callback){
    const name = "Faizan";
    callback(name); // Calling the passed-in function
}

console.log(processUserInput(greet));  // Output: Hello, Alice

// Using setTimeout (Asynchronous Callback)

function sayHi(){
    console.log("Hi there!");
}

setTimeout(sayHi, 2000); /// sayHi is called after 2 seconds

// Math Operation with Callback

function calculate(a, b, operation){
    return operation(a, b);
}

function add(x, y){
    return x + y;
}

function multiply(x, y){
    return x * y;
}

console.log(calculate(4, 4, add));
console.log(calculate(4, 4, multiply));

// Callback Inside Array Method (forEach)

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
    console.log(num * 2); // 2, 4, 6, 8, 10
});

// Custom Function with Callback

function fetchData(callback){
    console.log("fetching date...");
    setTimeout(() => {
        const data = { name: "Faizan", age: 21};
        callback(data);
    }, 1500);
}

function displayData(user){
    console.log("User:", user)
}

console.log(fetchData(displayData));

// Chaining Multiple Callbacks

function step1(next){
    console.log("Step1");
    next();
}
function step2(next){
    console.log("Step2");
    next();
}
function step3(next){
    console.log("Step3");
    next();
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("done") // correct
        });
    });
});

//! step1(step2(step3())); // wrong
//! step3() is called immediately (not when step2 wants).
//! The result of step3() is passed to step2(...) immediately.
//! Then step2(...) is called, and its result is passed to step1(...) — but step1 expects a function, not the result of another function.

//* Rule of Thumb:
//* Use arrow functions (or any function) when a function expects a callback.
//* This gives you control over when and how the next step is executed.

//? Simulate getting a user’s data from a server after 2 seconds.

//  1. Using Callback

function getUser(callback){
    setTimeout(() => {
        const user = { name: "Sania", age: 21};
        callback(user);
    }, 2000);
}

getUser((user) => {
    console.log("Data:", user)
});

// 2. Using Promise

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { name: "Zara", age: 18 }
        }, 2000)
    });
}

getUser().then(user => {
    console.log("Promise:", user)
});

// 3. Using async/await

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { name: "Zara", age: 18 };
            resolve(user)
        }, 2000)
    });
}

async function showUser() {
    const user = await getUser();
    console.log("Async/Await:", user)
}

showUser();