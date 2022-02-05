// Let's start

let slider = document.getElementById("slider");
let length = document.getElementById("length");

let numberEl = document.getElementById("numberEl");
let symbolEl = document.getElementById("symbolEl");
let letterEl = document.getElementById("letterEl");
let upperCaseletterEl = document.getElementById("upperCaseletterEl");

console.log(upperCaseletterEl);

let sliderEl = document.getElementById("slider");



length.innerHTML = slider.value;

slider.oninput = function sliderChanges() {
  length.innerHTML = slider.value;
}

//List to do now

//JS

const numbers = '0123456789'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbols = '!@#$%^&*()_+';
let button = document.getElementById("button");
let clicked_pass = document.getElementById("myPassword");

//Get El

function getNumbers() {
  let newNumbers = numbers[Math.floor(Math.random()*numbers.length)];
  
  return newNumbers;
}



function getAlphabet() {
  let newAlphabet = lowerCase[Math.floor(Math.random()*lowerCase.length)];
  return newAlphabet;
}
function getUpperCaseAlphabet() {
  let upperCaseAlphabet = UpperCase[Math.floor(Math.random()*UpperCase.length)];
  return upperCaseAlphabet;
}

console.log(getUpperCaseAlphabet());
function getSymbol() {
  let newSymbols = symbols[Math.floor(Math.random()*symbols.length)];
  return newSymbols;
}

button.onclick= function generatePassword() {
  let length = sliderEl.value;
  let password = '';
  if(numberEl.checked) {
    password+=getNumbers();
  }
if(letterEl.checked) {
    password+=getAlphabet();
}

if(upperCaseletterEl.checked) {
  password+=getUpperCaseAlphabet();
}
if(symbolEl.checked) {
  password+=getSymbol();
}
  for (let i=password.length; i<length ; i++) {
    console.log(password)
    const x = allCombination()
    password += x; 
  }
  myPassword.innerHTML = password;
  console.log("Clicked")
}

function allCombination() {
  let xz = [];
  if(numberEl.checked) {
      xz.push(getNumbers());
    }
  if(letterEl.checked) {
      xz.push(getAlphabet());
  }
  if(upperCaseletterEl.checked) {
    xz.push(getUpperCaseAlphabet());
}
  if(symbolEl.checked) {
    xz.push(getSymbol());
  }
  if(xz.length === 0) {
    return ''
  }
  return xz[Math.floor(Math.random()*xz.length)];
}
allCombination();


