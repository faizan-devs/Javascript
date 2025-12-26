//* Lexical scope: defines where variables are accessible based on code structure.
//* Closures: leverage lexical scope to enable functions to remember and access variables from their parent scope, even after the parent function has completed execution. Closures are a powerful feature for data encapsulation and creating private state in JavaScript.

//* JS Callback
/*
In JavaScript, a callback function is a function that is passed as an argument to another function, with the intention of being executed at a later time. The function that receives the callback as an argument is often referred to as a higher-order function. 
Key Characteristics:
Passed as an argument: The callback function is literally passed into another function's parameter list.
Executed later: The higher-order function determines when and how to invoke the callback. This can be immediately (synchronous) or after some asynchronous operation has completed (asynchronous).
Enables asynchronous programming: Callbacks are fundamental for handling operations that don't complete immediately, such as fetching data from a server, reading files, or responding to user input (like button clicks).
function greet(name, callback) {
  const message = `Hello, ${name}!`;
  callback(message); // The callback is executed immediately
}

function displayGreeting(greeting) {
  console.log(greeting);
}

greet("Alice", displayGreeting); // Output: Hello, Alice!
In this example, displayGreeting is the callback function, passed to greet. greet then calls displayGreeting immediately with the message.

Example of an Asynchronous Callback:
function fetchData(url, callback) {
  Simulate an asynchronous operation like fetching data from an API
  setTimeout(() => {
    const data = `Data from ${url}`;
    callback(data); // The callback is executed after a delay
  }, 2000); // 2-second delay
}

function processData(receivedData) {
  console.log(`Processing: ${receivedData}`);
}

fetchData("https://example.com/api/data", processData);
console.log("Request sent..."); // This will log before the data is processed
Here, processData is the callback. It will be executed only after the setTimeout function completes its delay, demonstrating an asynchronous pattern.

Why use Callbacks?
Asynchronous operations: Essential for non-blocking operations, preventing the main thread from freezing while waiting for long-running tasks.
Event handling: Used extensively in event listeners (e.g., addEventListener) to define what happens when an event occurs.
Customizable behavior: Allows higher-order functions to perform a generic task, while the specific action to be taken is defined by the callback provided by the user.
*/

/*
function processData(data, callback) {
  // Simulate some asynchronous operation, like fetching data
  setTimeout(() => {
    const processedResult = data.toUpperCase(); // Example processing
    callback(processedResult); // Call the callback with the result
  }, 1000);
}

function displayResult(result) {
  console.log("The processed data is:", result);
}

processData("hello world", displayResult);
// Output after 1 second: "The processed data is: HELLO WORLD"
In this example:
processData is the higher-order function that takes data and a callback function.
displayResult is the callback function that will be executed after processData has finished its simulated asynchronous operation.
processData calls callback(processedResult) once the data is processed, passing the result to displayResult.
Importance:

Callbacks are a cornerstone of JavaScript development, enabling flexible, non-blocking, and event-driven programming, which is essential for building modern web applications. While promises and async/await offer more structured ways to handle asynchronous operations, understanding callbacks is fundamental to comprehending the underlying principles of asynchronous JavaScript.
*/

//* Is JavaScript is object-oriented programming language
/*
JavaScript is not a class-based object-oriented language in the traditional sense, like Java or C++. Instead, it is a prototype-based object-oriented language. This means that objects inherit properties and methods directly from other objects (their prototypes), rather than from classes.
While JavaScript has always been object-oriented through its prototype-based nature, the introduction of the class keyword in ES6 (ECMAScript 2015) provides a more familiar syntax for developers coming from class-based languages. This class syntax is essentially syntactic sugar over JavaScript's existing prototype-based inheritance mechanism.
Therefore, you can utilize object-oriented programming paradigms in JavaScript, including concepts like encapsulation, inheritance, and polymorphism, whether you choose to work directly with prototypes or use the class syntax for a more structured approach.
*/

//* JS Execution Context
/*
In JavaScript, an execution context is an abstract concept representing the environment where JavaScript code is evaluated and executed. It's essentially a wrapper that manages the code and helps the JavaScript engine understand and run it.
There are two main types of execution contexts:
Global Execution Context (GEC):
This is the default execution context created when a JavaScript script first starts to run.
It represents the global scope, where all code not inside a function is executed.
There can only be one Global Execution Context per JavaScript file or application.
It contains the global object (e.g., window in browsers, global in Node.js) and the this keyword, which refers to the global object in the GEC.
Function Execution Context:
A new function execution context is created every time a function is called.
It represents the function's local scope, containing its arguments, local variables, and the this keyword, which refers to the object that called the function (or the global object in non-strict mode if not called as a method).
Each function call results in a new, independent function execution context.
Phases of Execution Context Creation:
Every execution context goes through two phases:
Creation Phase:
Memory Component (Variable Environment): The JavaScript engine reserves memory space for variables and function declarations within that context. This includes hoisting, where variable declarations are conceptually moved to the top of their scope.
Lexical Environment: The scope chain is initialized, determining which variables and functions are accessible within the current context.
this Binding: The value of the this keyword for the current context is determined.
Execution Phase:
The JavaScript engine executes the code line by line within the context.
Variables are assigned their actual values, and functions are invoked.
The Call Stack:
Execution contexts are managed by the call stack, a data structure that keeps track of the order of execution contexts. When a new execution context is created (e.g., a function is called), it's pushed onto the top of the call stack. When an execution context finishes, it's popped off the stack, and control returns to the underlying context.
*/

