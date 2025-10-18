let newArr = [1, 2, 3, 4, 5, 6]
// console.log(newArr.indexOf(5));
// console.log(newArr[3]);
// console.log(newArr.join()); // this method return a string

let anotherArray = newArr.flat(Infinity);
// console.log(anotherArray);

let hero = ["Ironman", "Hulk", "Thor", "Antman"]
// console.log(hero);
hero.push("Vision")
// console.log(hero);

let cars = ["Volvo", "BMW", "Toyota", "Kia", "Swift"]
// console.log(cars);
cars[0] = "Mercedes"
// console.log(cars);
// let car = cars[cars.length - 1]
// let car = cars.length
cars[cars.length] = "Mercedes"
// console.log(cars);

// Method

// Adding & Removing Elements
let name = ["Sania", "Faizan", "Zara"];
name.push("Gini"); // Adds an element to the end of an array.
// console.log(name);

name.pop(); // Removes and returns the last element of an array.
// console.log(name);

let boolName = name.includes("Sania") // Checks if an array contains an element.
// console.log(boolName);

let knowIndex = name.indexOf("Zara") // Returns the first index of an element, or -1 if not found.
// console.log(knowIndex);

let str = name.join("-");
// console.log(str) // Joins elements into a string with a specified separator.

let str2 = name.toString();
// console.log(str2); // Converts an array to a string (comma-separated by default).

let newArrNumb = [0, 1, 3, 5, 7, 9];
// console.log(newArrNumb);
newArrNumb.unshift(10); // Adds an element to the beginning of an array.
// console.log(newArrNumb);
const freshNumb = newArrNumb.shift(); // Removes and returns the first element of an array.
// console.log(newArrNumb);
// console.log(freshNumb);

//? Splice Adds/removes elements at a specific index.
let number = [1, 2, 6, 4, 5, 2]
// console.log(number);
// console.log(number.length)
// console.log(number.lastIndexOf(2));
// console.log(number.fill(10, 1, 4)) // Fills an array with a specified value.

// let newNumb = number.splice(1,3,9)
// console.log(number);
// console.log(newNumb);

let newNumber = number.slice(0, 4);
// console.log(newNumber);
// console.log(number);

let new_heros = ["Hulk", "Ironman", "Panther"];
let dc_heros = ["Superman", "Flash", "Batman"];
let indiaHeros = ["Padman", "Raone", "Gone"];

// console.log(Array.isArray(indiaHeros));

let all_new_heros = new_heros.concat(dc_heros, indiaHeros) // Merges multiple arrays and returns a new array.
// console.log(all_new_heros);

const $heros = [...new_heros, ...dc_heros, ...indiaHeros];
// console.log($heros);

let combined = new_heros.map((_, i) => [new_heros[i], dc_heros[i], indiaHeros[i]]);
// console.log(combined);

let score = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score, score2, score3)); // Creates a new array from arguments.
// console.log(Array.from("ZARA")); // Creates an array from an iterable (like a string or Set).

let new_numb = [1, 2, 3, 4, 5, [6, 7, 8], [9, 10]];
let some_numb = new_numb.flat(Infinity);
// console.log(some_numb);
// console.log(new_numb);

console.log(Array.from({ name: "faizan", age: 20 }));
// this give empty array because we not convert object directly into aray because the object does not have a length property, Array.from() has no way to convert it into an array.
// Objects are not iterable by default.
// A plain object { name: "faizan" } is neither iterable nor array-like, so Array.from() returns an empty array ([]).

// Arraylike object
let new_Arr = { 0: "a", 1: "b", 2: "c", length: 3 };
// console.log(Array.from(new_Arr));

const newArr2 = { a: 0, b: 1, c: 2, length: 3 };
// console.log(Array.from(newArr2));

// Since Array.from() does not work on plain objects, you can manually extract values, keys, or entries:
let obj = {
	name: "Sania",
	age: 20
}
// console.log(Object.values(obj));
// console.log(Object.keys(obj));
// console.log(Object.entries(obj));

// ✅ Use Object.values(), Object.keys(), or Object.entries() when converting objects to arrays.
// ❌ Do not use Array.from() on plain objects, as they are neither iterable nor array-like.

// Mutating Methods (Modify original array)
// push(), pop(), shift(), unshift(), splice(), sort(), reverse(), fill(), copyWithin()

// Non-Mutating Methods (Return new arrays without modifying original)
// map(), filter(), slice(), concat(), flat(), flatMap(), toSorted(), toReversed()

// Accessing values through length property
let fruits = ["Banana", "PineApple", "Mango"];
// console.log(fruits[0]);
// console.log(fruits.length);

// console.log(fruits[fruits.length - fruits.length]); // access first value of an array through length property
// console.log(fruits[fruits.length - 1]); //  access last value of an array through length property

fruits[fruits.length - 1] = "Strawberry";
// console.log(fruits);

fruits[fruits.length - fruits.length] = "WaterMelon";
// console.log(fruits);

fruits[(fruits.length - fruits.length) + 1] = "Chikoo";
// console.log(fruits);
