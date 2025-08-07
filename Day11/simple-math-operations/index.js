const addTwoNumbers = (a, b) => {
  return a + b;
};

const subtractTwoNumbers = (a, b) => {
  return a - b;
};

const multiplyTwoNumbers = (a, b) => {
  return a * b;
};

const divideTwoNumbers = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

const result = {
    addition: addTwoNumbers(5, 3),
    subtraction: subtractTwoNumbers(5, 3),
    multiplication: multiplyTwoNumbers(5, 3),
    division: divideTwoNumbers(5, 3)
};

console.log("Results of simple math operations:", result);