/* A complement of a number is defined as inversion (if the bit value = 0, change it to 1 and vice-versa) of all bits of the number starting from the leftmost bit that is set to 1. For example, if N = 5, N is 101 in binary. The complement of N is 010, which is 2 in decimal. Similarly if N = 50, then complement of N is 13 */

// PROBLEM STATEMENT - Write a function that takes decimal integer as input and outputs its binary complement

getBinaryComplementFromDecimal = num => {

  // First plain convert to binary
  let binary = parseInt(num, 10).toString(2);
  console.log("Then binary no is : " + binary);

  let complement = '';

  for (let i in binary) {
  	// console.log(i);
    complement = complement + ((binary[i] === "1") ? 0 : 1)
  }
  return complement;
}

console.log(getBinaryComplementFromDecimal(5));   // => 101

console.log(getBinaryComplementFromDecimal(37));   // => 011010

/*WARNING AND GREAT POINT - Here, I can NOT use for...of synatax - because, with for...of 'i' will NOT take the index value, instead it will be the actuala item value of that position, which will be eithher 0 or 1. So, binary[i] will NEVER PROGRESS BEYOND THE FIRST 2 INDEX POSITIONS IN THE STRING ( binary[0] or binary[i])

So, in the above, if I want to use for...of syntax, inside the loop I have to do 

complement = complement + ((i === "1") ? 0 : 1)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of


Difference between for...of and for...in
Both for...in and for...of statements iterate over something. The main difference between them is in what they iterate over.

The for...in statement iterates over the enumerable properties of an object, in an arbitrary order.

The for...of statement iterates over data that iterable object defines to be iterated over.



*/