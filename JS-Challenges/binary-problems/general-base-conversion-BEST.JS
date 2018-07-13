
//******************COMPACT VERSION - MY FAVORITE****************** */

// Below I am returning the second nested function with argument 'num' from the first outer function with argument (baseFrom, baseTo)

const Convert = (baseFrom, baseTo) => num => {
  return parseInt(num, baseFrom).toString(baseTo);
}

const decimal2Bin = Convert(10, 2);
const binary2Dec = Convert(2, 10)
const bin2hex = Convert(2, 16)
const hex2bin = Convert(16, 2)
const hex2dec = Convert(16, 10)
const dec2hex = Convert(10, 16)
const dec2oct = Convert(10, 8)
const oct2dec = Convert(8, 10)

console.log(decimal2Bin(37));  // => 100101

console.log(binary2Dec(100101));  // => 37

console.log(bin2hex(100101));  // => 25   and decimal will be 37

console.log(hex2bin(25));  // => 100101

console.log(hex2dec(25));   // => 37

console.log(dec2hex(37));  // 25

console.log(oct2dec(777));  // 511

console.log(dec2oct(511));  // 777