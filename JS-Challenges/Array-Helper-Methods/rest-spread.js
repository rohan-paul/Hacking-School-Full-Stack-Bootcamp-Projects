/*Example -1 - Function Rest
Functions can use the rest parameter syntax to accept any number of arguments as an array.

Example

Display the array of passed arguments.*/

function printArguments (...theArguments) {
	console.log(theArguments);
}

printArguments('hi', 'this', 'is', 'paul');


// Example - 2 - spreading object

let spreadableObj = {
	key1: 'value1',
	key2: 'value2'
}

let newObj = {
	...spreadableObj,
	key3: 'value3'
}

console.log(newObj);

// Example - 3  - Spreading Array

//Combine two arrays.

const spreadableOne = [1, 2, 3, 4];
const spreadableTwo = [5, 6, 7, 8];

const combinedArr = [...spreadableOne, ...spreadableTwo]
console.log(combinedArr);

// Remove an array element without mutating the original array. From the below arrray remove 'salmon' and return the array

const animals = ['squirrel', 'bear', 'deer', 'salmon', 'rat'];

const newArr = [...animals.slice(0, 3), ...animals.slice(4)];

console.log(newArr);



