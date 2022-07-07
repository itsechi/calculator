const operatorBtns = document.querySelectorAll('.operators');
const numberBtns = document.querySelectorAll('.numbers');
const equalsBtn = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');
const allClearBtn = document.querySelector('.allClear');
const displayDiv = document.querySelector('.display');
const displayDivSmall = document.querySelector('.displaySmall');
const pointBtn = document.querySelector('.point');
let a = '';
let b = '';
let operator = '';
let result = '';
let isEqual = false;
let point = true;

numberBtns.forEach(button => button.addEventListener('click', assignNumber));

operatorBtns.forEach(button =>
  button.addEventListener('click', assignOperator)
);

equalsBtn.addEventListener('click', () => {
  isEqual = true;
  operate();
});

allClearBtn.addEventListener('click', allClear);

clearBtn.addEventListener('click', clear);

pointBtn.addEventListener('click', assignNumber);

// keyboard support
window.addEventListener('keydown', function (e) {
  if (e.key == 0) document.querySelector('#zero').click();
  if (e.key == 1) document.querySelector('#one').click();
  if (e.key == 2) document.querySelector('#two').click();
  if (e.key == 3) document.querySelector('#three').click();
  if (e.key == 4) document.querySelector('#four').click();
  if (e.key == 5) document.querySelector('#five').click();
  if (e.key == 6) document.querySelector('#six').click();
  if (e.key == 7) document.querySelector('#seven').click();
  if (e.key == 8) document.querySelector('#eight').click();
  if (e.key == 9) document.querySelector('#nine').click();
  if (e.key == '+') document.querySelector('#add').click();
  if (e.key == '-') document.querySelector('#subtract').click();
  if (e.key == '*') document.querySelector('#multiply').click();
  if (e.key == '/') document.querySelector('#divide').click();
  if (e.key == 'Enter') document.querySelector('#equal').click();
  if (e.key == ',') document.querySelector('#point').click();
  if (e.key == 'Backspace') document.querySelector('.clear').click();
  if (e.key == 'Delete') document.querySelector('.allClear').click();
});

// store user selected numbers
function assignNumber(e) {
  if (operator !== '') {
    if (b < 99999999999999 || b == '.') {
      // input limit || makes it possible to enter . and then numbers
      b += e.target.textContent;
      displayDiv.textContent = b;
      if (b.includes('.')) pointBtn.removeEventListener('click', assignNumber);
    }
  } else {
    if (a < 99999999999999 || a == '.') {
      a += e.target.textContent;
      displayDiv.textContent = a;
      if (a.includes('.')) pointBtn.removeEventListener('click', assignNumber);
    }
  }
}

function assignOperator(e) {
  operate();
  pointBtn.addEventListener('click', assignNumber);
  if (e.target.textContent === '+') {
    operator = '+';
    b = '';
    displayDivSmall.textContent = `${a} ${operator}`;
    displayDiv.textContent = a;
  } else if (e.target.textContent === '-') {
    operator = '-';
    b = '';
    displayDivSmall.textContent = `${a} ${operator}`;
    displayDiv.textContent = a;
  } else if (e.target.textContent === '*') {
    operator = '*';
    b = '';
    displayDivSmall.textContent = `${a} ${operator}`;
    displayDiv.textContent = a;
  } else if (e.target.textContent === '/') {
    if (result === Infinity) {
      divideZero();
    } else {
      operator = '/';
      b = '';
      displayDivSmall.textContent = `${a} ${operator}`;
      displayDiv.textContent = a;
    }
  }
}

function clear() {
  a = a.toString();
  b = b.toString();

  if (operator !== '' && result === '') {
    if (b !== '') {
      b = b.slice(0, -1);
      displayDiv.textContent = b;
    } else {
      a = a.slice(0, -1);
      displayDiv.textContent = a;
    }
    if (!b.includes('.')) pointBtn.addEventListener('click', assignNumber);
  } else if (operator == '') {
    a = a.slice(0, -1);
    displayDiv.textContent = a;
    if (!a.includes('.')) pointBtn.addEventListener('click', assignNumber);
  }
}

function allClear() {
  a = '';
  b = '';
  result = '';
  operator = '';
  isEqual = false;
  displayDiv.textContent = '';
  displayDivSmall.textContent = '';
  pointBtn.addEventListener('click', assignNumber);
}

function divideZero() {
  displayDiv.textContent = `Can't divide by 0!`;
  b = '';
  return;
}

function add(a, b) {
  return (result = a + b);
}

function subtract(a, b) {
  return (result = a - b);
}

function multiply(a, b) {
  return (result = a * b);
}

function divide(a, b) {
  return (result = a / b);
}

// calculator function
function operate() {
  if (b === '') {
    return;
  }

  a = Number(a);
  b = Number(b);

  if (operator === '+') {
    add(a, b);
    displayDiv.textContent = b;
    displayDivSmall.textContent = `${a} ${operator} ${b} =`;
  } else if (operator === '-') {
    subtract(a, b);
    displayDiv.textContent = b;
    displayDivSmall.textContent = `${a} ${operator} ${b} =`;
  } else if (operator === '*') {
    multiply(a, b);
    displayDiv.textContent = b;
    displayDivSmall.textContent = `${a} ${operator} ${b} =`;
  } else if (operator === '/') {
    divide(a, b);
    displayDiv.textContent = b;
    displayDivSmall.textContent = `${a} ${operator} ${b} =`;
  } else {
    displayDiv.textContent = a;
  }

  if (result !== '' && !isEqual) {
    if (result === Infinity) {
      divideZero();
    } else {
      a = result;
      result = '';
      operator = '';
    }
  }

  if (isEqual) {
    if (b === 0 && operator === '/') {
      divideZero();
    } else {
      displayDiv.textContent = result;
      displayDivSmall.textContent = `${a} ${operator} ${b} =`;
      isEqual = false;
      a = result;
      b = '';
      result = '';
    }
  }
}
