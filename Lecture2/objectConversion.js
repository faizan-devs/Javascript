// Object to Array
// 1. Convert object → array of keys
const user = { name: "Alice", age: 25, city: "Delhi" };

const keys = Object.keys(user);
console.log(keys);

// Output:
["name", "age", "city"]


// 2. Convert object → array of values
const user1 = { name: "Alice", age: 25, city: "Delhi" };

const values = Object.values(user1);
console.log(values);

// Output:
["Alice", 25, "Delhi"]


// 3. Convert object → array of key-value pairs (entries)
const user3 = { name: "Alice", age: 25, city: "Delhi" };

const entries = Object.entries(user3);
console.log(entries);

// Output:
[
    ["name", "Alice"],
    ["age", 25],
    ["city", "Delhi"]
]


// 4. Convert object → array of objects
// If you want each key - value pair to become its own object:
const user4 = { name: "Alice", age: 25, city: "Delhi" };

const result = Object.entries(user4).map(([key, value]) => ({ key, value }));
console.log(result);

// Output:
[
    { key: "name", value: "Alice" },
    { key: "age", value: 25 },
    { key: "city", value: "Delhi" }
]


// Array to Object
// 1. Array → Object with index-based keys
const arr = ["Alice", 25, "Delhi"];

const obj = { ...arr };
console.log(obj);

// Output:
// { 0: "Alice", 1: 25, 2: "Delhi" }


// 2. Array of pairs → Object
// (Your earlier example)
const users = [
    ["Alice", 25],
    ["Bob", 33],
    ["Max", 28]
];

const obj2 = Object.fromEntries(users);
console.log(obj2);

// Output:
// { Alice: 25, Bob: 33, Max: 28 }


// 3. Array → Object where each value becomes a key
// (Useful for lookup tables)
const arr1 = ["apple", "banana", "mango"];

const obj1 = Object.fromEntries(arr.map(item => [item, true]));
console.log(obj1);

// Output:
// { apple: true, banana: true, mango: true }


// 4. Array of objects → Single object using a key
// Example: Use id as the key.
const arr2 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

const obj3 = Object.fromEntries(arr.map(item => [item.id, item]));
console.log(obj);

// Output:
// {
//     1: { id: 1, name: "Alice" },
//     2: { id: 2, name: "Bob" }
// }