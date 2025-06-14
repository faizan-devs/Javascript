//? Conversion

let score = "33";
console.log(score);
console.log(typeof score);

let newValue = Number(score);
console.log(newValue);
console.log(typeof newValue);

let num = 240;
console.log(num);
console.log(typeof num);

let newString = String(num);
console.log(newString);
console.log(typeof newString);

const userLoggedIn = 1;
console.log(userLoggedIn);
console.log(typeof userLoggedIn);

const userLoggedOut = Boolean(userLoggedIn);
console.log(userLoggedOut);
console.log(typeof userLoggedOut);

let newScore = 0;
console.log(newScore);
console.log(typeof newScore);

let newConvertScore = Boolean(newScore);
console.log(newConvertScore);
console.log(typeof newConvertScore);

let newBoolean = "";
console.log(newBoolean);
console.log(typeof newBoolean);

let convertString = Boolean(newBoolean);
console.log(convertString);
console.log(typeof convertString);

let convertNumber = Number(newBoolean);
console.log(convertNumber);
console.log(typeof convertNumber);


let oldBoolean = "Faizan";
console.log(oldBoolean);
console.log(typeof oldBoolean);

let convertString2 = Boolean(oldBoolean);
console.log(convertString2);
console.log(typeof convertString2);

let convertNumber2 = Number(oldBoolean);
console.log(convertNumber2);
console.log(typeof convertNumber2);


let spaceString = " ";

let convertWhite = Number(spaceString);
console.log(convertWhite);
console.log(typeof convertWhite);

let sumValue = null;
console.log(sumValue);
console.log(typeof sumValue);

let sumValue2 = Number(sumValue);
console.log(sumValue2);
console.log(typeof sumValue2);

let newValue3 = undefined;
console.log(newValue3);
console.log(typeof newValue3);

let newValue4 = Number(newValue3);
console.log(newValue4);
console.log(typeof newValue4);


console.log(5 + null); //return 5 because null converted into 0
console.log("5" + null); // return 5null because null treated as string
console.log("5" + undefined); // return 5undefined because undefined treated as string
console.log(5 + undefined); // return NaN because undefined is a Not a number
console.log("5" + 10); // return 510 because number treated as a string
console.log("20" - 10); // return 10 because "20" convert into number 20
console.log("20" * 10); // return 200 because "20" convert into number 20
console.log("20" / 10); // return 2 because "20" convert into number 20
console.log("20" ** 2); // return 400 because "20" convert into number 20
console.log("20" % 5); // return 0 because "20" convert into number 20

let sumDate = new Date();
console.log(sumDate);
console.log(typeof sumDate);

console.log(sumDate.getTime()); //.getTime() convert into number from Date()
console.log(typeof sumDate.getTime());

console.log(sumDate.toString());
console.log(typeof sumDate.toString());

console.log(Number(sumDate));
console.log(typeof Number(sumDate));

//? Operation

let a = 20;
let b = 30;
console.log(a + b);

let c, d;
c = 5;
d = 5;

let z = c * d;
console.log(z);

let x = 2;
let y = "2"
// x+=y;
x -= y;
console.log(x);

let str = "hello ";
let str1 = "world";
str += str1
console.log(str);

let num2 = ((5 + 2) * 10) / 7;
console.log(num2);

let num3 = 5 + 2 - 3 * 5; // avoid to write code like this
console.log(num3);

// converting number into negative
let value = 5;
let negValue = -value;
console.log(negValue);

// Prefix and Postfix

// Postfix increment
let q = 5;
console.log(q++); // 5 (returns original value, then increments)
console.log(q); // 6 (after increment)

// Prefix increment
let k = 5;
console.log(++k); // 6 (increments first, then returns the new value)
console.log(k); // 6 (after increment)

// Postfix decrement
let h = 5;
console.log(h--); // 5 (returns original value, then decrements)
console.log(h);   // 4 (after decrement)

// Prefix decrement
let j = 5;
console.log(--j); // 4 (decrements first, then returns the new value)
console.log(j);   // 4

// unary operator
/*
Unary Plus (+)
Unary Negation (-)
Logical NOT (!)
Bitwise NOT (~)
Increment (++)
Decrement (--)
typeof Operator
void Operator
*/

// Unary Plus (+)
// Converts its operand into a number (if not already).
console.log(+true); // 1
console.log(+false); // 0
console.log(+""); // 0
console.log(+" "); // 0
console.log(+"5"); // 5
console.log(+"hello"); // NaN
console.log(+null); // 0

// Unary Negation (-)
// Converts the operand into a number and negates it.
console.log(-5);        // -5
console.log(-"5");      // -5 (string to number and negated)
console.log(-true);     // -1
console.log(-false);    // 0
console.log(-"hello");  // NaN

// 5. Logical NOT (!)
// Converts the operand into a boolean and negates it.
console.log(!true);    // false
console.log(!false);   // true
console.log(!0);       // true (0 is falsy)
console.log(!1);       // false (1 is truthy)
console.log(!"hello"); // false (non-empty string is truthy)
console.log(!"");      // true (empty string is falsy)

// Bitwise NOT (~)
// Flips all bits of a number:
// ~x = -(x + 1)
console.log(~5);  // -6  (-(5+1))
console.log(~-6); // 5   (-(−6+1))
console.log(~0);  // -1
console.log(~-1); // 0

// typeof Operator
// Returns the data type of the operand.
console.log(typeof "hello"); // "string"
console.log(typeof 42);      // "number"
console.log(typeof true);    // "boolean"
console.log(typeof {});      // "object"
console.log(typeof []);      // "object" (arrays are objects)
console.log(typeof null);    // "object" (historical JS bug)
console.log(typeof undefined); // "undefined"
console.log(typeof function () { }); // "function"

// void Operator
// Evaluates an expression and returns undefined (often used to prevent returning a value).
console.log(void 0);  // undefined
console.log(void (5 + 5)); // undefined
