// Coded to access object kyes and values in JS
// 
let obj = {
	"a": 1,
	"b": 2,
	"c": 3
}

console.log(obj.a);  // => 1

console.log(obj["a"]);  // => 1

// console.log(obj[a] === true); // => ReferenceError: a is not defined

console.log(obj.hasOwnProperty("a")); // => true

console.log(Object.keys(obj));  // => [ 'a', 'b', 'c' ]

console.log(Object.values(obj));  // => [ 1, 2, 3 ]


/* The above 'obj' will store as its key-value the unique elements of the array (as keys) and a boolean (true for each key). Meaning for any duplicate elements of the given arrray obj[hasOwnProperty] will return false.
  
  Note - Bothe object.key and object[key] accomplish the same thing, i.e. returns the value of that key
  However, object.key only works if the key name is hardwired ( I mean not happening dynamically since it cannot change at run-time). It also does not work when the key is a number instead of a string.

  In other words, object[key] is more versatile.

  One of the reasons we use object.key is because it is easier to type and it looks cooler.

  If the key is not yet known when we write the code, then we must use object[key] but be careful, sometimes we need to wrap the key in quotes:
  object["key"] like when the key is not a variable. */

  // Write a function to return the key from an object given a value
  findKeyFromValue = (obj, value) => {
  	return Object.keys(obj).find(key => obj[key] === value);
  }

  console.log(findKeyFromValue(obj, 2));  // => [ 1, 2, 3 ]