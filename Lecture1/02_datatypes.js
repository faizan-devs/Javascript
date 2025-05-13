// There are 8 datatypes in javascript:-

/*
1. Strings
2. Numbers
3. Boolean
4. BigInt
5. Undefined
6. Symbol
7. null
8. Objects
*/

let name = "Faizan";
let secondName = name;
secondName = "Sania"
console.log(name);
console.log(secondName);
console.log(typeof name);

console.log(name);

let score = 100;
console.log(score);
console.log(typeof score);

let isLoggedIn = true;
console.log(isLoggedIn);
console.log(typeof isLoggedIn);

let bigNumber = 748374823873823823n;
console.log(bigNumber);
console.log(typeof bigNumber);

let state;
let city = undefined;
console.log(state);
console.log(typeof state);
console.log(city);
console.log(typeof city);

let symUnique = Symbol(223344);
let symNumber = Symbol(223344);

let result = symUnique == symNumber
console.log(result);
console.log(typeof symUnique);
console.log(typeof symNumber);

let user = null;
console.log(user);
console.log(typeof user);

let student = {
	name: "Faizan",
	age: 20,
	cgpa: 8.5,
	isPressent: true
};

student.name = "Sania";

console.log(student);
console.log(typeof student);

let heros = ["Superman", "Ironman", "Thor", "Thanos"]

heros[0] = "BlackPanther";
const newHeros = heros.pop();
heros.push("Vision");

console.log(heros);
console.log(typeof heros);

console.log(newHeros);

let newString = new String("faizan");
console.log(newString.toUpperCase());
console.log(newString.substring(2));