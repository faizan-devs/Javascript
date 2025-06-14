const password = "Md@44faizan";
let adminName = "Faizan";
isLoggedInTime = 60;
let adminLoggedIn = true;
let city = "Mumbai";
let state;
let user = null

adminName = "sania";
console.log(adminName);
state = "Maharashtra";
city = "Khopoli";

console.table([password, adminName, isLoggedInTime, adminLoggedIn, city, state, user]);

//* Unnecessary outer loop plus return inside outer loop
// function writeTable(num){
//     let result = '';
//     for(let i = num; i === num; i++){
//         for(let j = 1; j <= 10; j++){
//             // console.log(`${i} * ${j} = ${i*j}`);
//             result += `${i} * ${j} = ${i*j}\n`;
//         }
//     return result;
//     }
// }

// let number = writeTable(4);
// console.log(number);


//* Correct version more readable and not unecessary outer loop
function writeTable(num) {
    let result = '';
    for (let j = 1; j <= 10; j++) {
        result += `${num} * ${j} = ${num * j}\n`
    }
    return result;
}

const tableNumber = writeTable(6);
console.log(tableNumber);