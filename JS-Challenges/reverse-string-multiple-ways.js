/* 1st Approach -
split() method splits a String object into an array of string by separating the string into sub strings.
reverse() method reverses an array in place.
join() method joins all elements of an array into a string.*/
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

/*2-nd Approach - Using Recursion.
A> Per the standard mechanism of recursion, for the single line of code, where I am calling the same function, I will not have a single code to execute, but several nested calls that will stack up with each call. And the end of that line's execution, it will just return the top most nested call in the stack.
B> With each recursive call the stack will build up as below..

recursionReverse('hello')
(recursionReverse('ello') + 'h')
((recursionReverse('llo') + 'e') + 'h')
(((recursionReverse('lo') + 'l') + 'e') + 'h')
((((recursionReverse('o') + 'l') + 'l' ) + 'e') + 'h')
(((('o') + 'l') + 'l' ) + 'e') + 'h')

That's it, terminal case reached and the most highly nested call returns immediately, which is the last line above
*/
function reverseRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseRecursive(str.substr(1) + str.charAt(0));
  }
}