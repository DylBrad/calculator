/**

num= 0
 
onclick number
    add number to Num1

num1 = 123

*/

let buttons = document.querySelectorAll("div.buttons-container > button");
let buttonArray = Array.from(buttons);
let operator = '';
let num1 = '';
let num1Complete = false;
let num2 = '';
let inputDisplay = document.querySelector(".display-text");
let operationsLog = document.querySelector(".display-old-data")

buttonArray.forEach(button => {
    button.addEventListener('click', function() {
        if (button.id === 'clear') {
            inputDisplay.value = '';
            num1 = '';
            num2 = '';
            num1Complete = false;
            operator = '';
        } // equals
        else if (button.id === 'equals') {
            if (operator === '+') {
                inputDisplay.value = add(num1, num2);
            } else if (operator === '-') {
                inputDisplay.value = subtract(num1, num2);
            } else if (operator === '/') {
                inputDisplay.value = divide(num1, num2);
            } else if (operator === '*') {
                inputDisplay.value = multiply(num1, num2);
            }
            operationsLog.value += ` ${num2}`;
            num1 = inputDisplay.value;            num1 = parseInt(num1);
            num2 = '';            operator = '';        } 
        // First time operator is clicked, set operator
        else if (button.className === 'operator' && num1Complete === false && num1 !== '') {
            num1Complete = true;
            operator = button.textContent;            operationsLog.value = `${num1} ${operator}`;
            inputDisplay.value = '';
        } 
        // After clicking an operator, make Num1 the result of the operation
        else if (button.className === 'operator' && num1Complete === true) {
            if (operator === '+') {
                inputDisplay.value = add(num1, num2);
            } else if (operator === '-') {
                inputDisplay.value = subtract(num1, num2);
            } else if (operator === '/') {
                inputDisplay.value = divide(num1, num2);
            } else if (operator === '*') {
                inputDisplay.value = multiply(num1, num2);
            }
            num1 = inputDisplay.value;
            num1 = parseInt(num1);
            operator = button.textContent;
            operationsLog.value += ` ${num2} ${operator}`;
            num2 = '';

        }
        // CLick number instead of equals
        else if (button.className === 'numeric' && num1Complete === true && num2 === '') {
            inputDisplay.value = '';
            inputDisplay.value += `${button.value}`;
            num2 += button.value;
            num2 = parseInt(num2);

        } // add extra digits to num2
        else if (button.className === 'numeric' && num1Complete === true) {
            inputDisplay.value += `${button.value}`;
            num2 += button.value;
            num2 = parseInt(num2);
        }
        // Add the FIRST numbers to display & update num1
        else if (button.className === 'numeric') {
            inputDisplay.value += `${button.value}`;
            num1 += button.value;
            num1 = parseInt(num1);

        } 
    });
});

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function divide(a, b) {
    return a / b;
};

function multiply(a, b) {
    return a * b;
};
