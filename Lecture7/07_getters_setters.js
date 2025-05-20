// In JavaScript, getters and setters are special methods that allow you to define how to access and update properties of an object. They provide a clean and controlled way to work with object properties.

const obj = {
    _name: "John", // conventionally, underscore means Private 

    // Getter
    get name() {
        return this._name;
    },

    set name(newName) {
        if (typeof newName === "string" && newName.length > 0) {
            this._name = newName
        } else {
            console.log("Invalid name");
        }
    }
};

console.log(obj.name);

obj.name = "Zara";
console.log(obj.name);

obj.name = "";

//* Why Use Getters and Setters?
//? Encapsulation – Control access to internal values.
//? Validation – Add logic when setting a value (like checking types).
//? Computed Properties – Return dynamic or computed values.
//? Clean Syntax – Use object.property instead of object.method().

// Using Object.defineProperty()
const user = { _age: 25 };

Object.defineProperty(user, "age", {
    get: function () {
        return this._age;
    },

    set: function (value) {
        if (value > 0) {
            this._age = value;
        } else {
            console.log("Invalid age");
        }
    }
});

console.log(user.age);
user.age = 30;
console.log(user.age);

//* Notes
//? get and set must not have the same name as a function property in the same object.
//? Avoid heavy logic inside getters or setters—they should be lightweight.

// Create a User object with controlled property access
class User {
    #email;
    #name;
    #password;

    constructor(email, name, password) {
        this.email = email;       // Use setters
        this.name = name;
        this.password = password;
    }

    // Email Getter/Setter
    get email() {
        return this.#email.toLowerCase();
    }

    set email(value) {
        if (value.includes('@')) {
            this.#email = value;
        } else {
            console.log("Invalid Email");
        }
    }

    // Name Getter/Setter
    get name() {
        return this.#name.charAt(0).toUpperCase() + this.#name.slice(1).toLowerCase();
    }

    set name(value) {
        const regex = /^[A-Za-z]+$/;
        if (!regex.test(value)) {
            console.log("Invalid Name");
        } else {
            this.#name = value;
        }
    }

    // Password Getter/Setter
    get password() {
        return "********"; // Masked for privacy
    }

    set password(value) {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasNumber = /\d/.test(value);
        const isLongEnough = value.length >= 8;

        if (hasUpperCase && hasNumber && isLongEnough) {
            this.#password = value;
        } else {
            console.log("Weak Password");
        }
    }
}

const user1 = new User("john@example.com", "john", "StrongPass1");

console.log(user1.email);    // john@example.com
console.log(user1.name);     // John
console.log(user1.password); // ********

user1.password = "weak";     // Weak Password
user1.password = "Strong1";  // Still weak (less than 8 chars)
user1.password = "StrongPass1"; // Valid

