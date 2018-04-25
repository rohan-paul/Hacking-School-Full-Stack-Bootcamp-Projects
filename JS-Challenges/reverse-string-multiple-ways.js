/* 1st Approach -
split() method splits a String object into an array of string by separating the string into sub strings.
reverse() method reverses an array in place.
join() method joins all elements of an array into a string.*/
function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("hello"));

/*2-nd Approach - Using Recursion.
A> Per the standard mechanism of recursion, for the single line of code, where I am calling the same function, I will not have a single code to execute, but several nested calls that will stack up with each call. And the end of that line's execution, it will just return the top most nested call in the stack.
B> With each recursive call the stack will build up as below..

recursionStringReverse('hello')
(recursionStringReverse('ello') + 'h')
((recursionStringReverse('llo') + 'e') + 'h')
(((recursionStringReverse('lo') + 'l') + 'e') + 'h')
((((recursionStringReverse('o') + 'l') + 'l' ) + 'e') + 'h')
(((('o') + 'l') + 'l' ) + 'e') + 'h')

That's it, terminal case reached and the most highly nested call returns immediately, which is the last line above
*/
function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1) + str.charAt(0));
  }
}

//Alternative-3-Using temporary variable
/* The substring() method extracts the characters in a string between "start" and "end", not including "end" itself. Start is position (i.e. index number) where to start the extraction. First character is at index 0 */

function reverseStr3(str) {
  let i = str.length;
  let temp = '';
  while (i > 0) {
    temp += str.substring(i-1, i)
    i--;
  }
  return temp;
}
// console.log(reverseStr3("hello"));

//Alternative-4 - Simply pushing the characters from the last position. So, I have to start from index position (str.length -1) i.e. the last index, and after all iteration reach to the first position i.e. index-no 0
function reverseString4 (str) {
  let temp = [];
  for (var i = 1, len = str.length; i <= len; i++ ) {
    temp.push(str.charAt(len - i));
  }
  return temp.join('');
}

// console.log(reverseString4("hello"));


/* Uses swap method to reverse; need to traverse only half of the array. Effective for long string.
A> With each iteration, I am taking the the upper half’s value (calculated by deducting the current position by the string length), which is then temporary stored in a temp variable.
B> Then swap that value with the lower half’s value. So, for the fist iteration, I will replace, the last element with the first element of the array.
C> In the next iteration, I will swap the second last upper half element, with second last lower-half element.
D> So, we only need to traverse half of the array, to swap all the lower and upper half element.
*/
function reverseStringHalfIndex(str) {
  let strArr = str.split('');
  let len = strArr.length;
  let halfIndex = Math.floor(len / 2) - 1;
  let tmp = [];

  for (var i = 0; i <= halfIndex; i++) {
    tmp = strArr[len - i - 1];
    strArr[len - i - 1] = strArr[i]; // So for the first iteration I am doing str[len - 1] = str[0]
    strArr[i] = tmp;
  }
  return strArr.join('');
}

// console.log(reverseStringHalfIndex("hello"));
