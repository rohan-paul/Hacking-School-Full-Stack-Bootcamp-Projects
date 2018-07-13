// Beautiful exaple of returning one function inside another function (or nesting one function inside another) and calling the nested function with dot notation

ConvertAnyBase = (num) => {
  return {
    from : baseFrom => {
      return {
        to : baseTo => {
          return parseInt(num, baseFrom).toString(baseTo)
        }
      }
    }
  }
}

/* A> The parseInt() - Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

Syntax - parseInt(string, radix);

string is the value to parse. If the string argument is not a string, then it is converted to a string (using the ToString abstract operation). Leading whitespace in the string argument is ignored.
radix - is an integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the above mentioned string.
Return value
An integer number parsed from the given string. If the first character cannot be converted to a number, NaN is returned.



B> Number.prototype.toString() - This method returns a string representing the specified object. The toString() method parses its first argument, and attempts to return a string representation in the specified radix (base).

Syntax  >> numObj.toString([radix])

radix is Optional, which is an integer in the range 2 through 36 specifying the base to use for representing numeric values.

Return value - A string representing the specified Number object.
*/

// Decimal to binary
ConvertAnyBase.dec2bin = num => ConvertAnyBase(num).from(10).to(2);

// console.log(ConvertAnyBase.dec2bin(37)); // 100101

//Binary to decimal
ConvertAnyBase.bin2dec = num => {
  return ConvertAnyBase(num).from(2).to(10)
}

// console.log(ConvertAnyBase.bin2dec(100101)); // 37

// Decimal to Hexadecimal
ConvertAnyBase.dec2hex = num => {
  return ConvertAnyBase(num).from(10).to(16)
}

// console.log(ConvertAnyBase.dec2hex('2')); // '2a'


//***********ANOTHER COMPACT VERSION****************** */

const Convert2 = {
  decimalToBinary : num => parseInt(num, 10).toString(2),
  binaryToDecimal : num => parseInt(num, 2).toString(10)
}

console.log(Convert2.decimalToBinary(37));
console.log(Convert2.binaryToDecimal(100101));