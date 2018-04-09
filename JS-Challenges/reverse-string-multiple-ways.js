/* 1st Approach -
split() method splits a String object into an array of string by separating the string into sub strings.
reverse() method reverses an array in place.
join() method joins all elements of an array into a string.*/
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("paul"));

