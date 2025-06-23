1. **Javascript Array Methods?**

- **Mutator Methods (Modify the original array):**
    - push(): Adds one or more elements to the end of an array.
    - pop(): Removes the last element from an array.
    - shift(): Removes the first element from an array.
    - unshift(): Adds one or more elements to the beginning of an array.
    - splice(): Adds, removes, or replaces elements at a specific index.
    - sort(): Sorts the elements of an array in place.
    - reverse(): Reverses the order of elements in an array in place.
    - fill(): Fills all or part of an array with a static value.

- **Accessor Methods (Return new values or arrays, do not modify original):**
    - concat(): Merges two or more arrays into a new array.
    - slice(): Extracts a portion of an array into a new array.
    - indexOf(): Returns the first index at which a given element can be found.
    - lastIndexOf(): Returns the last index at which a given element can be found.
    - includes(): Checks if an array contains a specific element.
    - join(): Joins all elements of an array into a string.
    - toString(): Returns a string representing the array.

- **Iteration Methods (Execute a function for each element):**
    - forEach(): Executes a provided function once for each array element.
    - map(): Creates a new array by applying a function to each element of the original array.
    - filter(): Creates a new array with elements that pass a test implemented by a provided function. 
    - reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
    - reduceRight(): Similar to reduce(), but processes elements from right to left.
    - every(): Checks if all elements in an array pass a test.
    - some(): Checks if at least one element in an array passes a test.
    - find(): Returns the value of the first element that satisfies a provided testing function.
    - findIndex(): Returns the index of the first element that satisfies a provided testing function.
    - flat(): Creates a new array with all sub-array elements concatenated into it recursively up to a specified depth.
    - flatMap(): Combines map() and flat() into one method.

---

2. **What is the difference between Map() and forEach()?**
- ***Map()***
    - Return Value:- Returns a new array containing the results of the callback function for each element.
    - Immutability:- Immutable. It does not alter the original array.
    - Primary Use Case:- To transform each element of an array and create a new array with the transformed values.
    - Chaining:- Can be chained with other array methods like filter(), reduce(), etc.
    - **The Transformer: Map()**
        - Think of Map() as a factory for creating a new array based on an existing one. It takes a callback function as an argument, applies it to each element of the original array, and returns a new array with the results. The original array remains untouched.
```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(numbers);       // Output: [1, 2, 3, 4, 5] (The original array is unchanged)
```

- ***forEach()***
    - Return Value:- Returns undefined.
    - Immutability:- Mutable. It can modify the original array if the callback function is designed to do so.
    - Primary Use Case:- o iterate over an array and perform a side effect for each element (e.g., logging, database updates).
    - Chaining:- Cannot be chained with other array methods as it returns undefined.
    - **The Iterator: forEach()**
    - In contrast, forEach() is like a diligent worker that goes through each item in an array and performs a specific task. It also takes a callback function as an argument, but its primary purpose is to execute that function for its side effects. It does not return a new array.
```javascript
const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(fruit => {
  console.log(`I love ${fruit}!`);
});

// Output:
// I love apple!
// I love banana!
// I love cherry!
```