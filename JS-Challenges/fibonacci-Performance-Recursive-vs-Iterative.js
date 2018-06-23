function fibonacci_recursive (n) {
  if (n < 2) {
      return n;
  } else {
      return fibonacci_recursive(n - 1) + fibonacci_recursive(n-2);
  }
}

function fibonacciIterativeAlt (num) {
  let [a, b] = [0, 1];

  while (--num) {
      [a, b] = [b, b + a ]
  }
  return b;
}

console.time("fibonacci_recursive");
fibonacci_recursive(30);
console.timeEnd("fibonacci_recursive");

console.log("*******************************");

console.time("fibonacciIterativeAlt");
fibonacciIterativeAlt(30);
console.timeEnd("fibonacciIterativeAlt");

console.log("*******************************");
