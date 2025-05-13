let age = 80;

// if (age >= 18) {
// 	console.log(`You are eligible for vote:${age}`);	
// }

if (age >= 18) text = "You are not eligible for vote";
// console.log(text);

// if(age >= 18 || age == 18){
// 	console.log(`You can buy alcohol`);
// }else{
// 	console.log("You not by alcohol");
	
// }

// if(typeof age === "number"){
// 	console.log(`Is a number`);
// }else{
// 	console.log(`It is not a number`);
// }

if(!isNaN(age) && typeof age !== "boolean"){
	console.log("It is number");
}else{
	console.log("It is not a number");
	
}

let result = null ?? "result not given";
console.log(result); //? ?? (Nullish Coalescing Operator): This operator returns its right-hand side operand when its left-hand side operand is null or undefined. Otherwise, it returns its left-hand side operand.1   


let name = true;

let user = (typeof name === "string") ? "a string":"Not a string"
console.log(user);
console.log(typeof user);


const voteable = (age < 18) ? "Too young":"Old enough";
console.log(voteable);
console.log(typeof voteable);


let student = {
	name: "Faizan",
	age: null ?? "age not given"
}
// student.age = 20;
console.log(student.age);

// Logical Operator
console.log(true && true); //true
console.log(true || true); //true
console.log(false && true); //false
console.log(false || true); //true
console.log(55>40 && 40>70); //false
console.log(55>40 || 40>70); //true
console.log(true || false); //true
console.log(!true); //false
console.log(!false); //true
console.log(!5 > 3); //false
console.log(0 || "Hello"); // "Hello" (First truthy value)
console.log("" || 0 || null || "JS"); // "JS" (First truthy value)

let score = undefined
let password = "";
let surname = "Alam"

let results = surname || score || password;
console.log(results);



// Conditional Operator OR Ternary Operator
let Userage = 18;
let canVote = (Userage >= 18) ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote); // "Yes, you can vote"

// nested ternary
let num = -4;
let numResult = (num > 0) ? "Positive" : (num < 0) ? "Negative":"Zero";
console.log(numResult);


// Nullish coalescing Operator
// Returns the right-hand value if the left-hand value is null or undefined, otherwise returns the left-hand value.
// Use coalescing when you check only null and undefined

console.log(null ?? "Default"); // "Default"
console.log(0 ?? "Default"); // 0 (Since 0 is not null or undefined)

let user1 = null;
let userinfo = null ?? "Guest";
console.log(userinfo);

let user2 = undefined;
let userinfo2 = undefined ?? "Guest";
console.log(userinfo2);

function greet(name){
	return "Hello, " + (name ?? "Guest");
}
console.log(greet());
console.log(greet("Faizan"));

let firstName = null;
let lastName = undefined;
let profession = "coder"

let people = firstName ?? lastName ?? profession ?? "Anonymous"
console.log(people);

// Otional chaining Operator
// The optional chaining operator (?.) allows you to safely access deeply nested object properties without causing an error if an intermediate property is null or undefined.

// object?.property;       // Safe property access
// object?.[key];          // Safe dynamic property access
// object?.method?.();     // Safe method call

let users = null;
console.log(users?.name);

let user3 = {
	name: "Sania",
	age: 20,
	address: {
		city: "Khopoli",
		zip: 400002,
		area: "Mountain"
	}
}

console.log(user3.address.city);
console.log(user3.state);
console.log(user3.state?.city);

let apiCall = {};
console.log(apiCall.getData?.());

let arr = [
	{name: "Faizan", age: 20},
	{name: "Sania", age: 20}
]

console.log(arr[0])
console.log(arr[1])
console.log(arr[1].grade?.cgpa)
console.log(arr[0].name)
console.log(arr[3]?.name)