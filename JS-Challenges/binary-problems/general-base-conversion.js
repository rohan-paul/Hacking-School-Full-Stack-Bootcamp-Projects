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

/* A> The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

B> Number.prototype.toString() -
Syntax  >> numObj.toString([radix])

radix is Optional, which is an integer in the range 2 through 36 specifying the base to use for representing numeric values.

Return value - A string representing the specified Number object.
*/

// Decimal to binary
ConvertAnyBase.dec2bin = num => {
  return ConvertAnyBase(num).from(10).to(2);
};

console.log(ConvertAnyBase.dec2bin(37));

//Binary to decimal
ConvertAnyBase.bin2dec = num => {
  return ConvertAnyBase(num).from(2).to(10)
}

console.log(ConvertAnyBase.bin2dec(100101));