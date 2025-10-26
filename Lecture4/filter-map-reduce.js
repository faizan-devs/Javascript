const coding = ["js", "py", "c", "cpp"];

const values = coding.forEach((item) => {
    // console.log(item); 
    return item; // ForEach doesn't return anything
});
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums.join("-"))

let newArr = [];
myNums.forEach((num) => {
    if(num > 4) newArr.push(num);
});
// console.log(newArr);

const arr = [1, 22, 3, 4, 6, 8, 250, 50, 33, 70, 28, 20, 80, 100];

let result = arr.filter((num) => (num % 2 === 0));
result.sort((a,b) => a - b);
// console.log(result);

let result1 = arr.map((num) => num + 10);
// console.log(result1);

const arr2 = [1, 2, 3, 4, 5];

// const myTotal = arr2.reduce(function(acc, curr) {
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc + curr;
// }, 0)

// const myTotal = arr2.reduce((acc, curr) => {
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc + curr;
// }, 0);

const myTotal = arr2.reduce((acc, curr) => acc + curr, 0)
// console.log(myTotal);

const myObj = [
    {
        course: "Data Science",
        price: 2999
    },
    {
        course: "Full- Stack Developer",
        price: 5999
    },
    {
        course: "Gen-AI with Javascript",
        price: 2799,
    },
    {
        course: "DSA with Javascritpt",
        price: 1999
    }
];

const myCart = myObj.reduce((acc, item) => acc + item.price, 0);
console.log(myCart);