// 1. call() — Immediately calls the function

// You pass:
// - this value
// - arguments one-by-one

// Example:
const person = {
    name: "Faizan",
};

function greet(age) {
    console.log(this.name, age);
}

greet.call(person, 22); //Faizan 22

// 2. apply() — Immediately calls the function

// Same as call(), but arguments are passed as an array.

// Example:
greet.apply(person, [22]);
// ✔ Also runs immediately
// ✔ Only difference: takes arguments in an array

// call vs apply
// call → args individually  
// apply → args in array
//? Both execute the function instantly.

// 3. bind() — Does NOT call the function immediately
// Instead, it returns a new function with this locked.

// Example:
const newFunc = greet.bind(person, 22);
newFunc();
// ✔ Does not run immediately
// ✔ You call it later

// This is useful when:
// passing functions into event listeners
// using setTimeout
// React/Node callback situations

// REAL Example You’ll Remember
const user = {
    name: "Faizan",
};

function welcome(msg, emoji) {
    console.log(msg, this.name, emoji);
}

// call
welcome.call(user, "Hello", "🔥");

// apply
welcome.apply(user, ["Hello", "🔥"]);

// bind
const func = welcome.bind(user, "Hello", "🔥");
func(); // runs later

// ✔ Use call()

// When you want to call function now
// and pass arguments one by one.

// ✔ Use apply()

// When your arguments are already in an array.

// ✔ Use bind()

// When you want to store the function for later
// with a locked this.

// call → call now  
// apply → apply now  
// bind → bind for later