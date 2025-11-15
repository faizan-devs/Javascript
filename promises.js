//? Promises, Promises Chaining, async/await, try/catch 

// A Promise is a special JS object that represents a task that will finish in the future
// —not immediately.

// It’s basically JavaScript saying:
// “I promise I’ll give you the result later.

// A Promise is a cleaner, modern way to handle asynchronous operations without callback hell.

// Promise Example
let p = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if (success) resolve("Task completed");
        else reject("Something failed");
    }, 1000);
});

// How to use that promise?
// ✔ Using .then() and .catch()
p.then((msg) => {
    console.log("Success:", msg);
}).catch((err) => {
    console.log("Error:", err);
});

// BEST PART: Promises enable async/await
// This is the most beautiful part.
// Async/await works only because of promises.
async function run() {
    const user = await getUser();
    const orders = await getOrders(user.id);
    console.log(orders);
}
// This looks synchronous but runs asynchronously.

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: 1, name: "John" });
        }, 1000);
    });
}

function getOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Orders fecthed for user", userId);
            resolve(["order1", "order2"]);
        }, 1000);
    });
}

function getOrderDetails(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order details fetched for", orderId);
            resolve({ orderId, item: ["Laptop", "Mouse", "Keyboard"] });
        }, 1000);
    });
}

function sendEmail(orderDetails) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Email sent for", orderDetails.orderId, "Item:", orderDetails.item);
            resolve("Email Sent!");
        }, 1000);
    });
}

// getUser()
// .then((user) => getOrders(user.id))
// .then((orders) => getOrderDetails(orders[0]))
// .then((orderDetails) => sendEmail(orderDetails))
// .then((confirmation) => console.log(confirmation))
// .catch((error) => console.error("Error:", error))

async function processOrder() {
    try {
        const user = await getUser();
        const orders = await getOrders(user.id);
        const orderDetails = await getOrderDetails(orders[0]);
        const confirmation = await sendEmail(orderDetails);
        console.log(confirmation);
    } catch (error) {
        console.error("Error:", error)
    }
}

processOrder();