const calc = document.getElementById('calc');
const screen = document.getElementById('screen');
const buttons = document.getElementById('buttons');
let currentTotal = 0;
let currentOperator = '';
let afterOp = false;

buttons.addEventListener('click', (e) => {
    const buttonId = e.target.id;

    if (Number.isInteger(+buttonId)) {
        if (afterOp) {
            screen.innerText = '0';
            afterOp = false;
        }
        if (screen.innerText.length < 8) {
            if (screen.innerText == '0') {
                screen.innerText = buttonId;
            }
            else {
                screen.innerText = +screen.innerText * 10 + (+buttonId);
            }
        }

    }
    else if (buttonId !== 'equals' && buttonId !== 'C') {
        if (currentOperator) {
            console.log(currentTotal, currentOperator, screen.innerText);
            currentTotal = operations[currentOperator](currentTotal, +screen.innerText);
            screen.innerText = currentTotal;
        }
        // is operation button but not equals
        afterOp = true
        currentTotal = +screen.innerText;
        currentOperator = buttonId;
    }
    else if (buttonId === 'equals') {
        // is equals
        console.log(currentTotal, currentOperator, screen.innerText);
        currentTotal = operations[currentOperator](currentTotal, +screen.innerText);
        screen.innerText = currentTotal;
    }
    else {
        // is clear
        currentTotal = 0;
        currentOperator = '';
        screen.innerText = '0';
        console.log(currentTotal, currentOperator, screen.innerText);
    }

})

const operations = {
    'add': (num1, num2) => num1 + num2,
    'subtract': (num1, num2) => num1 - num2,
    'divide': (num1, num2) => num1 / num2,
    'multiply': (num1, num2) => num1 * num2
}


