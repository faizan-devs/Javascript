//* In JavaScript, break, continue, and return are control flow statements used in branching and looping logic.

// break
//? Exits the current loop or switch statement immediately.
//? Useful when you want to stop the loop before it finishes all iterations.

// This code only stop inner loop execution
for (let i = 5; i <= 6; i++){
    for (let j = 1; j <= 10; j++){
        if(`${i*j}` == 25){
            // console.log("Stop execution");
            break;
        }
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

// There are two ways two stop both execution:-

// First one is using a flag method
let stop = false;

for (let i = 2; i <= 3; i++){
    for (let j = 1; j <= 10; j++){
        if(`${i*j}` == 16){
            // console.log("Stop execution");
            stop = true;
            break;
        }
        // console.log(`${i} * ${j} = ${i*j}`);
    }
    if (stop) break;
}

// Second one is using Labels (outerLoop)

outerLoop:
for (let i = 7; i <= 8; i++){
    for (let j = 1; j <= 10; j++){
        if(`${i*j}` == 49){
            // console.log("Stop execution");
            break outerLoop;
        }
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

// continue

//? Skips the current iteration and moves to the next one in the loop.
//? Useful when you want to ignore some values based on a condition.

for (let i = 1; i <= 10; i++){
    if(i === 5){
        continue; // Skips when i is 5
    }
    // console.log(i);
}

// return

//? Exits a function and optionally returns a value.
//? Can be used inside loops or conditionals within a function.

function findEvenFirstNum(arr){
    for (let num of arr) {
        if(num % 2 === 0){
            return num;
        }
    }
    return null
}

// console.log(findEvenFirstNum([1, 3, 7, 8, 9, 10]));

//* Scenario: A customer tries to enter a 4-digit PIN. Stop asking if the correct PIN is entered.

let correctPin = "1234";
let attempts = ["0000", "2929", "1236", "9090", "1234"];

for (let pin of attempts){
    if (pin === correctPin){
        // console.log("Access Granted!");
        break; // stops loop once correct pin entered
    }else{
        // console.log("Inccorect PIN, Try again!")
    }
}


//* Scenario: You are processing a list of items. Skip the ones that are null or undefined.

// loose falsy check
let items = ["Banana", "Apple", null, undefined, "Grapes", ""];

for (const item of items) {
    if(!item){
        continue; // skip when item is falsy 
    }else{
        // console.log("Processing:", item)
    }
};

// Strict check
let cars = ["Toyota", "BMW", null, undefined, "", 0, "Kia", "Ford"];

for (const car of cars){
    if(car === null || car === undefined){
        continue;
    }else if(car === "" || !car){
        // console.log("Car name is not mention")
        // break;
    }else{
        // console.log("Brand:", car)
    }
}

// return
//* Scenario: Search a product list and return the first product that is out of stock.

// This return first out of stcok product
// function findOutStockProduct(products){
//     for(let product of products){
//         if(product.stock === 0){
//             return product.name
//         }
//     }
//     return "All Product in stock"
// }

// let products = [
//     {name:"Laptop", stock: 5},
//     {name:"Mouse", stock: 0},
//     {name:"Monitor", stock: 2},
//     {name:"Keyboard", stock: 0}
// ]

// console.log(findOutStockProduct(products))

//? This return all outof stock product

function findOutStockProduct(products){
    let outOfStock = [];

    for (let product of products){
        if (product.stock === 0){
            outOfStock.push(product.name)
        }
    }

    return outOfStock.length > 0 ? outOfStock : "All product in stock"
}

let products = [
    {name:"Laptop", stock: 5},
    {name:"Mouse", stock: 0},
    {name:"Monitor", stock: 2},
    {name:"Keyboard", stock: 0}
]

// console.log(findOutStockProduct(products));

//* Practice

//? Write a loop that counts from 1 to 10, but stops if the number is 6 using break.

for (let i = 1; i <= 10; i++){
    if (i == 6){
        break;
    }
    // console.log(i);
}

//? Loop from 1 to 10 and only print the odd numbers using continue.

for (let i = 1; i <= 10; i++){
    if (i % 2 === 0){
        continue;
    }
    // console.log(i);
}

//? Write a function that checks if a number is even. If so, return "Even", otherwise return "Odd".

function evenNumber(numbers){
    if(numbers % 2 === 0){
        return "Even Number"
    }else{
        return "Odd Number"
    }
}

console.log(evenNumber(8));

//! This below function checks if any is even in an array then return even number otherwise return odd number
function checkEvenNumber(numbers){
    for (let number of numbers){
        if(number % 2 === 0){
            return "Even Number"
        }
    }
    return "Odd Number"
}

// console.log(checkEvenNumber([1, 2, 5])); // Even number
// console.log(checkEvenNumber([1, 3, 5])); // odd number