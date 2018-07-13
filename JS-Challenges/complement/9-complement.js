/* https://www.geeksforgeeks.org/9s-complement-decimal-number/

9’s complement of a decimal number is the subtraction of it’s each digits from 9. 9’s complement is used to subtract a number from another number using addition process. Look at the above link to see the example.

Given a decimal number n, find 9’s complement of the number.

Input : 25
Output : 9's complement is : 74

Input : 345.45
Output : 9's complement is : 654.54
********************************************************************

PROBLEM STATEMENT AT TECHOLUTION - write a program to find the sum of 9's complement of each digit of the given input.

Example; input = 104
output = 22
*/

nineComplementSum = num => {

  let numStrArr = num.toString().split('');

  let nineComplementNum = [];

  for (let i in numStrArr) {
    nineComplementNum.push(9 - parseInt(numStrArr[i]) );
  }
  // note, the for...in syntax will take the incex value of 0, 1, 2... for 'i'

  return nineComplementNum.reduce((accum, currentItem) => {
    return accum + currentItem;
  }, 0)
}

console.log(nineComplementSum(104));

/* 1> Further read this - https://www.electrical4u.com/9s-complement-and-10s-complement/

Now coming to 10's complement, it is relatively easy to find out the 10's complement after finding out the 9,s complement of that number. We have to add 1 with the 9's complement of any number to obtain the desired 10's complements.

If 9's complement is 543 then 10's complement of this no 544

2> Further reading on general complemet calculation - https://forum.allaboutcircuits.com/threads/1s-and-2s-complements-of-binary-numbers.60499/

"complement (noun) - A number that when added to another number of the same sign yields zero if the significant digit farthest to the left is discarded "

*/

