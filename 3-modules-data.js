module.exports.items = ["item1", "item2"];

const person = {
	name: "Omar",
};
module.exports.singlePerson = person;

const num1 = 5,
	num2 = 10;

// Will happen first when we require it
function init() {
	console.log(`the sum is ${num1 + num2}`);
}

init();
