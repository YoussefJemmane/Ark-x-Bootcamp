const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
};

const combinator = (n, p) => {
  if (p > n || n < 0 || p < 0) return undefined;
  return factorial(n) / (factorial(p) * factorial(n - p));
};


function calculator(a, operator, b) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : undefined;
    case '%': return b !== 0 ? a % b : undefined;
    case 'c': return combinator(a, b);
    default: return undefined;
  }
}

console.log(calculator(5, 'c', 2));