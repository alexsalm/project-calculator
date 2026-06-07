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

const calculatorDiv = document.querySelector(".calculator-body");

let numberOnScreen = document.createElement("h1");
numberOnScreen.textContent = "21";

let buttonsContainer = document.createElement("div");

let row1 = document.createElement("div");
row1.className = "row-1";

let row2 = document.createElement("div");
row2.className = "row-2";

let row3 = document.createElement("div");
row3.className = "row-3";

let row4 = document.createElement("div");
row4.className = "row-4";

let row5 = document.createElement("div");
row5.className = "row-5";


calculatorDiv.appendChild(numberOnScreen);
calculatorDiv.appendChild(buttonsContainer);

buttonsContainer.appendChild(row1);
buttonsContainer.appendChild(row2);
buttonsContainer.appendChild(row3);
buttonsContainer.appendChild(row4);
buttonsContainer.appendChild(row5);