// A callback function is a function you pass as an argument to another function so it can be executed later.
// Callback Function = A function passed to run later.
// Callback Hell = Too many nested callback functions.

function Test(fn) {
    return fn("Manas");
}

function greet(name) {
    console.log(`Hello, ${name}`);
}

Test(greet);

function greeting(name, fn) {
    console.log("Hello, " + name);
    fn();
}

function sayGoodbye() {
    console.log("GoodBye");
}

greeting("Alice", sayGoodbye);

function getUser(callback) {
    setTimeout(() => {
        console.log("User fetched");
        callback({ id: 1, name: "John" });
    }, 1000);
}

function getOrders(userId, callback) {
    setTimeout(() => {
        console.log("Orders fecthed for user", userId);
        callback(["order1", "order2"]);
    }, 1000);
}

function getOrderDetails(orderId, callback) {
    setTimeout(() => {
        console.log("Order details fetched for", orderId);
        callback({ orderId, item: ["Laptop", "Mouse", "Keyboard"] });
    }, 1000);
}

function sendEmail(orderDetails, callback) {
    setTimeout(() => {
        console.log("Email sent for", orderDetails.orderId, "Item:", orderDetails.item);
        // console.log()
        callback("Email Sent!");
    }, 1000);
}

getUser((obj) => {
    getOrders(obj.id, (orderArr) => {
        getOrderDetails(orderArr[0], (orderDetailsObj) => {
            sendEmail(orderDetailsObj, (confirmationMsg) => {
                console.log(confirmationMsg)
            })
        })
    })
})