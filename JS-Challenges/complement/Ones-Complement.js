/* FIND ONE'S COMPLEMENT - https://www.geeksforgeeks.org/whats-difference-between-1s-complement-and-2s-complement/

1’s complement of a binary number is another binary number obtained by toggling all bits in it, i.e., transforming the 0 bit to 1 and the 1 bit to 0. (if the bit value = 0, change it to 1 and vice-versa) of all bits of the number starting from the leftmost bit that is set to 1. For example, if N = 5, N is 101 in binary. The complement of N is 010, which is 2 in decimal. Similarly if N = 50, then complement of N is 13 */

// PROBLEM STATEMENT - Write a function that takes decimal integer as input and outputs its binary complement. Or in other words, find One's complement

getBinaryComplementFromDecimal = num => {

  // First straight-forward convert to binary
  let binary = parseInt(num, 10).toString(2);
  console.log("The binary no is : " + binary);

  let complement = '';

  for (let i in binary) {
  	// console.log(i);
    complement = complement + ((binary[i] === "1") ? 0 : 1)
  }

  return complement;
}

console.log(getBinaryComplementFromDecimal(5));   // => 010

// console.log(getBinaryComplementFromDecimal(37));   // => 011010

/* If the above question asked for - Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

the just replace the return statement with the below

return parseInt(complement, 2);

*/


/* GREAT POINT - Here, I can NOT use for...of syntax - because, with for...of 'i' will NOT take the index value, instead it will be the actual item value of that position, which will be either 0 or 1. So, binary[i] will NEVER PROGRESS BEYOND THE FIRST 2 INDEX POSITIONS IN THE STRING ( binary[0] or binary[i])

So, in the above, if I want to use for...of syntax, inside the loop I have to do

complement = complement + ((i === "1") ? 0 : 1)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of


Difference between for...of and for...in
Both for...in and for...of statements iterate over something. The main difference between them is in what they iterate over.

The for...in statement iterates over the enumerable properties of an object, in an arbitrary order.

The for...of statement iterates over data that iterable object defines to be iterated over.
*/

/* 2’s Complement?

2’s complement of a binary number is 1 added to the 1’s complement of the binary number.
Examples:

Examples:

Let numbers be stored using 4 bits

1's complement of 7 (0111) is 8 (1000)
1's complement of 12 (1100) is 3 (0011)

So,

2's complement of 7 (0111) is 9 (1001)
2's complement of 12 (1100) is 4 (0100)

Theory http://disq.us/p/1raf82j

Basically, (r-1)'s complement of a number in radix 'r' = number obtained by subtracting every digit from (r-1) . r's complement = (r-1)'s complement + 1


*/