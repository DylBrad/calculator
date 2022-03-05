// display button value in display
let childButtons = document.querySelectorAll("div.buttons-container > button");
let buttonArray = Array.from(childButtons);
let lowerInputDisplay = document.querySelector(".display-text-lower");
let upperInputDisplay = document.querySelector(".display-text-upper");
let num1 = '';
let num2 = '';
let totalSum;
let countOperators = 0;
let calculator;

buttonArray.forEach(button => {
    button.addEventListener('click', function() {
        if (button.id === 'clear') {
            upperInputDisplay.value = '';
            lowerInputDisplay.value = '';
            num1 = '';
            num2 = '';
        } // add first numers to input
        else if (button.id === 'numeric' && upperInputDisplay.value === '') {
            lowerInputDisplay.value += `${button.value}`;
            num1 += button.value;
            num1 = parseInt(num1);
        } // update upperInput for first time
         else if (button.id !== 'numeric' && upperInputDisplay.value === '') {
            upperInputDisplay.value += (num1 + ' ' + button.textContent + ' ');
            lowerInputDisplay.value = '';
            calculator = button.textContent;
            countOperators ++;
            console.log(countOperators)
        } 
        // ADD
        else if (upperInputDisplay.value.length > 0 && button.id === 'numeric' && calculator === '+' && countOperators <= 1) {
            num2 += button.value;
            num2 = parseInt(num2);
            lowerInputDisplay.value += (button.textContent);
            totalSum = num1 + num2;
            console.log(totalSum);
        } // SUBTRACT
        else if (upperInputDisplay.value.length > 0 && button.id === 'numeric' && calculator === '-' && countOperators <= 1) {
            num2 += button.value;
            num2 = parseInt(num2);
            lowerInputDisplay.value += (button.textContent);
            totalSum = num1 - num2;
            console.log(totalSum);
        } // DIVIDE
        else if (upperInputDisplay.value.length > 0 && button.id === 'numeric' && calculator === '/' && countOperators <= 1) {
            num2 += button.value;
            num2 = parseInt(num2);
            lowerInputDisplay.value += (button.textContent);
            totalSum = num1 / num2;
            console.log(totalSum);
        } // MULTIPLY
        else if (upperInputDisplay.value.length > 0 && button.id === 'numeric' && calculator === '*' && countOperators <= 1) {
            num2 += button.value;
            num2 = parseInt(num2);
            lowerInputDisplay.value += (button.textContent);
            totalSum = num1 * num2;
            console.log(totalSum);
        } 

        // Continue maths after first sum
        else if (countOperators === 1 && button.id === 'add') {
            console.log("do another sum");
            upperInputDisplay.value += num2;
            lowerInputDisplay.value = num1 + num2;
            num1 = num1 + num2;
            num2 = 0;
            console.log(num1, num2)
            countOperators ++;
            console.log(countOperators);
        } else if (countOperators > 1 && button.id === 'numeric') {
            console.log("make num2");
        } 

        // equals
        else if (button.id !== 'numeric' && button.id !== 'clear' && calculator === '+') {
            upperInputDisplay.value += num2;
            lowerInputDisplay.value = num1 + num2;
            totalSum = num1 + num2;
            console.log(totalSum);
        } else if (button.id !== 'numeric' && button.id !== 'clear' && calculator === '-') {
            upperInputDisplay.value += num2;
            lowerInputDisplay.value = num1 - num2;
            totalSum = num1 - num2;
            console.log(totalSum);
        } else if (button.id !== 'numeric' && button.id !== 'clear' && calculator === '/') {
            upperInputDisplay.value += num2;
            lowerInputDisplay.value = num1 / num2;
            totalSum = num1 / num2;
            console.log(totalSum);
        } else if (button.id !== 'numeric' && button.id !== 'clear' && calculator === '*') {
            upperInputDisplay.value += num2;
            lowerInputDisplay.value = num1 * num2;
            totalSum = num1 * num2;
            console.log(totalSum);
        }

    });
});


// Populate input when buttons are clicked
/**
 *foreach button
    if ( button = numeric AND upper = empty )
        add number to lower input
    else if ( button == calculation AND upper input === empty "" )
        add contect to upper input 
        clear lower input

    else if ( button = calc && upper == string ending in *,+,%.. AND  )

    else  ( button === "equals" )
        uppertext = "full sum"
        lowertext = function(add/whatever)


 */