// Find power of a number without using native JS function
function power (base, exponent) {
  var result = 1;
  for(var i=1; i<=exponent; i++) {
    result = result * base;
  }
  return result;
}
// console.log(power(2,3));

// Bitwise left shift operator can be a replacement for Math.pow() when dealing ONLY with bases of 2.
// This is great being a constant time solution.
function powerBitWiseBaseTwo (exponent) {
  return 1 << exponent;
}
// console.log(powerBitWiseBaseTwo(8));

/* Notes on bit shiftting -
https://stackoverflow.com/questions/6385792/what-does-a-bitwise-shift-left-or-right-do-and-what-is-it-used-for
Left shift -
  You have a collection of bits, and you move some of them beyond their bounds:
1111 1110 << 2
1111 1000
it is filled from right with fresh zeros.

0001 1111 >> 3
0000 0011
filled from left.

Left bit shifting to multiply by any power of two and Right bit shifting to divide by any power of two. For example x = x * 2; can also be written as x<<1 or x = x*8 can be written as x<<3 (since 2 to the power of 3 is 8). Similarly x = x / 2; is x>>1 and so on.
*/

// Find square-root of a number without using native JS function
var squrt = function (num) {
  var sroot = 1;
  while (sroot < num) {
    if ( sroot * sroot == num) {
      return sroot;
    } else {
      sroot++
    }
  }
};
// console.log(squrt(25));

// Check if a number is any power of 2. Its the same logic as checking if a number is power of 4 (see my file ifPowerOfFour.js ).
/* Notes - Keep dividing the number by two, i.e, do n = n/2 iteratively until n becomes 1. In any iteration, if n%2 becomes non-zero and n is not 1 then n is not a power of 2. If n becomes 1 then it is a power of 2. */
 var isPowerOfTwo = function (num) {
	while ( num != 1) {
	  num = (num / 2);

	  if ( num % 2 != 0 && num != 1) {
	    return false;
    }
  };
   return true;
};
// console.log(isPowerOfTwo(12));
