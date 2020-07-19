function factorial_Recursive(num) {
  return (num === 1 ? 1 : num * factorial_Recursive(num - 1));
}


function factorial_Iterative(num) {
  if (num < 0 ) {
      return 'undefined';
  }
  var fact = 1;

  for (var i = num; i > 0; i--) {
      fact *= i;
  }
  return fact;
}

console.time("fact_recursive");
factorial_Recursive(1000);
console.timeEnd("fact_recursive");

console.log("*******************************");

console.time("fact_Iterative");
factorial_Iterative(1000);
console.timeEnd("fact_Iterative");

console.log("*******************************");
