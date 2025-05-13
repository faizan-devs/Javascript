// for

// for ([initialization]; [condition]; [final-expression]) {
//         loop body
// }


let students = ["Sania", "Faizan", "Zara", "Sahil"];

for (let i = 0; i < students.length; i++) {
    let name = students[i];
    // console.log(name)
};

for (let i = 0; i <= 5; i++){
    // console.log(`The number is ${i}`)
};

let i = 2;
let len = students.length;
for (; i < len; i++){
    let name = students[i]
    // console.log(name)
};

let j, leng;
for (j = 1, leng = students.length; j < leng; j++){
    // console.log(students[j])
}

for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++){
        // console.log(i, " * ", j, " = ", i*j)
    }
};

let sum = 0;

for (let i = 0; i <= 100; i++){
    // console.log("sum = ", sum, " + ", i)
    sum += i;
}
// console.log(sum);

const FaangComp = ["Google", "Apple", "Facebook", "Microsoft"];
let c = 0;

for(;c < FaangComp.length;){
    // console.log("Comapany:- ",FaangComp[c]);
    c++;
}

// While

let k = 1;
while (k <= 10) {
    // console.log("k =",k);
    k++;
};

const cars = ["BMW", "Kia", "Ford", "Toyota"];
let car = 0;
while(car < cars.length){
    // console.log(cars[car])
    car++;
};

// do while

let num = 20;

do {
    // console.log("Faizan");
    num++
} while (num <= 10); // This loops run one time atleast beacuse condition in not true

//? Print number from 1 to 10

let numb = 1;

do{
    // console.log("Number:-",numb);
    numb++
}while(numb <= 10);

// for-of 

//? The JavaScript for of statement loops through the values of an iterable object.
//? It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.

const heros = ["Superman", "Batman", "Spiderman", "Ironman"];

let size = 0;
for (const x of heros) {
    // console.log("Name of Heros:-",x, "and", "Length:-", x.length);
    size++;
}
// console.log("Size of an array:-", size);

let language = "Javascript";

let lent = 0;
for (const x of language){
    // console.log("letter:-", x);
    lent++;
}
// console.log("length of string:-",lent);

// for-in 

//? The JavaScript for in statement loops through the properties of an Object.

const student = {
    name: "Faizan",
    age: 21,
    cgpa: 7.5,
    isPass: true,
}

for (let key in student) {
    // console.log(key,":", student[key]);
}