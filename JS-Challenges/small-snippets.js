// Find power of a number without using native JS function
function power(base, exponent) {
  var result = 1;

  for(var i=1; i<=exponent; i++) {
    result = result * base;
  }
  return result;
}

console.log(power(2,3));

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

console.log(squrt(25));

// Check if a number is any power of 2

/* var checkIfPowerOfTwo = function (num) {

	var base = 1;

	while ( num % 2 == 0) {
		if (Math.pow(base, 2) == num) {
			// code
			return true;
			base++;
		}
	} else {
		num /= 2;
	}
} */

// console.log(checkIfPowerOfTwo(25));

// reversing an array using a temporary var
var reverseArray = function (arr) {
  var reverse = [];
  for (i = arr.length; i >= 0; i--) {
    reverse.push(arr[i])
  }
  return reverse;
};

// reversing an array without using a temporary var
var reverseArray = function(arr) {
  return arr.map(arr.pop, arr);
};
console.log(reverseArray([2, 3, 4]))