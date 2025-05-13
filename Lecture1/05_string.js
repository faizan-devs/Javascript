let firstName = "Faizan";

// console.log(Number(name));

//? Checking and searching
// console.log(firstName[0]);
// console.log(firstName.at(2));
// console.log(firstName.at(-1));
// console.log(firstName.charAt(1.34));
// console.log(firstName.charAt(firstName.length-1));
// console.log(firstName.includes("ai"));
// console.log(firstName.startsWith("a"));
// console.log(firstName.endsWith("n"));
// console.log(firstName.indexOf("a"));
// console.log(firstName.lastIndexOf("a"));

let sentence = "A lion is a jungle king and lion is so big in the jungle ";

// console.log(sentence);
// console.log(sentence.length);

//? Extracting & Modifying 
// console.log(sentence.slice(1, 5));
// console.log(sentence.slice(1, 5).trim());
// console.log(sentence.slice(-1));
// console.log(sentence.substring(2, 4));
// console.log(sentence.replace("jungle", "forest"));
// console.log(sentence.replaceAll("lion", "tiger"));
// console.log(sentence.repeat(2));


let student = "Sania"
// console.log(student.toLocaleUpperCase());
// console.log(student.toLocaleLowerCase());

let student2 = "  Faizan  ";
// console.log(student2.trim());
// console.log(student2.trimStart());
// console.log(student2.trimEnd());

let num = 5;
// console.log(num.toString().padStart(4, "0"));
// console.log(num.toString().padEnd(4, "0"));

let value = "Fai-zaa-aan"
let value2 = " Sania"
// console.log(value);

//? Splitting & Joining
const newArr = value.split("-");
// console.log(newArr)
// console.log(value.concat(value2));

let score = 300;
let str = new String("Faizan")
// console.log(score);

//? String Conversion
// console.log(score.toString());
// console.log(str.valueOf());


// 📌 Summary
// Category	Methods
// Searching	.includes(), .startsWith(), .endsWith(), .indexOf(), .lastIndexOf(), .match(), .search()
// Extracting	.slice(), .substring(), .substr()
// Replacing	.replace(), .replaceAll()
// Case Change	.toUpperCase(), .toLowerCase()
// Trimming & Padding	.trim(), .trimStart(), .trimEnd(), .padStart(), .padEnd()
// Splitting & Joining	.split(), .concat()
// Conversion	.toString(), .valueOf()
