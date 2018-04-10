// Find power of a number without using native JS function
function power (base, exponent) {
  var result = 1;
  for(var i=1; i<=exponent; i++) {
    result = result * base;
  }
  return result;
}
// console.log(power(2,3));

// Bitwise left shift operator can be a replacement for Math.pow() when dealing with bases of 2.
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

// Check if a number is any power of 2
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

/* Notes - Keep dividing the number by two, i.e, do n = n/2 iteratively until n becomes 1. In any iteration, if n%2 becomes non-zero and n is not 1 then n is not a power of 2. If n becomes 1 then it is a power of 2. */

// reversing an array using a temporary var
var reverseArray = function (arr) {
  var reverse = [];
  for (i = arr.length; i >= 0; i--) {
    reverse.push(arr[i])
  }
  return reverse;
};

// reversing an array without using a temporary var
/* In below, the map() method creates a new array with the results of calling a provided function on every element in the calling array.
A> So, in the callback function, I am just pulling the last element of the given original array, and returning it first.
 (and the argument index is the index of the current element being processed, ie. it will start form index=0 of the given original array).
B> Then for the second loop, index will be 1, i.e. I am pulling the element (arr.length - 1 - 1) i.e. the second last element, and returning it to be placed as the second element of the new array to be created.
C> And this way, for the last loop, I will be pulling arr[(arr.((length -1)-(length-1)))] element, i.e. the arr[0] element of the original array, and place it to be the last
*/
var reverseArray = function(arr) {
  return arr.map(function(item, index) {
    return arr[arr.length-1-index];
  });
};
// ES6 version
function reverseArray (arr) {
  return arr.map((item, index) => arr[arr.length-1-index]);
}
console.log(reverseArray([2, 3, 4]));