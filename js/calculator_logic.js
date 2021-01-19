var state = false;
var equation = '';

function update_output() {
    document.getElementById('text-output').innerHTML = (equation.length > 15) ? equation.slice(0, 15) : equation;
}

function update_status() {
    state = (document.getElementById('logic-switch').checked) ? true : false;
    equation = '';
    update_output();
}

function clear_equation() {
    equation = '';
    update_output();
}

function backspace() {
    equation = equation.slice(0, -1);
    update_output();
}

function increment_equation(button) {
    if (state && equation.length < 15) {
        if ((button.classList.contains('not-first') && equation.length === 0) ||
                (button.classList.contains('not-last') && equation.length === 14) ||
                    (button.classList.contains('operator') && Array('+', '-', 'x', '÷', '.').includes(equation[equation.length - 1]))) {
            return;
        }
        equation += button.value;
        update_output();
    }
}

function calculate() {
    result = eval(equation.replace('x', '*').replace('÷', '/'));
    equation = result.toString().replace('*', 'x').replace('/', '÷');
    update_output();
}