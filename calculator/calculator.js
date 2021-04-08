function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce( (total, num) => total += num, 0);
}

function multiply (array) {
	return array.reduce( (total, num) => total *= num, 1);
}

function power(x, n) {
	return x ** n;
}

function factorial(num) {
	let total = 1;
	for (i = 1; i <= num; i++) {
		total *= i;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}