const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
	return array.reduce((total, current) => total * current);
};

const divide = function(array) {
	return array.reduce((total, current) => total / current);
};

const operate = function(num1, num2, operator) {
	let firstNumber = num1;
	let secondNumber = num2;
	let chosenOperator = operator;
	
	if (chosenOperator == '+') {
		console.log(add(num1, num2));
	}
	if (operator == '-') {
		console.log(subtract(num1, num2));
	}
	if (operator == '*') {
		console.log(multiply([firstNumber, secondNumber]));
	}
	if (operator == '/') {
		console.log(divide([firstNumber, secondNumber]));
	}
};