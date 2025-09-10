const addNumbers = function (num1, num2) {
	return num1 + num2;
};
const subtractNumbers = function (num1, num2) {
	return num1 - num2;
};
const multiplyNumbers = function (num1, num2) {
	return num1 * num2;
};
const divideNumbers = function (num1, num2) {
	return num1 / num2;
};

let number1, operator, number2;

const operate = function (num1, operation, num2) {
	switch (operation) {
		case "+":
			return addNumbers(num1, num2);
		// break;
		case "-":
			return subtractNumbers(num1, num2);
		// break;
		case "*":
			return multiplyNumbers(num1, num2);
		// break;
		case "/":
			return divideNumbers(num1, num2);
		// break;
	}
};

const display = document.querySelector("#display");
const equalsTo = document.querySelector(".equals-to");

let fullDisplay = "";

function clicked(number) {
	display.textContent += number;
	while
	let content = []
	content.push(number)
	let array = ['+', '-', '/', 'x']
	if (!array.include(number)) {
		num1 = number
	} else {
		
	}
		console.log(num1)
	// function calculation(num1, operand, num2) {

	// 	while (display.length < 2) {
	// 		fullDisplay = display.textContent;
	// 		// number1 = number
	// 	}
	// }
}

console.log(operate(1, "/", 7));
