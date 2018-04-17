// Problem - Find the n-th fibonacci number
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

console.log(fibonacci(7));

/* In the above function, in the 5th line the function is transferring execution to itself by passing parameters that will result in a value.
To ensure that a recursive function doesn't turn into an endless loop, there must be some sort of condition that doesn't call itself. */

