// Converting Decimal to Binary - Alternative-1
function decimalToBinary (decNum) {
    let bitsArray = [];
    for (var i = 0; i < 8; i++) {
        bitsArray.push(decNum % 2);
        decNum = (decNum - decNum % 2) / 2;   //e.g. if I start from the original no of 11, the next no that I have to divide with 2 is 5. And the way, I get it is - 11 - (11 % 2) / 2
    }
    return bitsArray.reverse().join('');
  }

// Converting Decimal to Binary - Alternative-1

function decimalToBinStr (decNum) {
return decNum.toString(2);
}

// Converting Binary to Decimal

function binToDec (bin) {
    return parseInt(bin, 2);
}


 /* Converting Decimal to Binary - Alternative-2
 http://sandbox.mc.edu/~bennet/cs110/convexamp/btod.html

We simply add up the place values of each "1" digit in the binary number IGNORING "0" values.
100101 = 37:

Exponents	    2^5		2^4		2^3		2^2		2^1		2^0
Place Values	32		16		8		4		2		1
Bits	        1		0		0		1		0		1
Value	        32	 	 	 	 	+	4	 	 	+	1	=	37 (final decimal value )

A> For calculating the power to be raised for the 1-bit's position - basically, I have to start iterating the array from from reverse, exact same formulae for reversing an array (i.e. assigning an index of zero for the last index position)
A> The most-significant-bit position (MSB) (i.e. the left-most position) of the original array will get the maximum exponent number of 2. And the next position will get 1 less and so on.

B> So for assigning an exponent of zero, to the last element of the original array - [bin.length - (i--) - 1] i.e.

[bin.length - (bin.length - 1) - 1] which is zero.

(note that the expression bin.length remains constant throughout the program, as I am NOT modifying the original array ever. But the variable "i" gets decremented with each loop, and thats why the exponent will increase from zero for right-most number to (array.length - 1) left-most MSB position)

B> So, for the second loop > [bin.length - (bin.length - 2) - 1] which is 1.

C> Finally, for exponent of the MSB >> [bin.length - (bin.length - n) - 1] >> "n" being the (array.length - 1) i.e. the last index value of the array starting with index=0. Which is what the exponent of the MSB should be.
*/

function binToDecimal (bin) {
    let decimal = 0;
    let i = bin.length;
    while (i--) {
        if(bin[i] == '1') {
            decimal += Math.pow(2, (bin.length - i - 1));
        };
    }
    return decimal;
}

// Binary to decimal using reduce()
function binToDecimal (bin) {
    // split and reverse, as I need to assign the highest exponent (bin.length -1) to the first element of the given binary number.
    let reversed = bin.split('').reverse();
    return reversed.reduce(function(accumulator, element, exponent) {
        return ((element === '1') ? (accumulator + Math.pow(2, exponent)) : accumulator);
        }, 0);
}

console.log(binToDecimal("100101"));

function signedBinary (decimalNum) {
    // let binary = decimalNum.toString(2);
    return decimalNum.toString(2);
    // return ((binary.substr(0,1) === '1' ? '-':'+')) + binary;
}

console.log(signedBinary(-8));