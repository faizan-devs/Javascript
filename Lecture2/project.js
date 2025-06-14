//* ARRAY

let students = [
    { name: "Faizan", grade: 80 },
    { name: "Sania", grade: 95 },
    { name: "Zara", grade: 87 },
    { name: "Sahil", grade: 55 },
    { name: "Uzair", grade: 45 },
    { name: "Furqaan", grade: 77 },
    { name: "Danish", grade: 27 },
    { name: "Iqra", grade: 66 },
    { name: "Karan", grade: 63 },
    { name: "Rahul", grade: 88 }
];

// let highScores = students.filter(myStudent);
// console.log(highScores);

//? Regular Function
// function myStudent(student){
//     return student.grade > 75;
// };

//? Arrow Function
// let highScores = students.filter(student => student["grade"] > 75);
let highScores = students.filter(student => student.grade > 75);
// console.log(highScores);



let names = ["Sania", "Faizan", "Zara", "Furqaan", "Ayysha"];

//? Arrow Function
// let newNames = names.filter(name => name.length > 5);
// console.log(newNames);

let newNames = names.filter(function (name) { return name.length > 5 });
console.log(newNames);

//? Regular Function
// let newNames = names.filter(myNames);
// console.log(newNames);

function myNames(name) {
    return name.length > 5;
}

//* OBJECT

let book1 = {
    title: "The God Of Small Things",
    author: "Roy Arundhati",
    price: 290,
    ratings: 4.5
};
// console.log(book1);

let book2 = {
    title: "The Room on the Roof",
    author: " Ruskin Bond",
    price: 163,
    ratings: 4.2
};
// console.log(book2);

let numArray = [100, 200, 400, 85, 300, 44, 500];

let result = numArray.filter(number => number > 200);
// console.log(result.join(", "));
// console.log(typeof result);

let results = numArray.filter(myNums);
// console.log(results.join(" _ "))

function myNums(number) {
    return number > 200;
}

// Object declaration
let name = "Zara";
let age = "18";

let user = { name, age };
// console.log(user);

//? Object adding property in object 
let users = { ...user, height: "5ft" }
// console.log(users);