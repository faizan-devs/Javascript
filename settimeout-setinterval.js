// 1. What is setTimeout()?
// Runs a function once after a delay.

// It’s like saying:
// “Do this after X milliseconds, only one time.”

// Example:
setTimeout(() => {
    console.log("Runs after 2 seconds");
}, 2000);
// ✔ Runs one time
// ✔ After 2 seconds
// ✔ Used for delayed actions

// Real use cases:
// Showing a popup after 5 sec
// Delaying API call
// Simulating async database calls
// Debouncing

// 2. What is setInterval()?
// Runs a function repeatedly after every fixed interval.

// It’s like saying:
// “Do this every 1 second, again and again, until I stop it.”

// Example:
setInterval(() => {
    console.log("Runs every 1 second");
}, 1000);
// ✔ Runs in a loop
// ✔ Every 1 second
// ✔ Used for repeating tasks

// Real use cases:
// Timers & clocks
// Live updates (stocks, scores)
// Repeated polling
// Animation loops

// Stop setInterval
let id = setInterval(() => {
    console.log("Hello");
}, 1000);

clearInterval(id);

// Stop setTimeout
let id2 = setTimeout(() => {
    console.log("Hello");
}, 2000);

clearTimeout(id);

//? Simple Memory Trick
// setTimeout → run after delay (only once)
// setInterval → run repeatedly after delay

// 1. Call Stack
// Where JS executes code line by line.

// Example:
console.log("Hello");
// "Hello" goes to the call stack → gets executed → removed.

// 2. Web APIs
// Browser (or Node.js) provides async features like:
// setTimeout
// setInterval
// fetch
// DOM events
// JavaScript does not handle the timer itself — the browser does.

// Example:
setTimeout(() => console.log("Hi"), 2000);
// Steps:
// JS sees setTimeout
// Sends the timer to Web APIs
// Browser counts 2 seconds — JS is free to do other tasks