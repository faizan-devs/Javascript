// In JavaScript, static methods and properties are defined on the class itself, not on instances of the class. They're used when you want functionality or data that belongs to the class as a whole, rather than to any one object created from the class.

class MyClass {
    static myStaticMethod() {
        console.log("This is a static method")
    }
}
MyClass.myStaticMethod();

const obj = new MyClass();
// obj.myStaticMethod(); // Error:- obj.myStaticMethod is not a function

// Static Property (ES2022+)
class Myclass {
    static myStaticMethod = "Hello World!"
}

console.log(Myclass.myStaticMethod); // Hello World!

// Note: For older environments, static properties are typically defined outside the class like this:
class myclass { }
myclass.myStaticMethod = "Hello, world";

// Example with Both Static and Instance Members
class Counter {
    static count = 0;

    constructor() {
        Counter.count++;
    }

    static getCount() {
        return Counter.count++;
    }

    show() {
        console.log("Instance method");
    }
}

new Counter();
new Counter();
new Counter();

console.log(Counter.getCount());
const c = new Counter();
c.show();
// c.getCount(); // Error:- c.getCount is not a function

//* Use Cases for Static Members:
//? 1.Utility/helper functions (Math.random())
//? 2.Counters or caches shared across all instances
//? 3.Factory methods
//? 4.Configuration shared by all instances

// Real world example

class User {
    static roles = ["admin", "editor", "viewer"];

    static isValidRole(role) {
        return User.roles.includes(role);
    }
}

console.log(User.isValidRole("admin"));
console.log(User.isValidRole("guest"));