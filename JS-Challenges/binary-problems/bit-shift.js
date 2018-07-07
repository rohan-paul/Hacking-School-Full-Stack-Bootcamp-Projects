/* THEORY OF BIT SHIFT - A bit shift moves each digit in a number's binary representation left or right. The last bit in the direction of the shift is lost, and a 0 bit is inserted on the other end.

  0010 << 1  →  0100
  1011 >> 1  →  0101

Bit shifts take number of times to shift as the right argument:

  1010110 << 2  →  1011000
  1011010 >> 3  →  0001011

A single left shift multiplies a binary number by 2:

Two left shifts multiplies by 4. Three left shifts multiplies by 8.

And similarly, shifting right divides by 2, throwing out any remainders.

*/

/* Problems statement - Write a function to check validity of the below identity

( x << y = x * ( 2 ^ y) ) for left shifting of y bits. i.e. a single left shift is multiplying the number by 2 ^ 1

The function should return true/false.
For example for the number 6 if I have to left-shift 2 bits, the following algebra will hold true.

(6 << i = 6 * 2 ^ 2) and Deriving the General Formula.
 */

 function isLeftShift (num, shiftNum) {
     if ( (num * (2 ** shiftNum)) === ( num << shiftNum)) {
         return true;
     } else {
         return false;
     }
    }
    console.log(isLeftShift(6, 5));

/* Problems statement - Write a function to check validity of the below identity

 ( x >> y = x/(2^y) ) 

for right shifting of bits. Meaning if I want to divide x by 2 I just do a single right shift x >> 1

The function should return true/false.
For example for the number 6 if I have to right-shift 2 bits, the following algebra will hold true.  (6 >> i = 6 / 2^i) and Deriving the General Formula.
 */
function isRightShift (num, shiftNum) {
    if ( Math.floor((num / (2 ** shiftNum))) === ( num >> shiftNum)) {
        return true;
    } else {
        return false;
    }
    }

console.log(isRightShift(6, 2));
// console.log((3 / (2 ** 1)));
// console.log(3 >> 1);


// Bitwise left shift operator can be a replacement for Math.pow() when dealing ONLY with bases of 2.
// This is great being a constant time solution.
function powerBitWiseBaseTwo (exponent) {
    return 1 << exponent;
  }
  // console.log(powerBitWiseBaseTwo(8));

  /* Notes on bit shifting -
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
