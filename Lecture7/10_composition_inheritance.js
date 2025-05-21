// In JavaScript (and more broadly in object-oriented programming), Composition and Inheritance are two fundamental design patterns used to share functionality and structure code. Here’s a clear breakdown of the two, with pros, cons, and examples.

//* Inheritance
//? Inheritance allows one class (or constructor function) to inherit properties and methods from another.
class Animal {
    speak() {
        console.log("Animal Speaks");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}

const dog = new Dog();
dog.speak();
dog.bark();

// Pros:-
//? Simple and natural when there’s a clear "is-a" relationship.
//? Promotes code reuse.

// Cons:
//? Can lead to tight coupling.
//? Difficult to change base class without affecting subclasses.
//? Not flexible for complex relationships (fragile hierarchy problem).

//* Composition
//? Composition is about building complex behavior by combining simpler functions or objects. It’s based on the idea of "has-a" or "can-do" rather than "is-a".

const canSpeak = (state) => ({
    speak: () => console.log(`${state.name} speaks`)
});

const canBark = (state) => ({
    bark: () => console.log(`${state.name} barks`)
});

const createDog = (name) => {
    const state = { name };
    return Object.assign({}, canSpeak(state), canBark(state));
};

const dogg = createDog("rex");
dogg.speak();
dogg.bark();

//* Pros:
//? More flexible: you can add/remove behaviors easily.
//? Encourages composition over inheritance (a key principle in modern JavaScript and functional programming).
//? Avoids tight coupling and rigid class hierarchies.

//* Cons:
//? Slightly more boilerplate code.
//? Can be harder to organize if overused without structure.

//* Best Practice Today
//? Favor composition over inheritance. Most modern JavaScript developers (especially in functional and modular codebases) prefer composition due to its flexibility and simplicity in large applications.

// Scenario:
// We want to model two types of users:
// Admin: can log in and delete users.
// Guest: can log in but not delete users.

//* Using Inheritance
/*
// Base class
class User {
    constructor(name) {
        this.name = name;
    }

    login() {
        console.log(`${this.name} has logged in.`);
    }
}

// Admin inherits from User
class Admin extends User {
    deleteUser(user) {
        console.log(`${this.name} deleted ${user.name}`);
    }
}

Guest inherits from User
class Guest extends User {
    No deleteUser method
}

const admin = new Admin("Alice");
admin.login();        // Alice has logged in.
admin.deleteUser({ name: "Bob" }); // Alice deleted Bob

const guest = new Guest("Charlie");
guest.login();        // Charlie has logged in.
// guest.deleteUser({ name: "Bob" }); ❌ Error
*/

//* Using Composition
const canLogin = (state) => ({
    login: () => console.log(`${state.name} has logged in.`)
});

const canDeleteUser = (state) => ({
    deleteUser: (user) => console.log(`${state.name} deleted ${user.name}`)
});

// Factory functions
const createAdmin = (name) => {
    const state = { name };
    return Object.assign({}, state, canLogin(state), canDeleteUser(state));
};

const createGuest = (name) => {
    const state = { name };
    return Object.assign({}, state, canLogin(state)); // No delete capability
};

const admin = createAdmin("Alice");
admin.login();        // Alice has logged in.
admin.deleteUser({ name: "Bob" }); // Alice deleted Bob

const guest = createGuest("Charlie");
guest.login();        // Charlie has logged in.
// guest.deleteUser({ name: "Bob" }); ❌ Error
