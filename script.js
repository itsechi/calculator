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

// store user selected numbers
function assignNumber(e) {
  if (operator !== '') {
    // if (b < 999999999999999999n)
    pointBtn.addEventListener('click', assignNumber);
    if (b.includes('.')) pointBtn.removeEventListener('click', assignNumber);
    b += e.target.textContent;
    displayDiv.textContent = b;
  } else {
    // if (a < 999999999999999999n)
    if (a.includes('.')) pointBtn.removeEventListener('click', assignNumber);
    a += e.target.textContent;
    displayDiv.textContent = a;
  }
}

// store user selected operators
function assignOperator(e) {
  operate();
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
  if (operator !== '' && result === '') {
    b = b.slice(0, -1);
    displayDiv.textContent = b;
  } else if (operator == '') {
    a = a.slice(0, -1);
    displayDiv.textContent = a;
  } else return;
}

// clear calc
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

// math functions
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
    if (b === 0) {
      divideZero();
    } else {
      displayDiv.textContent = result;
      displayDivSmall.textContent = `${a} ${operator} ${b} =`;
      isEqual = false;
    }
  }
}
