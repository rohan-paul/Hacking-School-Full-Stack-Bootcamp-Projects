/* "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

Write a function that, given a sentence, along with the position of an opening parenthesis (10-th in this case), finds the corresponding closing parenthesis.

Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

let myStr = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

console.log(Array.from(myStr).indexOf("("));  // => 10
console.log(Array.from(myStr).lastIndexOf(")"));      // => 79

console.log(myStr.indexOf("("));  // => 10
console.log(myStr.lastIndexOf(")"));    // => 79

*/


/* Starting at our input opening parenthesis position (10 + 1 i.e 11-th in this case). As we iterate, we keep a count of how many additional "(" we find as openNestedParensCounter.

When we find a ")" we decrement the openNestedParensCounter. If we find a ")" and openNestedParens is 0, we know that ")" closes our initial "(", so we return its position. */

returnLastMatchingParen = ( str, firstIndex ) => {

  let openNestedParensCounter = 0;

  for ( let i = firstIndex + 1; i < str.length; i++ ) {

    if (str[i] === "(" ) {
      openNestedParensCounter += 1;
    } else if (str[i] === ")" ) {
      if (openNestedParensCounter === 0) {
        return i
      } else {
        openNestedParensCounter -= 1;
      }
    }
  }
  throw new Error('No closing parenthesis')
}


let myStr = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

console.log(returnLastMatchingParen(myStr, 10));

/* Complexity
O(n)O(n) time, where nn is the number of chars in the string. O(1)O(1) space. */