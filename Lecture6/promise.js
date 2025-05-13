//* Promise
// Promise is for "eventual" completion of task. It is an object in JS.
// It is a solution to callback hell.

// let promise = new Promise((resolve, reject) => {...}) //* function with two handlers

//? resolve and reject are callbacks provided by JS

// In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//! Why Promises?
//* They provide a cleaner, more powerful alternative to callback functions for managing asynchronous code like API calls, file reads, or timers.

// Basic Syntax
let promise = new Promise(function (resolve, reject) {
    // aynchronous operation
});
// resolve(value) — call this when the async operation completes successfully

// resolve(value) — call this when the async operation completes successfully

// Promise States
// Pending — initial state, neither fulfilled nor rejected
// Fulfilled — resolve() is called
// Rejected — reject() is called

// A Simple Promise
let task = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed")
    }
});

// task
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error)
//     })

// Chaining Promises
// a powerful way to perform multiple async operations one after another, where the output of one .then() is passed to the next.
// Each .then() returns a new Promise, which allows you to chain operations sequentially.

// doSomething()
//     .then(result => doSomethingElse(result))
//     .then(finalResult => console.log(finalResult))
//     .catch(error => console.log(error));

// doTask1()
//     .then(result1 => doTask2(result1))
//     .then(result2 => doTask3(result2))
//     .then(finalResult => console.log("FInal result:", finalResult))
//     .catch(error => console.log("Error:", error));

// Real-World Example: Chaining 3 Tasks
// Let’s simulate three async tasks with delays using Promises.

function taskOne() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 1 complete");
            resolve("Data from Task 1");
        }, 1000);
    });
}

function taskTwo(dataFromTask1) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 2 complete, received:", dataFromTask1);
            resolve("Data from Task 2");
        }, 1000);
    });
}

function taskThree(dataFromTask2) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 3 complete, received:", dataFromTask2);
            resolve("All tasks complete!")
        }, 1000);
    });
}

// Chaining the tasks
// taskOne()
//     .then(result1 => taskTwo(result1))
//     .then(result2 => taskThree(result2))
//     .then(finalResult => console.log(finalResult))
//     .catch(error => console.error("Error in chain:", error));

// 1. Using fetch() (API Call Example)

//? Example: Fetching currency data
// fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         return response.json(); // returns another promise
//     })
//     .then(data => {
//         console.log("Exchange rate USD to INR:", data.inr)
//     })
//     .catch(error => {
//         console.error("Fetch error:", error);
//     });

// 2. Simulating File Handling with Promises

//? Since browser JS can't directly access files without input, here’s a simulation of reading a file:

function readFilesSimulated(filename) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (filename === "data.txt") {
                resolve("File content: Hello from the file!")
            } else {
                reject("File not found.")
            }
        }, 1000) // simulating delay
    });
}

// readFilesSimulated("data.txxt")
//     .then(content => {
//         console.log(content);
//     })
//     .catch(err => {
//         console.error("Error reading file:", err)
//     });

// Same file example with aync/await

async function getFileContent() {
    try {
        let content = await readFilesSimulated("data.txt");
        console.log(content)
    } catch (error) {
        console.error("Error:", error)
    }
}

// getFileContent();

// Let's build a real-world style mini project: a Fake Login Flow using Promise chaining. This simulates how modern web apps work when a user logs in and the app fetches their profile and posts afterward.

// Scenario:-
// We’ll simulate three async actions:

// Login – user submits credentials.

// Fetch Profile – returns user details.

// Fetch Posts – gets user’s posts.

// Each returns a Promise to mimic real API behavior.

// 1. simulate user login
function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "1234") {
                console.log("Logging in!");
                resolve({ userId: 1, username: "admin" })
            } else {
                reject("Invalid username or password")
            }
        }, 1000)
    });
}

// 2. fetch user profile
function fetchUserProfile(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User profile fetched");
            resolve({ name: "Admin User", age: 25, userId });
        }, 1000)
    });
}

// 3. fetch user posts
function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Posts fetched");
            resolve([
                { id: 1, content: "Hello world!" },
                { id: 2, content: "Learning Promise is fun!" }
            ]);
        }, 1000)
    });
}

// chain the actions
loginUser("admin", "1234")
    .then(user => fetchUserProfile(user.userId))
    .then(profile => {
        console.log("User Profile:", profile);
        return fetchUserPosts(profile.userId)
    })
    .then(posts => {
        console.log("User Posts:", posts);
    })
    .catch(error => {
        console.error("Error:", error)
    });