// async/await in JavaScript is a modern syntax used to handle asynchronous operations more cleanly than traditional .then() chains or callbacks.

// async makes a function return a promise.
// await pauses the execution of an async function until the promise is resolved or rejected.

// async/await is a modern way to handle asynchronous operations in JavaScript using a synchronous-style syntax.

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data:- ${dataId}`);
            resolve("success")
        }, 2000)
    });
}

// (async () => {
//     console.log("fectching data1...");
//     await getData(1);
//     console.log("fectching data2...");
//     await getData(2);
//     console.log("fectching data3...");
//     await getData(3);
// })();

//? Declaring a function with async automatically makes it return a Promise.

async function myFunc() {
    return "Hello";
}
// myFunc().then(console.log);

// Use await inside an async function to pause execution until a Promise is resolved.

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    console.log("Start");
    await wait(2000); // wait 2 seconds
    console.log("End");
}

// run();

//* Always wrap await code in try...catch to handle possible rejections.

//! Sequential vs Parallel:-
//* Sequential (waits one-by-one):
// await doTask1();
// await doTask2();

//* arallel (runs both at once):
// await Promise.all([doTask1(), doTask2()]);

// fetch api IIFE
(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log(data.name); // Logs user's name
    } catch (error) {
        console.log("Fetch error:", error)
    }
})();;

// Challenge: Simulated Task Runner
//* Requirements:
//* Create a function that:
//* Simulates fetching user data (2 seconds)
//* Simulates fetching user posts (1 second)
//* Logs both results in order

function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: "Sania" })
        }, 2000);
    });
}

function fetchPost(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(["Post1", "Post2"])
        }, 1000)
    })
}

async function runTasks() {
    try {
        const user = await fetchUser();
        console.log("User:", user);

        const posts = await fetchPost();
        console.log("Posts", posts)
    } catch (error) {
        console.error("Something went wrong", error)
    }
}

runTasks();