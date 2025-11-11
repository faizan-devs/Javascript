/*
function linearSearch(arr, n, x){
    let i;
    for(i = 0; i < n; i++){
        if(arr[i] == x){
            return i;
        }
    } 
    return -1;
}

function serachInArr(arr, n, x){
    let result = linearSearch(arr, n, x);
    if(result == -1){
        console.log("Element is not present in array")
    }else{
        console.log("Element present at index", result);
    }
}

let arr = [20, 30, 40, 50, 60];
let n = arr.length;

let x1 = 40;
serachInArr(arr, n, x1);

let x2 = 4;
serachInArr(arr, n, x2);
*/

/*
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

queueMicrotask(() => console.log("Microstask"));

new Promise((res, rej) => {
    console.log("Inside Promise");
    res();
}).then(() => console.log("Promise"));

console.log("End");

1. Step-by-step Execution
🔹 Synchronous execution (Call Stack first)

JS executes line by line until the main thread is empty:

console.log("Start");
→ Prints: Start

setTimeout(..., 0);
→ Schedules a macrotask (timer callback) for the next event loop tick.
Nothing prints yet.

queueMicrotask(...);
→ Schedules a microtask (runs right after the current synchronous code finishes, before any macrotask).
Nothing prints yet.

new Promise(...)

The executor function inside Promise runs immediately (synchronous).
→ Prints: Inside Promise

res() is called, so .then(...) is scheduled as a microtask.

console.log("End");
→ Prints: End

At this point, synchronous code is done. Call stack is empty.

🔹 Microtasks phase (priority)

Before moving to setTimeout, JS clears all microtasks:

queueMicrotask(() => console.log("Microstask"));
→ Prints: Microstask

Promise.then(() => console.log("Promise"));
→ Prints: Promise

🔹 Macrotasks (Timers, IO, etc.)

Finally, JS runs the callback scheduled by setTimeout:
→ Prints: Timeout

2. Final Output Order
Start
Inside Promise
End
Microstask
Promise
Timeout

3. Concepts Used
1. Call Stack
JS runs synchronous code first.

2. Event Loop
Controls how the stack, microtask queue, and macrotask queue interact.

3. Macrotasks (Task Queue)
setTimeout, setInterval, I/O, DOM events, etc.
Run after all microtasks are cleared.

4. Microtasks (Microtask Queue / Job Queue)
Promise.then/catch/finally, queueMicrotask, MutationObserver.
Run immediately after the current stack is empty but before any macrotask.

5. Promise Executor
Code inside new Promise((res) => {...}) runs immediately, not delayed.

4. Under the Hood (How JS Handles It)
Think of it like this:
Stack executes sync code first.
When async things happen:
setTimeout → callback goes to macrotask queue.
queueMicrotask & Promise.then → go to microtask queue.

Event loop cycle:
Check stack → empty?
Run all microtasks until queue is empty.
Take one macrotask → run → repeat.
So the reason "Microstask" and "Promise" come before "Timeout" is because microtasks always run before the event loop moves to macrotasks.

✅ So this tiny code snippet is showing:
Sync > Microtasks > Macrotasks execution model.
How Promises are actually just microtasks under the hood.
Why "Timeout" (even with 0 ms) always comes last.
*/

/*
// Authentication and Authorization code example:
import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

// Mock user data
const users = [
    { id: 1, username: "faizan", password: "12345", role: "admin" },
    { id: 2, username: "john", password: "12345", role: "user" },
];

// ✅ Authentication middleware
// Checks if user has a valid token
const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    jwt.verify(token, "SECRET_KEY", (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        req.user = user;
        next();
    });
};

// ✅ Authorization middleware
// Checks if user has the right role
const authorizeRole = (role) => (req, res, next) => {
    if (req.user.role !== role)
        return res.status(403).json({ message: "Access denied" });
    next();
};

// Login route — Authentication step
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(
        (u) => u.username === username && u.password === password
    );
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    // Create token
    const token = jwt.sign({ username: user.username, role: user.role }, "SECRET_KEY");
    res.json({ token });
});

// Protected route — requires Authentication
app.get("/profile", authenticateToken, (req, res) => {
    res.json({ message: `Welcome ${req.user.username}`, user: req.user });
});

// Admin-only route — requires Authentication + Authorization
app.delete(
    "/delete-user",
    authenticateToken,
    authorizeRole("admin"),
    (req, res) => {
        res.json({ message: "User deleted successfully (admin only)" });
    }
);

app.listen(5000, () => console.log("Server running on port 5000"));
*/

/*
🧩 Output Example

1️⃣ Login (Authentication):
POST /login
{
    "username": "faizan",
    "password": "12345"
}
✅ Returns:
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}

2️⃣ Access Protected Route:
GET /profile
Authorization: Bearer <token>
✅ Returns: Welcome faizan

3️⃣ Access Admin-only Route (Authorization):
If role !== admin, returns ❌ Access denied
*/

/*
function splitPairs(str) {
  if (str.length % 2 !== 0) {
    str += '_'; 
  }
  return str; // 👈 return the updated string so you can check it
}

console.log(splitPairs("abcde")); // Output: "abcde_"
console.log(splitPairs("abcd"));  // Output: "abcd"

✅ Explanation:
If the string length is odd, _ is added.
If it’s even, it remains unchanged.
You must return the string, otherwise console.log prints undefined.
*/

function letStringPairs(str) {
    if (str.length % 2 !== 0) {
        str += "_";
    }
    let result = [];

    for (i = 0; i < str.length; i += 2) {
        result.push(str[i] + str[i + 1]);
    }
    return result;
}

console.log(letStringPairs("aabcdeefg"));

// Visual flow of (str[i] + str[i + 1])
// str = "abcde_"
// result = []

// i = 0 → "a" + "b" → "ab" → result = ["ab"]
// i = 2 → "c" + "d" → "cd" → result = ["ab", "cd"]
// i = 4 → "e" + "_" → "e_" → result = ["ab", "cd", "e_"]