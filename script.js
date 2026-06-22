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

const calculatorCase = document.querySelector(".calculator-case");

const calculatorDisplay = document.querySelector(".calculator-display");

const numberOnScreen = document.createElement("h1");
numberOnScreen.textContent = "21";

calculatorDisplay.appendChild(numberOnScreen);

const buttonsContainer = document.querySelector(".buttons-container");

const row1 = document.createElement("div");
row1.className = "row-1";

const row2 = document.createElement("div");
row2.className = "row-2";

const row3 = document.createElement("div");
row3.className = "row-3";

const row4 = document.createElement("div");
row4.className = "row-4";

buttonsContainer.appendChild(row1);
buttonsContainer.appendChild(row2);
buttonsContainer.appendChild(row3);
buttonsContainer.appendChild(row4);

const row1Number7 = document.createElement("p");
row1Number7.id = 'row1Number7';

const row1Number8 = document.createElement("p");
row1Number8.id = 'row1Number8';

const row1Number9 = document.createElement("p");
row1Number9.id = 'row1Number9';

const row2Number4 = document.createElement("p");
row2Number4.id = 'row2Number4';

const row2Number5 = document.createElement("p");
row2Number5.id = 'row2Number5';

const row2Number6 = document.createElement("p");
row2Number6.id = 'row2Number6';

const row3Number1 = document.createElement("p");
row3Number1.id = 'row3Number1';

const row3Number2 = document.createElement("p");
row3Number2.id = 'row3Number2';

const row3Number3 = document.createElement("p");
row3Number3.id = 'row3Number3';

const row4Number0 = document.createElement("p");
row4Number0.id = 'row4Number0';

const row4DoubleZeros = document.createElement("p");
row4DoubleZeros.id = 'row4DoubleZeros';

const row4Decimal = document.createElement("p");
row4Decimal.id = 'row4Decimal';

row1Number7.textContent = "7";
row1Number8.textContent = "8";
row1Number9.textContent = "9";

row2Number4.textContent = "4";
row2Number5.textContent = "5";
row2Number6.textContent = "6";

row3Number1.textContent = "1";
row3Number2.textContent = "2";
row3Number3.textContent = "3";

row4Number0.textContent = "0";
row4DoubleZeros.textContent = "00";
row4Decimal.textContent = ".";

row1.appendChild(row1Number7);
row1.appendChild(row1Number8);
row1.appendChild(row1Number9);

row2.appendChild(row2Number4);
row2.appendChild(row2Number5);
row2.appendChild(row2Number6);

row3.appendChild(row3Number1);
row3.appendChild(row3Number2);
row3.appendChild(row3Number3);

row4.appendChild(row4Number0);
row4.appendChild(row4DoubleZeros);
row4.appendChild(row4Decimal);


