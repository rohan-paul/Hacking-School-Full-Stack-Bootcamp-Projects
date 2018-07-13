/*  Theory - For positive decimal numbers, when converted to binary, the leftmost bit is 0 and for negative decimal numbers the leftmost bit is 1. The number zero has only one representation (in contrary to one’s complement).

Stupid way to represent the sign in the binary number - because its not actually representing the negative binary number.

The toString() function basically takes the decimal, converts it to binary and adds a "-" sign. Because, as clearly stated in docs -

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString#Description

If the numObj is negative, the sign is preserved. This is the case even if the radix is 2; the string returned is the positive binary representation of the numObj preceded by a - sign, not the two's complement of the numObj.

 */
  convertNegativeDec2Binary_Wrong = (decimalNum) => decimalNum.toString(2);

  console.log(convertNegativeDec2Binary_Wrong(-5));

  // Alternative - 2 - same as above
  signedBinary_2 = decimalNum => {

    let binary = decimalNum.toString(2);

    return ((binary.substr(0,1) === '1' ? '-':'+')) + binary;
  }

  // CORRECT WAY TO CONVERT TO

convertNegativeDec2Binary = n => (n >>> 0).toString(2)

console.log(convertNegativeDec2Binary(-5)); // => 11111111111111111111111111111011

// Check correctness of result from - https://prozessorsimulation.klickagent.ch/?converter=true

/* EXPLANATION - https://stackoverflow.com/questions/16155592/negative-numbers-to-binary-string-in-javascript

-5 >>> 0 (right logical shift) coerces its arguments to unsigned integers, which is why I get the 32-bit two's complement representation of -5.

A zero fill right shift converts it's operand to a 32 signed bit integer in two complements format.
*/

/* WHAT IS 2's COMPLEMENT

A> http://speakingjs.com/es5/ch11.html

The twos’ complement -x of a number x is the ones’ complement plus one.

B>
*/