//* JS Call-Stack
/*
The JavaScript call stack is a fundamental mechanism within the JavaScript engine that manages the execution of functions. It operates on a Last-In, First-Out (LIFO) principle, similar to a stack of plates.
Here's how it works:
Global Execution Context: When a JavaScript program begins execution, a global execution context is created and pushed onto the bottom of the call stack. This represents the global scope of your script.
Function Calls: Whenever a function is invoked, a new function execution context is created for that specific function. This new context, along with its local variables and parameters, is then pushed onto the top of the call stack.
LIFO Execution: The JavaScript engine always executes the function at the very top of the call stack. This is the "Last In" part of LIFO.
Function Completion: When a function finishes executing (either by returning a value or reaching its end), its execution context is popped off the call stack. The engine then resumes execution in the context that was previously below it on the stack. This is the "First Out" part of LIFO.
Stack Empty: The script continues to execute in this manner until the call stack becomes empty, indicating that all functions have finished and the global execution context is also popped off.

function add(a, b) {
    return a + b;
}
function calculateAverage(x, y) {
  let sum = add(x, y); // Calls 'add'
    return sum / 2;
}
let result = calculateAverage(10, 20); // Calls 'calculateAverage'

In this example, the call stack would sequentially look like this:
Global Execution Context: (initial state)
Global Execution Context -> calculateAverage(10, 20) (when calculateAverage is called)
Global Execution Context -> calculateAverage(10, 20) -> add(10, 20) (when add is called within calculateAverage)
Global Execution Context -> calculateAverage(10, 20) (after add returns and is popped)
Global Execution Context: (after calculateAverage returns and is popped)
Key Points:
Single-threaded: JavaScript has a single call stack, meaning it can only process one function at a time.
Synchronous Execution: Code on the call stack executes synchronously, one operation after another.
Stack Overflow: If a function calls itself recursively without a proper exit condition, or if there are too many nested function calls, the call stack can grow too large, leading to a "stack overflow" error.
*/

//* JS Event Loop
/*
The event loop in JavaScript is a crucial mechanism that enables asynchronous programming in a single-threaded environment. It allows JavaScript to handle multiple tasks, such as user interactions, network requests, and timers, without blocking the main thread and making the application unresponsive.

Here's how the event loop works:
Call Stack: This is where synchronous JavaScript code is executed. When a function is called, it's pushed onto the stack, and when it returns, it's popped off.
Web APIs (or Node.js APIs): When an asynchronous operation (like setTimeout, fetch, or DOM events) is encountered, it's offloaded to the browser's Web APIs (or Node.js APIs) to be handled in the background. This allows the main thread to continue executing other synchronous code.
Task Queue (or Callback Queue): Once an asynchronous operation completes in the Web APIs, its associated callback function is placed into the Task Queue. This queue operates on a First-In, First-Out (FIFO) basis.
Microtask Queue: This is a higher-priority queue for callbacks from Promises (.then(), .catch(), .finally()) and queueMicrotask(). Microtasks are processed before tasks in the Task Queue.
Event Loop: The event loop continuously monitors the Call Stack and the Task Queue (and Microtask Queue).
If the Call Stack is empty (meaning no synchronous code is currently running), the event loop first checks the Microtask Queue. It processes all microtasks in the queue until it's empty.
After the Microtask Queue is empty, the event loop then checks the Task Queue. If there are any callbacks in the Task Queue, it moves the first one to the Call Stack for execution.
This cycle repeats, ensuring that asynchronous operations are eventually executed without blocking the main thread.
In essence, the event loop acts as an orchestrator, ensuring that JavaScript's single thread can efficiently manage both synchronous and asynchronous operations, providing a non-blocking and responsive user experience.
https://www.geeksforgeeks.org/javascript/what-is-an-event-loop-in-javascript/
*/

//* Real backend breakdown with examples
/*
1) When to use CALLBACKS in backend? (Rare cases)
Use callbacks ONLY when:

✔ Working with libraries that support only callbacks

Examples:
fs.readFile("x.txt", callback) — old Node.js API
Some legacy, old codebases
Event-driven streams (e.g., http.createServer(() => {...}))

✔ You need high-performance streaming code
Callbacks avoid Promise overhead in ultra-high-performance paths.

✔ Middleware style (Express.js)
Express routes:
app.get("/user", (req, res) => { 
  // callback function
});

This is callback-style because Express designed it that way.

2) When to use PROMISES (.then()) in backend?
Use Promises when:

✔ You want clean chaining
Example:
When doing multiple async operations in sequence:

getUser()
  .then(getOrders)
  .then(getPayments)
  .then(sendResponse)
  .catch(handleError);

✔ You're writing helper functions
Promise-returning function example:

function getUser(id) {
  return User.findById(id);  // returns a Promise
}

✔ When using older libraries that provide Promises
Examples:
Mongoose Queries
AWS SDK v2
Some external HTTP libraries

✔ When integrating into Promise-based ecosystems
Example:
Using .all(), .race(), .any():
Promise.all([getUser(), getOrders(), getPayments()]);

3) When to use ASYNC / AWAIT? (Almost ALWAYS)
This is the best approach for backend development.

Use async/await when:

✔ You write route handlers
app.get("/user/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

✔ You write business logic services
async function createOrder(data) {
    const user = await User.findById(data.userId);
    const payment = await makePayment(data.amount);
    return saveOrder(user, payment);
}

✔ You want clean, readable, error-handled code
try {
    const data = await fetch(url);
} catch (err) {
    console.error(err);
}

✔ You want synchronous-looking flow with async power
This makes backend code maintainable.

✔ You are writing large backend systems
Async/await is far easier to scale and debug.
*/