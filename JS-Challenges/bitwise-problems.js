/* Problems statement - Write a function to check validity of the below identity ( x<<y = x*(2^y) )for left shifting of bits. The function should return true/false.
For example for the number 6 if I have to left-shift 2 bits, the following algebra will hold true.  (6<<i = 6*2^i) and Deriving the General Formula.
 */

 function isLeftShift (num, shiftNum) {
     if ( (num * (2 ** shiftNum)) == ( num << shiftNum)) {
         return true;
     } else {
         return false;
     }
    }
    console.log(isLeftShift(6, 5));

/* Problems statement - Write a function to check validity of the below identity ( x >> y = x/(2^y) ) for right shifting of bits. The function should return true/false.
For example for the number 6 if I have to right-shift 2 bits, the following algebra will hold true.  (6 >> i = 6 / 2^i) and Deriving the General Formula.
 */
function isRightShift (num, shiftNum) {
    if ( Math.floor((num / (2 ** shiftNum))) == ( num >> shiftNum)) {
        return true;
    } else {
        return false;
    }
    }

console.log(isRightShift(6, 2));
// console.log((3 / (2 ** 1)));
// console.log(3 >> 1);

