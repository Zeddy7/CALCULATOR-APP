function add(a, b) {
   return a + b;
}

function subtract(a, b) {
   return a - b;
}

function multiply(a, b) {
   return a * b;
}

function divide(a, b) {
   if (b === 0) {
      return "ERROR";
   }
   return a / b;
}

function operate(a, operand, b) {
   num1 = parseFloat(a);
   num2 = parseFloat(b);
   switch (operand) {
      case "+":
         return add(num1, num2);
      case "-":
         return subtract(num1, num2);
      case "x":
         return multiply(num1, num2);
      case "÷":
         return divide(num1, num2);
      default:
         return null;
   }
}

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const previousDisplay = document.querySelector(".previous-display");

let firstNum;
let operator;
let secondNum;
let resetDisplay = false;

function addToDisplay(number) {
   if (resetDisplay) {
      display.value = "";
      resetDisplay = false;
   }
   if (display.value.includes(".") && number === ".") {
      return;
   }
   display.value += number;
}

function allClear() {
   firstNum = "";
   operator = "";
   secondNum = "";
   previousDisplay.value = "";
   display.value = "";
}

function backspace() {
   display.value = display.value.slice(0, -1);
}

function getOperand(op) {
   if (operator) {
      calculate();
   }
   firstNum = display.value;
   operator = op;
   previousDisplay.value = `${display.value} ${op}`;
   resetDisplay = true;
}

function calculate() {
   if (operator === "" || resetDisplay) return;
   secondNum = parseFloat(display.value);
   let result = operate(firstNum, operator, secondNum);
   display.value =
      typeof result === "number" ? Math.round(result * 1000) / 1000 : result;
   previousDisplay.value = `${firstNum} ${operator} ${secondNum} =`;
   operator = "";
   firstNum = display.value;
   resetDisplay = true;
}

buttons.forEach(button => {
   button.addEventListener("click", () => {
      value = button.textContent;
      if (!isNaN(value) || value === ".") {
         addToDisplay(value);
      } else if (value === "AC") {
         allClear();
      } else if (value === "DEL") {
         backspace();
      } else if (value === "=") {
         calculate();
      } else {
         getOperand(value);
      }
   });
});
