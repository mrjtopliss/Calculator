const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons");
const operButtons = document.querySelectorAll(".oper-buttons");
const decimal = document.getElementById(".");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
let displayNum = "";
let firstNum = "";
let operator = "";
let result;
let calculated = false;

function round(num) {
  if (num.toString().indexOf(".") !== -1) {
    if (num.toString().split(".")[1].length > 5) {
      return num.toFixed(5);
    }
  }
  return roundBigNumber(num);
}

function roundBigNumber(num) {
  if (num > 100000) {
    return Number.parseFloat(num).toExponential();
  }
  return num;
}

// scientific notation add here .parseFloat(num).toExponential();

// Display

function displayFunc(e) {
  if (displayNum === "0" && calculated === true) {
    calculated = false;
    firstNum = "";
    displayNum = e;
  } else if (displayNum === "0" && calculated === false) {
    displayNum = e;
  } else {
    displayNum += e;
  }
  display.textContent = displayNum;
}

// Buttons

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    let target = e.target.id;

    if (displayNum.length < 13) {
      displayFunc(target);
    }
  });
}

// Operators

for (i = 0; i < operButtons.length; i++) {
  operButtons[i].addEventListener("click", (e) => {
    let target = e.target.id;

    if (firstNum === "") {
      operator = target;
      firstNum = displayNum;
    } else if (firstNum !== "" && calculated === false) {
      operate(operator, firstNum, displayNum);
      display.textContent = result;
      firstNum = result;
      operator = target;
    } else if (calculated === true) {
      operator = target;

      calculated = false;
    } else {
      console.log("error");
    }

    displayNum = "0";
  });
}

// Decimal

decimal.addEventListener("click", (e) => {
  const target = e.target.id;

  if (displayNum === "0") {
    displayNum += target;
    display.textContent = displayNum;
  } else if (displayNum.indexOf(target) < 0) {
    displayFunc(target);
  }
});

// Calculate

equals.addEventListener("click", (e) => {
  if (calculated === false && operator !== "") {
    operate(operator, firstNum, displayNum);
    display.textContent = result;
    firstNum = result;
    displayNum = "0";
    calculated = true;
  }
});

// Clear

clear.addEventListener("click", (e) => {
  displayNum = "0";
  firstNum = "";
  operator = "";
  result = "";
  calculated = false;
  displayFunc(displayNum);
});

// Keyboard Support
