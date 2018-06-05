// Problem-1 - Find the n-th fibonacci number
/* The Rule is . In general, fibonnaci(n) = fibonnaci(n - 2) + fibonnaci(n - 1). By definition, the first two numbers in the Fibonacci sequence are either 1 and 1, or 0 and 1,* depending on the chosen starting point of the sequence.
In the below solution I am assuming, the series starts with zero. That is, fibonacci(0) should return 0, not 1. If however, I wanted the series to start from 1, I would put the first condtion as if (n < 2) { return 1 }
So the final series will look like below.

n =	    0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	...
xn =	0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	...

f(7) = F(6) + F(5);

in turn, F(6) = F(5) + F(4)

F(5) = F(4) + F(3)... it goes on until n<2 and F(1) returns 1

F(4) = F(3) + F(2)

F(3) = F(2) + F(1)

F(2) = F(1) + F (0) = 1 + 0 = 1  // Fibonacci (1) now hits the base case, returning 1 and "unwinds"

So, F(3) = 1 + 1 = 2

F(4) = 2 + 1 = 3

F(5) = 3 + 2 = 5

F(6) = 5 + 3 = 8

F(7) = 8 + 5 = 13
 */

function fibonacci (n) {
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci (n-2);
    }
}

// console.log(fibonacci(7));

/* In the above function, in the 5th line the function is transferring execution to itself by passing parameters that will result in a value.
To ensure that a recursive function doesn't turn into an endless loop, there must be some sort of condition that doesn't call itself. */

/* Problem-2 On Fibonacci- Find if given element is in the fibonacci series series or not
Given a number ‘n’, how to check if n is a Fibonacci number. First few Fibonacci numbers are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 141, ..

Solution Approach -

https://www.geeksforgeeks.org/check-number-fibonacci-number/

A simple way is to generate Fibonacci numbers until the generated number is greater than or equal to ‘n’. Following is an interesting property about Fibonacci numbers that can also be used to check if a given number is Fibonacci or not.
A number is Fibonacci if and only if one or both of (5*n2 + 4) or (5*n2 – 4) is a perfect square (Source: Wiki). Following is a simple program based on this concept.
*/

function fibonacciIterative (num) {
    let a = 0, b = 1, f = 1;
    for (let i = 2; i <= num; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
}

// console.log(fibonacciIterative(5));

// Return the fibonacci iterative
function fibonacciIterativeAlt (num) {
    let [a, b] = [1, 0];

    while (--num > 0) {
        [a, b] = [a+b, a ]
    }
    return a;
}
// console.log(fibonacciIterativeAlt(5));
/* Explanation -  The two numbers a and b are initialized as 1 and 0, and in every iteration of the loop (counting backwards from n to 0), a becomes the sum of the two numbers and the lower number b becomes the previous value of the higher number a. When n reaches 0, the lower of the two numbers is returned and, it resolves to the nth number in the Fibonacci sequence. */

// print fibonacci series

var output = "0 1";

let fibonacciUptoNumber= 5, fibNum = 0, nextHigherNum = 1; sum=0;

for (let i = 2; i <= fibonacciUptoNumber; i++) {
  sum = fibNum + nextHigherNum;
  fibNum = nextHigherNum;
  nextHigherNum = sum;
  output += " " + sum;
}

// console.log(output);

function isPerfectSquare (num) {

    let squareRoot = Math.sqrt(num);
    return ((squareRoot * squareRoot) === num);
}

// Alternative to find perfect square. The logic is num % 1 will return 1 (i.e. true) only if the num is an integer but will return zero if the num is a decimal. And only a perfect-square number's square-root will be an integer. All other number's square-root will be a decimal value.

function isPerfectSquare_Alt(num) {
    return (Math.sqrt(num) % 1 === 0);
}

function isFibonacciNumber (num) {
    if ( (isPerfectSquare_Alt(5*(num*num) + 4)) || (isPerfectSquare_Alt(5*(num*num) - 4)) ) {
        return "The number " + num + " is a Fibonacci number"
    } else {
        return "The number " + num + " is NOT a Fibonacci number"
    }
}

// A utility function to check all fibonacci less than a given num
function printIfFibonacci (num) {
    for (let i = 0; i <= num; i++) {
        console.log(isFibonacciNumber(i));
    }
}

// printIfFibonacci(10);