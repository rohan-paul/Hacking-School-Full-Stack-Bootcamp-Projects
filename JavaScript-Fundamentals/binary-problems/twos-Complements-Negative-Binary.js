/* A> Getting the two's complement is as simple as adding 1 to the one's complement

http://en.wikipedia.org/wiki/Signed_number_representations#Two.27s_complement

So, the steps will be -
Invert all the bits through the number - and thereby get the one's complement

Then Add one

A> http://speakingjs.com/es5/ch11.html

The twos’ complement -x of a number x is the ones’ complement plus one. Adding a number to its twos’ complement results in 0 (ignoring overflow beyond the most significant digit).

A> http://disq.us/p/1raf82j

Basically, (r-1)'s complement of a number in radix 'r' = number obtained by subtracting every digit from (r-1) . r's complement = (r-1)'s complement + 1

B> https://www.w3schools.com/js/js_bitwise.asp

JavaScript binary numbers are stored in two's complement format.

This means that a negative number is the bitwise NOT of the number plus 1:

C> https://stackoverflow.com/questions/12337360/javascript-tilde-twos-complement

The Tilde operator ~ is the Bitwise NOT operator (only inverts the bits of its operand).

~ is not the two's complement, it's the binary inversion operator.

For a positive number n,

~n + 1 = -n

*/

decimal2_twosComplement = (num, bitCount) => {

  let finalBinaryStr;

  // Helper function to return an array with specified length. But, the first argument 'str' will fill the last indexes. And all the rest of the indexes will be filled by the second argument 'fillingChar'. And then with slice() I will extract only the specified no of characters starting from end, which in my case will be 32

  fill_AndCropFromRightEnd = (str, fillingChar, len) => {
    return (Array(len).fill(fillingChar).join('') + str).slice(len * -1)
  }

  // If the given number is positive decimal, then just convert the decimal to binary and then pad with 0's for the last 32 bits. That is, starting from right-end crop the result upto 32 bits

  if (num >= 0) {

    let twosComp = num.toString(2);
    finalBinaryStr = fill_AndCropFromRightEnd(twosComp, '0', (bitCount || twosComp.length))

  } else {
    // Keep a note of this formulae
    finalBinaryStr = (Math.pow(2, bitCount) + num).toString(2);

    if (Number(finalBinaryStr) < 0) {
      return undefined
    }
  }
  return finalBinaryStr;

}

console.log(decimal2_twosComplement(5, 32));

/* EXPLANATION ON THE FORMULAE - finalBinaryStr = (Math.pow(2, bitCount) + num).toString(2);

A> https://stackoverflow.com/questions/15463491/how-to-represent-a-negative-number-with-a-fraction-in-2s-complement

With decimal number systems, each number position (or column) represents (reading a number from right to left): units (which is 10^0), tens (i.e. 10^1),hundreds (i.e. 10^2), etc.

With unsigned binary numbers, the base is 2, thus each position becomes (again, reading from right to left): 1 (i.e. 2^0) ,2 (i.e. 2^1), 4 (i.e. 2^2), etc.

For example

2^2 (4), 2^1 (2), 2^0 (1).
In signed twos-complement the most significant bit (MSB) becomes negative. Therefore it represent the number sign: '1' for a negative number and '0' for a positive number.

B>

*/