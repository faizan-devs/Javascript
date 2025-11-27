const { response } = require("express");

console.log(typeof (new Date())); // Object
console.log(typeof (Date())); // String

// Creating a Date Object
// let date1 = new Date(); // Current date and time
// let date2 = new Date("2025-02-28"); // Specific date (YYYY-MM-DD)
// let date3 = new Date(2025, 1, 28); // Year, Month (0-based), Day
// let date4 = new Date(1709161200000); // Timestamp (milliseconds since 1970)

// Getting Date and Time Components
let now = new Date();

// console.log(now.getFullYear()); // Get full year (e.g., 2025)
// console.log(now.getMonth()); // Get month (0 = January, 1 = February, ...)
// console.log(now.getDate()); // Get day of the month (1-31)
// console.log(now.getDay()); // Get day of the week (0 = Sunday, 1 = Monday, ...)
// console.log(now.getHours()); // Get hours (0-23)
// console.log(now.getMinutes()); // Get minutes (0-59)
// console.log(now.getSeconds()); // Get seconds (0-59)
// console.log(now.getMilliseconds()); // Get milliseconds (0-999)
// console.log(now.getTime()); // Get timestamp (milliseconds since 1970)

// Setting Date and Time Components
let future = new Date();
// future.setFullYear(2030);
// future.setMonth(5); // June (0-based index)
// future.setDate(15); // 15th day
// future.setHours(12);
// future.setMinutes(30);
// future.setSeconds(45);
// console.log(future);

// Date Formatting Methods
let today = new Date();

// console.log(today.toDateString()); // "Fri Feb 28 2025"
// console.log(today.toTimeString()); // "14:30:00 GMT+0530 (IST)"
// console.log(today.toISOString()); // "2025-02-28T09:00:00.000Z"
// console.log(today.toUTCString()); // "Fri, 28 Feb 2025 09:00:00 GMT"
// console.log(today.toLocaleDateString()); // "2/28/2025" (Format depends on locale)
// console.log(today.toLocaleTimeString()); // "2:30:00 PM"

// Comparing Dates
let d1 = new Date("2025-02-28");
let d2 = new Date("2024-02-28");

// console.log(d1 > d2); // true
// console.log(d1 < d2); // false
// console.log(d1.getTime() === d2.getTime()); // false

// Calculating Date Differences
let start = new Date("2025-02-01");
let end = new Date("2025-02-28");

let diff = end - start; // Difference in milliseconds
let daysDiff = diff / (1000 * 60 * 60 * 24); // Convert to days
// console.log(daysDiff); // 27

// Getting Current Timestamp

let currentDate = Date.now();
let convertCurrDate = currentDate / (1000 * 60 * 60 * 24);
// console.log(currentDate); // Current timestamp in milliseconds
// console.log(Math.round(convertCurrDate));

const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const d = new Date("2023-12-02"); //? new keyword create Date() object without new keyword it's give current date and time in string.
const d = new Date(2018, 11, 24) //? In this Date month start from 0 base index and week start from 0 base index.

let day = weekDay[d.getDay()];
// console.log(day);

let month = months[d.getMonth()];
// console.log(month);

//* CODE
function fetchData(url, cb) {
    setTimeout(() => {
        const data = `Data from ${url}`;
        cb(data);
    }, 2000);
}

function processData(receivedData) {
    console.log("Processing:", receivedData);
}

fetchData("https://api.github.com/users/faizan-devs", processData);
console.log("Request sent...")


//* CALLBACK VERSION
function fetchData(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            callback(data);
        })
        .catch(err => console.error("Error", err));
}

function processData(receivedData) {
    console.log("Username:", receivedData.name);
}

fetchData("https://api.github.com/users/faizan-devs", processData);
console.log("Request sent...");

//* PROMISE VERSION
// fetch(url) is already a Promise using Promises even if you don’t write the word “Promise”.
function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => data);
}

fetchData("https://api.github.com/users/faizan-devs")
    .then(result => {
        console.log("Pokemon Name:", result.name);
    })
    .catch(err => {
        console.error("Error:", err)
    });

console.log("Request Sent...")

//* new Promise Keyword
function fetchData(url) {
    return new Promise((resolve, reject) => {

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    reject("Network response not ok");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

fetchData("https://api.github.com/users/faizan-devs")
    .then(result => {
        console.log("Username", result.login)
    })
    .catch(err => {
        console.error("Error", err);
    });
console.log("Request sent...")

//* ASYNC / AWAIT
async function fetchData(url) {
    const res = await fetch(url);
    const data = await res.json;
    return data;
}

async function main() {
    const result = await fetchData("https://api.github.com/users/faizan-devs")
    console.log("Repo Count:", result.public_repos);
}

main();
console.log("Request sent...")

//* REAL WORLD VERSION ASYNC / AWAIT
async function fetchDataReal(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Networl response not ok");
    return await res.json();
}

async function main() {
    console.log("Request sent...");
    try {
        const user = await fetchDataReal("https://api.github.com/users/faizan-devs");

        const created = new Date(user.created_at);
        console.log(`Account Created: ${created.toLocaleString()}`);

    } catch (err) {
        console.error("Fetch Error:", err)
    }
}

main();