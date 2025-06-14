//? FUNCTION
function addNumber(num1, num2) {
    return num1 + num2;
}

const result = addNumber(5, 5);
// console.log(result);

const user1 = {
    username: "Faizan",
    age: 20
};

const user2 = {
    username: "Sania",
    age: 20
};

const user3 = {
    username: "Zara",
    age: 18
};

function anyObject(userinfo) {
    return `My name is ${userinfo.username} and my age is ${userinfo.age}`
}
// console.log(anyObject(user1))
// console.log(anyObject(user2))
// console.log(anyObject(user3))

const myArr = ["Sania", "Faizan", "Zara"];

function returnNewArr(getArr) {
    return getArr[1];
}

const results = returnNewArr(myArr);
// console.log(results);
// console.log(returnNewArr(["Lambda", "Gemini", "Claude"]));

//? SCOPE
// console.log(addTwo(5)); //! Error:- Cannot use before initialization
const addTwo = function (num) {
    return num + 2;
};

// console.log(addNum(2,3)); //! Doesn't give error because function doesn't declare by any variable
function addNum(num1, num2) {
    return num1 + num2 + 1
}

//? ARROW And THIS
const greeting = () => "Hello World!";
// console.log(greeting);

const str = (val) => "hello " + val;
// console.log(str(2));

const addNumb = (num1, num2, num3) => (num1 + num2 + num3);
// console.log(addNumb(2,3,4));

const admin = {
    ussername: "Faizan",
    password: "Md@44faizan",
    welcomeMessage: function () {
        console.log(`${this.ussername}, just logged in new device and created new password ${this.password}`)
    }
}
// admin.welcomeMessage();
// admin.ussername = "Sania";
// admin.password = "parkar@44sania";
// admin.welcomeMessage();
// admin.ussername = "Zara";
// admin.password = "sidd@44zara";
// admin.welcomeMessage();

function chai() {
    let ussername = "Faizan";
    console.log(ussername);
    console.log(this.ussername);
    console.log(this);
}
// chai();

// const chai2 = () => {
//     let admin = "Zara";
//     console.log(admin);
//     console.log(this.admin);
//     console.log(this);
//     function chai(){
//         console.log(`${this.admin}`)
//     }
//     chai()
// }
// chai2();

//? Since chai2 is an arrow function, this refers to the global object (window in browsers).
//? window.admin does not exist, so console.log(this.admin); prints undefined.



//* If you want this.admin to work, chai2 must be a regular function, not an arrow function:
function chai2() {
    this.admin = "Zara";  // Setting `admin` on `this`
    console.log(this.admin);  // Now accessible

    function chai() {
        console.log(this.admin); // `this` refers to the global object (or undefined in strict mode)
    }

    // chai();
}
// chai2();
//! Problem: chai() still loses this when called directly.



//? Option 2: Use an Arrow Function for chai()
//* Arrow functions inherit this from their lexical scope, so if chai() is an arrow function, it will capture this from chai2():
function chai2() {
    this.admin = "Zara";

    const chai = () => {
        // console.log(this.admin); // Now it refers to `chai2`'s `this`
    };

    chai();
}
chai2();

let sum = (num1, num2) => (num1 + num2);

let total = sum(2, 4);
// console.log(total);

const handleObject = () => {
    console.log(`Username: ${this.username}, Items: ${this.items}, Total: ${this.price}`)
};

// handleObject({
//     username: "Faizan",
//     items: 5,
//     price: 3440,
// });

//? IIFE (Immediately Invoked Function Expression)
//! ✅ Why use an IIFE?

//? It creates a private scope and prevents pollution of the global scope.
//? This is commonly used for data encapsulation.


// Regular function without parameter
(function () {
    // console.log("This is an IIFE expression");
})();

// Regular function with parameter
(function (name) {
    // console.log(`Your name is ${name}`);
})("Faizan");

// Arrow function
(() => {
    // console.log("This is an IIFE expression in arrow function");
})();

// Arrow function with parameter
const score = ((score) => {
    return `Your score is ${score}`;
})(99);

// console.log(score);

const counter = (() => {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function () {
            count--;
            console.log(`Count: ${count}`);
        },
        getCount: function () {
            return count;
        }
    }
})();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement();
// console.log(counter.getCount());

//? Use a Regular function for counting to avoid confusion between IIFE execution and regular function only difference between is paranthesis() for invoking the iife.

function createCount() {
    let count = 0;
    return {
        increment: () => `Count: ${++count}`,
        decrement: () => `Count: ${--count}`,
        getCount: () => `Count: ${count}`
    }
}

let counters = createCount();
// console.log(counters.increment());
// console.log(counters.increment());
// console.log(counters.increment());

(function MycreateCount() {
    let count = 0;

    return {
        increment: () => {
            console.log(`Count: ${++count}`);
        },
        decrement: () => {
            console.log(`Count: ${--count}`);
        },
        getCount: () => {
            console.log(`Count: ${count}`);
        }
    };
})();

// counting.increment();
// counting.increment();
// counting.increment();
// counting.decrement();
// counting.decrement();
// counting.decrement();
// counting.getCount();

// ✅ When to Use Prefix vs Postfix
// Use prefix (++count) when you want the incremented value immediately.
// Use postfix (count++) when you want to log the current value first, then increment (this is more common when working with loops).

let x = 5;
// console.log(x++);
x++;
// console.log(x);

let y = 8;
// console.log(y--);
y--;
// console.log(y);

let z = 10;
// console.log(++z);
// ++z
// console.log(z);

let c = 6;
// console.log(--c);
--c
// console.log(c);

//* Function declaration and Function Expression

// Function Declaration
function sayHello() {
    console.log("Hello")
}

// Key Characteristics:
// Named function
// Hoisted: Can be called before its definition in the code.
greet();

function sayHello(greet) {
    console.log("Hi there!")
}

// Function Expression
const sayHello = function () {
    console.log("Hello");
}

// or with an arrow function
const sayGreet = () => {
    console.log("Hello");
}

// Key Characteristics:
// Function is stored in a variable.
// Can be anonymous (no name).
// Not hoisted: You must define it before using it.
greet(); //ReferenceError: Cannot access 'greet' before intialization

const greet = function () {
    console.log("Hello")
}

//* When to Use What?

// Use function declarations for defining reusable utility functions.
// Use function expressions (especially arrow functions) for:
// Callbacks
// Inline functions
// Closures
// When using 'this' carefully (arrow functions don’t have their own 'this')

