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

console.log(combinator(5, 2)); 
