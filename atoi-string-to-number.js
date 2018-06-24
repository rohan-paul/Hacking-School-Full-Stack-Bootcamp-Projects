/* Convert a string to an integer in C, JavaScript, and Ruby

Some Theory - A> The number system ranges from 48 to 59 in chartCodeAt() method
console.log("0".charCodeAt("0")); // 48
console.log("9".charCodeAt("0")); // 57

B> JavaScript's highest integer value that a number can go to without losing precision? - he max safe integer is 231-1, or 2147483647.

https://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin

*/

// Crude / dirty verion of atoi

atoi_crude = str => {

  let finalInteger = parseInt(str);

  if (finalInteger > 2147483647 ) {
    finalInteger = 2147483647
  } else if ( finalInteger < -2147483648) {
    finalInteger = - 2147483648
  }

  return isNaN(finalInteger) ? 0 : finalInteger;
}