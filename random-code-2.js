// print fibonacci series

var output = "0 1";

let fibonacciUptoNumber= 5, fibNum = 0, nextHigherNum = 1; sum=0;

for (let i = 2; i <= fibonacciUptoNumber; i++) {
  sum = fibNum + nextHigherNum;
  fibNum = nextHigherNum;
  nextHigherNum = sum;
  output += " " + sum;
}

console.log(output);