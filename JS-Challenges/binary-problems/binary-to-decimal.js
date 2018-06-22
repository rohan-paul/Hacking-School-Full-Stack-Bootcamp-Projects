
// Converting Binary to Decimal
function binToDec (bin) {
  return parseInt(bin, 2);
}


/* Converting Decimal to Binary - Alternative-2
http://sandbox.mc.edu/~bennet/cs110/convexamp/btod.html

We simply add up the place values of each "1" digit in the binary number IGNORING "0" values.
100101 = 37:

Exponents	    2^5		2^4		2^3		2^2		2^1		2^0
Place Values	32		16		8	  	4 		2 		1
Bits	        1		  0 		0		  1	  	0 		1
Value	        32	 	 	 	 	    +	4   	 	 	+	1	=	37 (final decimal value )

A> For calculating the power to be raised for the 1-bit's position - basically, I have to start iterating the array from from reverse, exact same formulae for reversing an array (i.e. assigning an index of zero for the last index position)

B> The most-significant-bit position (MSB) (i.e. the left-most position) of the original array will get the maximum exponent number of 2. And the next position will get 1 less and so on.

C> So for assigning an exponent of zero, to the last element of the original array I calculate the exponent as >>

( bin.length -1 - i-- ) i.e.

( bin.length - 1 - (bin.length - 1 ) )  which is zero.

(note that the expression bin.length remains constant throughout the program, as I am NOT modifying the original array ever. But the variable "i" gets decremented with each loop, and thats why the exponent get incremented from zero for right-most number to (array.length - 1) for the left-most MSB position)

D> So, for the second loop > exponent is >> (bin.length - (bin.length - 2) - 1) which is 1.

C> Finally, for exponent of the MSB >> ( bin.length - (bin.length - n) - 1 ) >>

"n" being the (array.length) - because the value of n was 1 for the right-most bit, so after incrementing by 1 through each loop, for the MSB, its value should be n

*/

function binToDecimal (bin) {
  let decimal = 0;
  let i = bin.length;
  while (i--) {
      if(bin[i] == '1') {
          decimal += Math.pow(2, (bin.length - 1 - i));
      };
  }
  return decimal;
}

// console.log(binToDecimal("100101"));

// Binary to decimal using reduce()

function binToDecimal (bin) {

  // split and reverse, as I need to assign the highest exponent (bin.length -1) to the first element of the given binary number.

  let reversed = bin.split('').reverse();

  // In the below, the 'exponent' in the argument to reduce() is just the index position of the array

  return reversed.reduce((accumulator, element, exponent) => {
      return ((element === '1') ? (accumulator + Math.pow(2, exponent)) : accumulator);
      }, 0);
}


console.log(binToDecimal("100101"));

