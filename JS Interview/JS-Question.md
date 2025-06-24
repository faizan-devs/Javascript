### 1. Javascript Array Methods?

**Mutator Methods (Modify the original array):**
- push(): Adds one or more elements to the end of an array.
- pop(): Removes the last element from an array.
- shift(): Removes the first element from an array.
- unshift(): Adds one or more elements to the beginning of an array.
- splice(): Adds, removes, or replaces elements at a specific index.
- sort(): Sorts the elements of an array in place.
- reverse(): Reverses the order of elements in an array in place.
- fill(): Fills all or part of an array with a static value.

**Accessor Methods (Return new values or arrays, do not modify original):**
- concat(): Merges two or more arrays into a new array.
- slice(): Extracts a portion of an array into a new array.
- indexOf(): Returns the first index at which a given element can be found.
- lastIndexOf(): Returns the last index at which a given element can be found.
- includes(): Checks if an array contains a specific element.
- join(): Joins all elements of an array into a string.
- toString(): Returns a string representing the array.

**Iteration Methods (Execute a function for each element):**
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

### 2. What is the difference between Map() and forEach()?

**Map()**
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

**forEach()**
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

--- 

### 3. How do you convert a string to a number?

**The parseInt():-**
The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
```Javascript
let str = "123";
let num = parseInt(str, 10); // Result: 123 (number)

let withDecimal = "3.14";
let intFromDecimal = parseInt(withDecimal, 10); // Result: 3 (the decimal part is truncated)

let withText = "42apples";
let intFromText = parseInt(withText, 10); // Result: 42 (stops at 'a')

let invalid = "hello";
let notANumber = parseInt(invalid, 10); // Result: NaN (Not-a-Number)
```
**The parseFloat():-**
The parseFloat() function parses a string argument and returns a floating-point number (a number with a decimal).
```Javascript
let str = "3.14";
let num = parseFloat(str); // Result: 3.14 (number)

let integerString = "100";
let floatFromInt = parseFloat(integerString); // Result: 100 (number)

let withText = "3.14 is pi";
let floatFromText = parseFloat(withText); // Result: 3.14 (stops at ' ')

let invalid = "hello";
let notANumber = parseFloat(invalid); // Result: NaN
```

**The Unary Plus Operator (+):-**
This is a concise and often preferred way to convert a string to a number. It attempts to convert the entire string into a number.
```javascript
let str = "25";
let num = +str; // Result: 25 (number)

let floatStr = "12.5";
let floatNum = +floatStr; // Result: 12.5 (number)

let withText = "30oranges";
let nanResult = +withText; // Result: NaN (the entire string could not be converted)

let emptyString = "";
let zeroResult = +emptyString; // Result: 0
```

**The Number() Constructor:-**
You can also use the Number() constructor to perform the conversion. It behaves similarly to the unary plus operator.
```javascript
let str = "99.9";
let num = Number(str); // Result: 99.9 (number)

let intStr = "500";
let intNum = Number(intStr); // Result: 500 (number)

let withText = "100 apples";
let nanResult = Number(withText); // Result: NaN

let emptyString = "";
let zeroResult = Number(emptyString); // Result: 0
```

---

### 4. How do you remove an element from an array without mutating it?

**Using Array.prototype.filter():-**
This is often the most readable and straightforward method when you want to remove elements based on a condition or their value. The filter() method creates a new array with all elements that pass the test implemented by the provided function.
```javascript
const originalArray = [1, 2, 3, 4, 5];
const valueToRemove = 3;

const newArray = originalArray.filter(item => item !== valueToRemove);

console.log(newArray);       // Output: [1, 2, 4, 5]
console.log(originalArray); // Output: [1, 2, 3, 4, 5] (The original array is unchanged)
```

**Using Array.prototype.slice():-**
The slice() method returns a shallow copy of a portion of an array into a new array object. You can use it twice to effectively "cut out" the element you want to remove.
```javascript
const originalArray = ["apple", "banana", "cherry", "date"];
const indexToRemove = 2; // Remove "cherry"

const newArray = [
  ...originalArray.slice(0, indexToRemove),
  ...originalArray.slice(indexToRemove + 1)
];

console.log(newArray);       // Output: ["apple", "banana", "date"]
console.log(originalArray); // Output: ["apple", "banana", "cherry", "date"] (The original array is unchanged)
```

**Using the Spread Syntax (...):-**
Similar to the slice() method, you can use the spread syntax to create a new array by combining parts of the original array. This can be a very concise way to remove an element by its index.
```javascript
const originalArray = [10, 20, 30, 40, 50];
const indexToRemove = 1; // Remove 20

// Note: This requires finding the index first if you only know the value.
const newArray = [
  ...originalArray.slice(0, indexToRemove),
  ...originalArray.slice(indexToRemove + 1)
];


console.log(newArray);       // Output: [10, 30, 40, 50]
console.log(originalArray); // Output: [10, 20, 30, 40, 50] (The original array is unchanged)
```

---

### 5. What is destructuring in Javascript? Provide an example.

**Object Destructuring:-**
Object destructuring allows you to extract properties from an object and assign them to variables with the same name.

The Old Way (without destructuring):
```javascript
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York'
};

const firstName = user.firstName;
const lastName = user.lastName;
const age = user.age;

console.log(firstName); // John
console.log(age);       // 30
```
The New Way (with destructuring):
```javascript
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York'
};

// Destructuring statement
const { firstName, lastName, age } = user;

console.log(firstName); // John
console.log(lastName);  // Doe
console.log(age);       // 30
```

**Advanced Object Destructuring Features:** <br>

- **Aliasing:** You can rename the variables if you don't want to use the property names.
```javascript
const { firstName: fName, lastName: lName } = user;
console.log(fName); // John
```

**Default Values:** You can provide a default value in case a property doesn't exist on the object.
```javascript
const { firstName, country = 'USA' } = user;
console.log(country); // USA (since 'country' doesn't exist in the 'user' object)
```