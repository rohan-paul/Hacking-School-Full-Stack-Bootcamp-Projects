/* A complement of a number is defined as inversion (if the bit value = 0, change it to 1 and vice-versa) of all bits of the number starting from the leftmost bit that is set to 1. For example, if N = 5, N is 101 in binary. The complement of N is 010, which is 2 in decimal. Similarly if N = 50, then complement of N is 13 */

// PROBLEM STATEMENT - Write a function that takes decimal integer as input and outputs its binary complement

getBinaryComplementFromDecimal = num => {

  // First plain convert to binary
  let binary = parseInt(num, 10).toString(2);

  let complement = '';

  for (let i in binary) {
    complement = complement + ((binary[i] === "1") ? 0 : 1)
  }
  return complement;
}

console.log(getBinaryComplementFromDecimal(5));   // => 101

console.log(getBinaryComplementFromDecimal(37));   // => 011010