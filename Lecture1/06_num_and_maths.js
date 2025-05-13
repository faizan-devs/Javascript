//? Number

// Methods
let score = 4300;
// console.log(score.toString().length);
// console.log(score.toExponential(2));
// console.log(score.valueOf());

let num = 3.332
// console.log(num.toPrecision(3));
// console.log(num.toFixed(1));

let str = "100pz";
// console.log(Number.parseInt(str));

// parseFloat():
// Purpose: Converts a string into a floating-point number (i.e., a number that can have decimals).

// When to Use: Use parseFloat when you expect the number to possibly have decimal places (e.g., a price or a measurement with fractional values).
const strs = "12.34";
const numm = parseFloat(strs);
console.log(numm); // 12.34 (a float)


// parseInt():
// Purpose: Converts a string into an integer (i.e., a whole number).

// When to Use: Use parseInt when you need to work with whole numbers, such as counting items, setting 			 quantities, or dealing with integer-based values.
const strr = "123";
const nums = parseInt(strr);
console.log(nums); // 123 (an integer)


let num2 = "10.23";
// console.log(Number.parseFloat(num2));
// console.log(typeof Number.parseFloat(num2));

//********************* Math ********************//

//? Rounding Method
let integer = 33.44;

// console.log(Math.round(integer));
// console.log(Math.ceil(integer));
// console.log(Math.floor(integer));
// console.log(Math.trunc(integer));

//? Power and root method
// console.log(Math.pow(5, 3));
// console.log(Math.sqrt(5));
// console.log(Math.cbrt(5));
// console.log(Math.hypot(3, 4));

// console.log(Math.abs(-5));

//? Random and min & max value
// console.log(Math.min(2, 4, 6));
// console.log(Math.max(2, 4, 6));
// console.log(Math.floor(Math.random() * 10 + 1));

function myRandom(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min)
}
// console.log(myRandom(10, 20));

// console.log(Math.floor(Math.random() * 50) + 1);
// console.log(Math.floor(Math.random() * (60 - 55 + 1) + 55));