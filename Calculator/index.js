// script.js

let firstNumber = '';
let secondNumber = '';
let currentOperation = null;
let shouldResetScreen = false;

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => handleButtonPress(button));
});

function handleButtonPress(button) {
    const { id, classList, innerText } = button;

    if (classList.contains('digit') || id === 'decimal') {
        if (shouldResetScreen) resetScreen();
        updateDisplay(innerText);
    } else if (classList.contains('equal')) {
        if (firstNumber && currentOperation && display.innerText) {
            secondNumber = display.innerText;
            displayResult();
        }
    } else if (classList.contains('operator')) {
        handleOperator(innerText);
    } else if (id === 'clear') {
        clear();
    } else if (id === 'backspace') {
        backspace();
    } else if (['add', 'subtract', 'multiply', 'divide'].includes(id)) {
        handleOperator(innerText);
    }
}

function handleOperator(operator) {
    if (currentOperation !== null) displayResult();
    firstNumber = display.innerText;
    currentOperation = operator;
    shouldResetScreen = true;
}

function updateDisplay(text) {
    if (display.innerText === '0' || shouldResetScreen) resetScreen();
    display.innerText += text;
}

function resetScreen() {
    display.innerText = '';
    shouldResetScreen = false;
}

function displayResult() {
    display.innerText = operate(currentOperation, firstNumber, secondNumber);
    currentOperation = null;
}

function clear() {
    display.innerText = '0';
    firstNumber = '';
    secondNumber = '';
    currentOperation = null;
    shouldResetScreen = false;
}

function backspace() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') display.innerText = '0';
}

function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (isNaN(a) || isNaN(b)) return 'ERROR';

    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b === 0 ? 'ERROR' : a / b;
        default:
            return null;
    }
}
