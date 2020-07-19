// Converting Decimal to Binary - Alternative-1
function decimalToBinary (decNum) {
    let bitsArray = [];
    for (var i = 0; i < 8; i++) {
        bitsArray.push(decNum % 2);
        decNum = (decNum - decNum % 2) / 2;
        //e.g. if I start from the original no of 11, the next no that I have to divide with 2 is 5. And the way, I get it is -> ( 11 - (11 % 2) ) / 2
    }
    return bitsArray.reverse().join('');
  }

// console.log(decimalToBinary(21));

// Converting Decimal to Binary - Alternative-2
function decimalToBinStr (decNum) {
return decNum.toString(2);
}

// Converting Decimal to Binary - Alternative-3 with recursion
function decToBinRecursive(num){
    if(num >= 1){
      return decToBinRecursive(Math.floor(num/2))+(num % 2);
    }
    return '';
  }

  /* Explanation of the recursive process
  decToBinRecursive(21)
  = decToBin(Math.floor(21 / 2)) + (21 % 2) = decToBin(10) + 1

  = decToBin(Math.floor(10/2)) + (10 % 2) + 1 = decToBin(5) + 0 + 1

  = decToBin(Math.floor(5/2)) + (5 % 2) + 0+ 1 = decToBin(2) + 1 + 0 + 1

  = decToBin(Math.floor(2/2)) + (2 % 2) +1 + 0+ 1 = decToBin(1) + 0 + 1 + 0 + 1

  = decToBin(Math.floor(1/2)) + (1 % 2) + 0 +1 + 0+ 1 = decToBin(1) + 1 + 0 + 1 + 0 + 1 // Here the abort-condition is reached as num < 1 and the loop stops
  */

  // console.log(decToBinRecursive(21)); // Will output 10101
