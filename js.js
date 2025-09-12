// const display = document.querySelector("#display");
// const previous = document.querySelector(".previous");
// const numberButtons = document.querySelectorAll('number-buttons')
// const equalsTo = document.querySelector(".equals-to");
// const numberButtons = document.querySelectorAll('number-buttons')

// function addNumbers(num1, num2) {
// 	return num1 + num2;
// };
// function subtractNumbers(num1, num2) {
// 	return num1 - num2;
// };
// function multiplyNumbers(num1, num2) {
// 	return num1 * num2;
// };
// function divideNumbers(num1, num2) {
// 	return num1 / num2;
// };

// function operate(num1, operation, num2) {
// 	// let number1, operator, number2;
// 	switch (operation) {
// 		case "+":
// 			return addNumbers(num1, num2);
// 		// break;
// 		case "-":
// 			return subtractNumbers(num1, num2);
// 		// break;
// 		case "*":
// 			return multiplyNumbers(num1, num2);
// 		// break;
// 		case "/":
// 			return divideNumbers(num1, num2);
// 		// break;
// 	}
// };


// let displayed = [];
// let fullDisplay = [];
// let numbers = "1234567890";

// function clicked(number) {
// 	fullDisplay.push(number);
// 	console.log(fullDisplay);
// 	if (numbers.includes(number)) {
// 		displayed.push(number);
// 	}
// 	if (number === "clear") {
// 		display.value = "";
// 		displayed.length = 0;
// 	} else if (number === "ac") {
// 		display.value = displayed.join("").slice(0, -1);
// 		try {
// 			displayed.length = displayed.length - 1;
// 		} catch (error) {
// 			console.log("error");
// 		}
// 	} else {
// 		display.value += number;
// 		// displayed += number
// 	}
// 	// console.log(fullDisplay.join(' + '))
// 	function calculate() {
// 		display.value = operate(...fullDisplay);
// 		display.value = clicked("clear");
// 		// if (fullDisplay.includes("+")) {
// 		// 	display.value = );
// 		// }
// 		// display.value = Math.round(operate(display.value)) / 100000
// 	}
// }

// function calculate() {
// 	display.value = Math.round(eval(display.value)) / 1000;
// }