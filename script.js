let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    display.textContent = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function appendNumber(number) {
    currentInput += number;
    display.textContent = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && op === '-') {
        currentInput = '-';
        display.textContent = currentInput;
        return;
    }

    if (currentInput === '' || currentInput === '-') return;

    if (operator) {
        calculate();
    }

    firstOperand = currentInput;
    operator = op;
    currentInput = '';
}

function calculate() {
    if (!operator || currentInput === '') return;

    let result;
    const secondOperand = currentInput;

    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        case '%':
            result = parseFloat(firstOperand) % parseFloat(secondOperand);
            break;
        default:
            return;
    }

    display.textContent = result;
    currentInput = result.toString();
    operator = '';
    firstOperand = '';
}