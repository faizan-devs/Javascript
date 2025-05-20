//* What Is a Constructor Function?
//? A constructor function is a regular JavaScript function that is used with the new keyword to create multiple instances (objects) with the same structure and behavior.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(`Hi, My name is ${this.name} and I'm ${this.age} years old.`)
    };
}

const p1 = new Person("Sania Ali", 21)
const p2 = new Person("Zara Ali", 19);
// p1.sayHello();
// p2.sayHello();

//! How It Works:
//* When you call a constructor function with the new keyword:
//? 1.A new empty object is created.
//? 2.this inside the function refers to the new object.
//? 3.Properties and methods are added to this.
//? 4.The new object is automatically returned.

// Constructor Functions vs. Classes
// Constructor functions were the old way to do OOP in JavaScript before ES6 classes were introduced.

// 🔄 Constructor Function Version:
function Carr(brand) {
    this.brand = brand;
    this.drive = function () {
        console.log(brand + " Is Best Car.")
    };
}

const car1 = new Carr("Mercedes");
// car1.drive();

// Class Version (Same as Above):
class Car {
    constructor(brand) {
        this.brand = brand;
    }

    drive() {
        console.log(this.brand + " Is Best Car")
    }
}

const car2 = new Car("BMW");
// car2.drive();
//* Note: Class methods are placed on the prototype, so they are more memory-efficient than defining them inside the constructor function.

// Real-World Example
function Book(title, author) {
    this.title = title;
    this.author = author;

    this.describe = function () {
        return `${this.title}: by ${this.author}.`
    };
}

// const book1 = new Book("1984", "George Orwell");
// const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

//* Option 1: Use Two console.log Statements
// console.log(book1.describe());
// console.log(book2.describe());

//* Option 2: Add a Newline Character (\n)
// console.log(book1.describe() + "\n" + book2.describe());

//* Option 3: Use Template Literals
// console.log(`${book1.describe()}
// ${book2.describe()}`)

//* Option 4: Join with Newline (if you have more books in an array)
// console.log([book1.describe(), book2.describe()].join('\n'));
//! Problem with constructor function is evry time you create a book, it creates a new cpoy of describe function in memory.

// Refactored Version Using prototype:
function Books(title, author) {
    this.title = title;
    this.author = author;
}

Books.prototype.describe = function () {
    return `${this.title}: by ${this.author}`;
}

const book1 = new Books("1984", "George Orwell");
const book2 = new Books("To Kill a Mockingbird", "Harper Lee");

// console.log(`${book1.describe()}
// ${book2.describe()}`);
//* Now, describe() is stored once in memory and shared by all instances of Book.

// Convert Constructor Function to Modern class Syntax
class Bookss {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    describe() {
        return `${this.title}: by ${this.author}.`
    };
}

const book3 = new Bookss("Pride and Prejudice", "Jane Austen");
const book4 = new Bookss("The Great Gatsby", "F. Scott Fitzgerald");

// console.log(book3.describe());
// console.log(book4.describe());

//* Behind the scenes:
//? Class methods like describe() are added to the prototype automatically — just like the prototype example above.
//? It's cleaner and easier to read and is the recommended approach in modern JavaScript.

// Bonus: Dynamic Printing for Multiple Books
const books = [
    new Book("1984", "George Orwell"),
    new Book("Brave New World", "Aldous Huxley"),
    new Book("Fahrenheit 451", "Ray Bradbury")
];

// Print eact book on a new line
// books.forEach(book => {
//     console.log(book.describe())
// });

console.log(books.map(book => book.describe()).join("\n"));