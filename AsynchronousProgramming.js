//? 1. Callback version
function registerUser(callback) {
    console.log("✅ User registered");
    callback();
}

function sendEmail(callback) {
    console.log("📧 Welcome email sent");
    callback();
}

function loginUser(callback) {
    console.log("🔓 User logged in");
    callback();
}

// Run the chain
registerUser(() => {
    sendEmail(() => {
        loginUser(() => {
            console.log("🎉 All tasks completed!");
        });
    });
});
//? 2. Callback Hell version
registerUser(() => {
    console.log("Sending Email...");
    sendEmail(() => {
        console.log("Login User...");
        loginUser(() => {
            console.log("🎉 All tasks completed!");
        });
    });
});
// Problem: Still works, but the nesting makes it ugly and hard to maintain.

//? 3. Promise version
function registerUser() {
    return new Promise((resolve) => {
        console.log("✅ User registered");
        resolve();
    });
}

function sendEmail() {
    return new Promise((resolve) => {
        console.log("📧 Welcome email sent");
        resolve();
    });
}

function loginUser() {
    return new Promise((resolve) => {
        console.log("🔓 User logged in");
        resolve();
    });
}
//? 4. Promise chaining
registerUser()
    .then(sendEmail)
    .then(loginUser)
    .then(() => console.log("🎉 All tasks completed!"))
    .catch((err) => console.log("❌ Error:", err));

//? Promise.all version
function registerUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User registered");
            resolve("User registered");
        }, 1000);
    });
}

function sendEmail() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Welcome email sent");
            resolve("Welcome email sent");
        }, 1000);
    });
}

function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User logged in");
            resolve("User logged in");
        }, 1000);
    });
}

async function executeProcess() {
    try {
        const results = await Promise.all([
            registerUser(),
            sendEmail(),
            loginUser()
        ]);
        console.log("🎉 All tasks completed!");
        console.log("Results:", results);
    } catch (err) {
        console.log("❌ Error:", err);
    }
}

executeProcess();

//? How Promise.all() works
//* - It takes an array of Promises.
//* - Starts them all at once.
//* - Waits until all have resolved.
//* - Returns an array of their results (in the same order).

// If any Promise rejects, the whole Promise.all() immediately rejects — skipping the rest.

//? 5. Async/Await version (modern way)

function registerUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User registered");
            resolve();
        }, 1000);
    });
}

function sendEmail() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Welcome email sent");
            resolve();
        }, 1000);
    });
}

function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User logged in");
            resolve();
        }, 1000);
    });
}

async function executeProcess() {
    try {
        await registerUser();
        await sendEmail();
        await loginUser();
        console.log("🎉 All tasks completed!");
    } catch (err) {
        console.log("❌ Error:", err);
    }
}
executeProcess();

// ✅ Looks like synchronous code but uses Promise under the hood.
// ✅ Easiest to read, best for production-style logic.

//? ✅ What actually makes code asynchronous?

//* JavaScript becomes asynchronous when it deals with operations that take time — such as:
//* - Fetching data from an API (fetch())
//* - Reading/writing files (Node.js)
//* - Accessing databases
//* - Timers (setTimeout, setInterval)
//* - User events (clicks, etc.)

// All of these run outside the main thread and complete later, which is why Promises and async/await exist — to handle those results cleanly.

//? Example (Real Async — no setTimeout)
async function getUserData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data);
}

getUserData();
// fetch() already returns a Promise, so no setTimeout() is needed.
// await simply waits until that Promise resolves.