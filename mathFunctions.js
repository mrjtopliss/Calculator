function add(a, b) {
  let num1 = Number(a);
  let num2 = Number(b);
  let answer = num1 + num2;
  result = round(answer);
}

function subtract(a, b) {
  let num1 = Number(a);
  let num2 = Number(b);
  let answer = num1 - num2;
  result = round(answer);
}

function multiply(a, b) {
  let num1 = Number(a);
  let num2 = Number(b);
  let answer = num1 * num2;
  result = round(answer);
}

function divide(a, b) {
  let num1 = Number(a);
  let num2 = Number(b);
  let answer = num1 / num2;
  result = round(answer);
}

function operate(operator, num1, num2) {
  if (operator === "+") {
    add(num1, num2);
  } else if (operator === "-") {
    subtract(num1, num2);
  } else if (operator === "x") {
    multiply(num1, num2);
  } else if (operator === "/") {
    divide(num1, num2);
  }
}
