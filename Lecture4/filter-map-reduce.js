const coding = ['js', 'py', 'c', 'cpp'];

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
	if (num > 4) newArr.push(num);
});
// console.log(newArr);

const arr = [1, 22, 3, 4, 6, 8, 250, 50, 33, 70, 28, 20, 80, 100];

let result = arr.filter((num) => num % 2 === 0);
result.sort((a, b) => a - b);
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

const myTotal = arr2.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotal);

const myObj = [
	{
		course: 'Data Science',
		price: 2999,
	},
	{
		course: 'Full- Stack Developer',
		price: 5999,
	},
	{
		course: 'Gen-AI with Javascript',
		price: 2799,
	},
	{
		course: 'DSA with Javascritpt',
		price: 1999,
	},
];

const myCart = myObj.reduce((acc, item) => acc + item.price, 0);
// console.log(myCart);

function splitPairs(str) {
	if (str.length % 2 !== 0) {
		str += '_';
	}
	let result = [];
	for (let i = 0; i < str.length; i += 2) {
		result.push(str[i] + str[i + 1]);
	}
	return result;
}

// console.log(splitPairs('abcdef'));

let str = 'aavvbbs';
let results = [];
if (str.length % 2) str += '_';
for (let i = 0; i < str.length; i += 2) {
	results.push(str[i] + str[i + 1]);
}

// console.log(results);

const orders = [
	{
		id: 1,
		amount: 500,
		status: 'paid',
	},
	{
		id: 2,
		amount: 300,
		status: 'pending',
	},
	{
		id: 3,
		amount: 700,
		status: 'paid',
	},
	{
		id: 4,
		amount: 200,
		status: 'cancelled',
	},
	{
		id: 5,
		amount: 1000,
		status: 'paid',
	},
	{
		id: 6,
		amount: 450,
		status: 'pending',
	},
];

const totalOrder = orders.map((order) => ({
	id: order.id,
	amount: order.amount,
}));
console.log('Total Order: ', orders.length, totalOrder);

const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);
console.log(`Total Revenue: ${totalAmount}`);

const totalPaidAmount = orders
	.filter((order) => order.status === 'paid')
	.reduce((sum, order) => sum + order.amount, 0);
console.log(`Paid Amount: ${totalPaidAmount}`);

const totalPendingAmount = orders
	.filter((order) => order.status === 'pending')
	.reduce((sum, order) => sum + order.amount, 0);
console.log(`Pending Amount: ${totalPendingAmount}`);

const totalCancelOrder = orders
	.filter((order) => order.status === 'cancelled')
	.map((order) => order.id);
console.log(`Total Order Cancel: ${totalCancelOrder}`);

const totalCancelOrderAmount = orders
	.filter((order) => order.status === 'cancelled')
	.reduce((sum, order) => sum + order.amount);
console.log(`Total Cancel Order Amount: ${totalCancelOrderAmount}`);

const summary = orders
	.filter((order) => order.status === 'paid')
	.map((order) => ({ id: order.id, amount: order.amount }))
	.reduce((sum, order) => sum + order.amount, 0);
console.log(summary);

const pendingAmounts = orders
	.filter((order) => order.status === 'pending')
	.map((order) => order.amount);
console.log(pendingAmounts);

const totalPendingAmounts = pendingAmounts.reduce(
	(sum, pendingAmounts) => sum + pendingAmounts,
	0,
);
console.log(totalPendingAmounts);
