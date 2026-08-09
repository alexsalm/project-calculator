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

const row0 = document.createElement("div");
row0.className = "row-0";

const row1 = document.createElement("div");
row1.className = "row-1";

const row2 = document.createElement("div");
row2.className = "row-2";

const row3 = document.createElement("div");
row3.className = "row-3";

const row4 = document.createElement("div");
row4.className = "row-4";

buttonsContainer.appendChild(row0);
buttonsContainer.appendChild(row1);
buttonsContainer.appendChild(row2);
buttonsContainer.appendChild(row3);
buttonsContainer.appendChild(row4);

const row0AllClear = document.createElement("p");
row0AllClear.className = 'row0Elements';

const row0PlusMinus = document.createElement("p");
row0PlusMinus.className = 'row0Elements';

const row0Percent = document.createElement("p");
row0Percent.className = 'row0Elements';

const row1Number7 = document.createElement("p");
row1Number7.className = 'row1Elements';

const row1Number8 = document.createElement("p");
row1Number8.className = 'row1Elements';

const row1Number9 = document.createElement("p");
row1Number9.className = 'row1Elements';

const row2Number4 = document.createElement("p");
row2Number4.className = 'row2Elements';

const row2Number5 = document.createElement("p");
row2Number5.className = 'row2Elements';

const row2Number6 = document.createElement("p");
row2Number6.className = 'row2Elements';

const row3Number1 = document.createElement("p");
row3Number1.className = 'row3Elements';

const row3Number2 = document.createElement("p");
row3Number2.className = 'row3Elements';

const row3Number3 = document.createElement("p");
row3Number3.className = 'row3Elements';

const row4Number0 = document.createElement("p");
row4Number0.className = 'row4Elements';

const row4Decimal = document.createElement("p");
row4Decimal.className = 'row4Elements';

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
row4.appendChild(row4Decimal);


