/* https://www.geeksforgeeks.org/9s-complement-decimal-number/

9’s complement of a decimal number is the subtraction of it’s each digits from 9. Like 1’s complement, 9’s complement is used to subtract a number using addition.

Given a decimal number n, find 9’s complement of the number.

Input : 25
Output : 9's complement is : 74

Input : 345.45
Output : 9's complement is : 654.54
********************************************************************

PROBLEM STATEMENT AT TECHOLUTION - write a program to find the sum of 9s complement of each digit of the given input.

Example; input = 104
output = 22
*/

nineComplementSum = num => {

  let numStrArr = num.toString().split('');

  let nineComplementNum = [];

  for (let i in numStrArr) {
    nineComplementNum.push(9 - parseInt(numStrArr[i]) );
  }

  return nineComplementNum.reduce((accum, currentItem) => {
    return accum + currentItem;
  }, 0)
}

console.log(nineComplementSum(104));