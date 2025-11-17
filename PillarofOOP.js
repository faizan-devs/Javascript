//? 1. Encapsulation
// Short Description:
// Keep related data + functions together, and hide internal details so outside code can’t mess with them.

//? When You Use It in Real Projects:
//* When creating reusable modules (UserService, AuthService, PaymentService)
//* When protecting sensitive variables (password hashing logic, tokens)
// Example
class AuthService {
    #secret = "super-secret-key"; // hidden

    hashPassword(password) {
        return password + this.#secret; // internal logic
    }
}
// Why use?
// No outside code can access #secret.
// Only the class controls how passwords get hashed.

//? 2. Abstraction
// Short Description:
// Expose only what other parts of your code need; hide the complex stuff.

//? When You Use It in Real Projects:
//* When you create API methods like createUser() without exposing DB queries
//* When you hide complex logic behind simple function names
// Example
class UserController {
    async create(req, res) {
        await UserService.createUser(req.body);  // hides DB logic
        res.send("User created");
    }
}
// Why use?
// The controller doesn’t know the database queries, hashing, checks, etc.
// It only calls a clean method → createUser().

//? 3. Inheritance
// Short Description:
// One class inherits behavior from another so you don’t repeat code.

//? When You Use It in Real Projects:
//* When you build base classes like BaseController, BaseModel, BaseService
//* When multiple routes have common logic (logging, validation)
// Example:
class BaseController {
    sendSuccess(res, data) {
        res.json({ success: true, data });
    }
}

class UserController extends BaseController { }

const user = new UserController();
user.sendSuccess(res, { name: "Faizan" });
// Why use?
// Common response formatting goes in one place.

//? 4. Polymorphism
// Short Description:
// Different classes can use the same method name but behave differently.

//? When You Use It in Real Projects:
//* When different modules follow the same interface
//* When you build strategies → EmailService, SMService, PushNotificationService
//* When creating multiple database adapters (MongoAdapter, SQLAdapter)
// Example:
class Notification {
    send() { }
}

class Email extends Notification {
    send() { console.log("Email sent"); }
}

class SMS extends Notification {
    send() { console.log("SMS sent"); }
}
// Why use?
// You can run notification logic without knowing the type.
function sendNotification(service) {
    service.send(); // polymorphic call
}
/*
| Pillar            | When You Use It                                                   |
| ----------------- | ----------------------------------------------------------------- |
| **Encapsulation** | When you need to protect internal logic (services, secrets, data) |
| **Abstraction**   | When you want simple public methods that hide complexity          |
| **Inheritance**   | When many classes share code → put it in a base class             |
| **Polymorphism**  | When different modules use the same method differently            |
*/