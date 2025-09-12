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
  if (b === 0) return "Error";
  return a / b;
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case "+": return add(a, b);
    case "-": return subtract(a, b);
    case "x": return multiply(a, b);
    case "÷": return divide(a, b);
    default: return b;
  }
}

const display = document.querySelector("#display");
const previous = document.querySelector(".previous");
const buttons = document.querySelectorAll("button");

let number1 = "";
let number2 = "";
let operator = "";
let shouldResetDisplay = false;	

function appendNumber(number) {
  if (shouldResetDisplay) {
    display.value = ''
    shouldResetDisplay = false 
  }
  if (number === '.' && display.value.includes('.')) return;
  display.value += number
}

function clear() {
  number1 = "";
  number2 = "";
  operator = "";
  display.value = ''
  previous.value = ''
}

function backspace() {
  display.value = display.value.slice(0, -1)
}

function getOperand(op) {
  if (operator !== '') {
    calculate()
  } 
  number1 = display.value
  operator = op
  previous.value = `${number1} ${op}`
  shouldResetDisplay = true
}

function calculate() {
  if (operator === '' || shouldResetDisplay) return
  number2 = display.value
  const result  = operate(operator, number1, number2)
  display.value = (typeof result === "number") ? Math.round(result * 1000) / 1000 : result;
  previous.value = `${number1} ${operator} ${number2} =`
  operator = ''
  number1 = display.value;
  shouldResetDisplay = true;
}


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent

    if (!isNaN(value) || value === '.') { 
      appendNumber(value)
    } else if (value === 'AC') {
      clear()
    } else if (value === 'DEL') {
      backspace()
    } else if (value === '=') {
      calculate()
    } else {
      getOperand(value)
    }
  })
});