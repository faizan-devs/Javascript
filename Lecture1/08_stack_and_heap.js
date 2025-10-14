// Stack Memory (Prmitive Data Types)
// Heap Memory (Non-Prmitive Data Types) 

/*
Stack Memory:

Purpose: The Stack is used for storing primitive values (numbers, booleans, strings, null, undefined, symbols) and references to objects and functions stored in the Heap. It also manages the execution context of functions (the call stack).

Characteristics:
1. LIFO (Last-In, First-Out): Data is added and removed in a specific order, like a stack of plates.
2. Fixed-size allocation: Memory for stack variables is allocated at compile time.
3. Fast access: Operations on the stack are very efficient due to its ordered structure.
4. Automatic deallocation: Memory is automatically freed when a function finishes execution.
*/
// Example
let age = 30; // 'age' (primitive) and its value '30' are stored on the stack.
function greet() {
    let name = "Alice"; // 'name' (primitive) and its value 'Alice' are stored on the stack when greet() is called.
}
greet(); // When greet() finishes, 'name' is removed from the stack.

/*
Heap Memory:

Purpose: The Heap is used for storing non-primitive values (objects, arrays, functions). These values can have dynamic sizes and lifetimes that extend beyond the scope of a single function call.

Characteristics:
Dynamic allocation: Memory is allocated as needed during runtime.
Unordered storage: Data can be stored in any available memory location.
Slower access: Accessing data in the Heap can be slower than on the Stack due to its unordered nature and the need for references.
Garbage Collection: Memory in the Heap is managed by JavaScript's garbage collector, which automatically identifies and reclaims unused memory.
*/
// Example:
const person = { name: "Bob", age: 25 }; // The 'person' object is stored on the heap.
// The variable 'person' on the stack holds a reference (memory address) to this object in the heap.
let numbers = [1, 2, 3]; // The 'numbers' array is stored on the heap.
// The variable 'numbers' on the stack holds a reference to this array in the heap.

// In summary: The Stack handles primitive values and function call management, offering speed and automatic deallocation. The Heap stores complex data structures like objects and arrays, providing dynamic memory allocation and relying on garbage collection for memory management.