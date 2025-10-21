// if
let age = 22;
if (age >= 18) {
    // console.log("You are eligible for vote")
};

// else
let marks = 23;
if (marks >= 35) {
    // console.log("You Pass the exam")
} else {
    // console.log("You fail in exam")
}

// else if
const time = new Date(2018, 11, 24, 10, 33, 30, 0).getHours();

if (time >= 12) {
    // console.log("Good Afternoon")
} else if (time >= 17) {
    // console.log("Good Evening")
} else {
    // console.log("Good Morning")
}

// Ternary Operator or conditonal operator
let score = 54;
let game = (score >= 60) ? "Level Pass" : "Level Fail";
// console.log(game);

function member(isProUser) {
    return isProUser ? "$1.00" : "$10.00"
}

// console.log(member());
// console.log(member(1));
// console.log(member(true));
// console.log(member(false));
// console.log(member(null));
// console.log(member(undefined));

// Switch
switch (new Date(Date.now()).getDay()) {
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
};

// switch (new Date(2003, 9, 16).getDay()) {
//     case 6:
//         console.log(`Today is Saturday`)
//         break;
//     case 0:
//         console.log(`Today is Sunday`)
//         break;
//     case 4:
//         console.log(`Today is Thursday`)
//         break;
//     default:
//         console.log(`Looking forward for the weekend`)
// }

switch (new Date(Date.now()).getDay()) {
    case 6:
        console.log(`Today is Saturday`)
        break;
    case 0:
        console.log(`Today is Sunday`)
        break;
    default:
        console.log(`Looking forward for the weekend`)
}

// Nullish Coalescing Operator
let name = undefined;
console.log(name ?? "Guest");

let name2 = "Sania";
console.log(name2 ?? "Guest");

// Ternary Operator
let bookPrice = 2400;
(bookPrice >= 2000) ? console.log("Expensive Book") : console.log("Expensive Book");