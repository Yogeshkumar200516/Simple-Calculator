function insertNumber(number) {
    const screen = document.getElementById('screen');
    if (screen.value === '0' || screen.value === 'Error') {
        screen.value = number;
    } else {
        screen.value += number;
    }
}

function insertOperator(operator) {
    const screen = document.getElementById('screen');
    const lastChar = screen.value.slice(-1);

    if (['+', '-', '*', '/'].includes(lastChar)) {
        screen.value = screen.value.slice(0, -1);
    }

    screen.value += operator;
}

function insertFunction(func) {
    const screen = document.getElementById('screen');
    if (func === 'Math.PI') {
        screen.value += Math.PI;
    } else {
        screen.value += func + '(';
    }
}

function insertBracket(bracket) {
    const screen = document.getElementById('screen');
    const lastChar = screen.value.slice(-1);

    if (bracket === '(') {
        screen.value += '(';
    } else if (bracket === ')') {
        // Ensure closing bracket doesn't follow an opening bracket or operator directly
        if (!['+', '-', '*', '/'].includes(lastChar) && screen.value.includes('(')) {
            screen.value += ')';
        }
    }
}

function insertDot() {
    const screen = document.getElementById('screen');
    if (!screen.value.includes('.')) {
        screen.value += '.';
    }
}

function clearScreen() {
    document.getElementById('screen').value = '0';
}

function deleteDigit() {
    const screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1) || '0';
}

function calculateResult() {
    const screen = document.getElementById('screen');
    try {
        const result = eval(screen.value.replace(/Math\.(sqrt|sin|cos|tan|log|log10|exp|PI)/g, match => {
            return match === 'Math.sqrt' ? 'Math.sqrt' :
                   match === 'Math.sin' ? 'Math.sin' :
                   match === 'Math.cos' ? 'Math.cos' :
                   match === 'Math.tan' ? 'Math.tan' :
                   match === 'Math.log' ? 'Math.log' :
                   match === 'Math.log10' ? 'Math.log10' :
                   match === 'Math.exp' ? 'Math.exp' :
                   match === 'Math.PI' ? 'Math.PI' : '';
        }));
        document.getElementById('screen').value = result;
    } catch (error) {
        document.getElementById('screen').value = 'Error';
    }
}
