const operatorBtns = document.querySelectorAll('.operators');
const numberBtns = document.querySelectorAll('.numbers');
const equalsBtn = document.querySelector('.equal');
const removeBtn = document.querySelector('.remove');
const displayDiv = document.querySelector('.display');
const displayDivSmall = document.querySelector('.displaySmall');
let a = '';
let b = '';
let operator = '';
let result = '';
let isEqual = false;


numberBtns.forEach((button) =>
  button.addEventListener('click', assignNumber)
);

operatorBtns.forEach((button) =>
  button.addEventListener('click', assignOperator)
);

equalsBtn.addEventListener('click', () => {
  isEqual = true;
  operate();
});
removeBtn.addEventListener('click', reset);


// store user selected numbers
function assignNumber(e) {
  if (operator !== '') { 
    b += e.target.textContent; 
    displayDiv.textContent = b; 
    } else { 
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
    operator = '/';
    b = '';
    displayDivSmall.textContent = `${a} ${operator}`;
    displayDiv.textContent = a;
  } 
  
}


// clear calc
function reset() {
  a = ''; 
  b = '';
  result = '';
  operator = '';
  isEqual = false;
  displayDiv.textContent = '';
  displayDivSmall.textContent = '';
}


// math functions
function add(a, b) {
  return result = a + b;
}

function subtract(a, b) {
  return result = a - b;
}

function multiply(a, b) {
  return result = a * b;
}

function divide(a, b) {
  return result = a / b;
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
      a = result;
      result = '';
      operator = '';
    }

    if (isEqual) {
      displayDiv.textContent = result;
      displayDivSmall.textContent = `${a} ${operator} ${b} =`;
      isEqual = false;
    }
}

