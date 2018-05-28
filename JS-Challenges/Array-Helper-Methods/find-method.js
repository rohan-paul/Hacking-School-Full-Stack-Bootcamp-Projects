// Examaple to find negaive number
function findNegativeNum (elem) {
	return elem < 0;
}

let myArr = [1, 20, false, -2];

// find method returns first negative number found
// console.log(myArr.find(findNegativeNum));  // -2

// findIndex method returns index of first negative number located
// console.log(myArr.findIndex(findNegativeNum)); // 3

// example function to find non-numeric array values
function findNonNum(elem) {
	return typeof elem !== 'number'	;
}

let myArr1 = [2, 27, 33.45, 'apple', 'yes', 0, 3.14];

// find method returns value of first non-numeric element
// console.log(myArr1.find(findNonNum));
// findIndex returns location of first non-numeric element
// console.log(myArr1.findIndex(findNonNum));

// another example array to search for non-numeric values
let myArr3 = [1, 2, 3, 4.4];

// console.log(myArr3.find(findNonNum)); // returns undefined
// console.log(myArr3.findIndex(findNonNum)); // returns -1


// Other example - traverses an array and inserts non-duplicate elements into a new array. That is, if an element is duplicated, then only insert that element once into the final newArray

function findNonDuplicates (array) {
	let models = [];
	for(var i = 0; i < array.length; i++) {
    if(array.indexOf(array[i]) === i) {
        models.push(array[i]);
   		 }
	}
	return models;
}

let arr = [1, 2, 3, 4.4, 2];
// console.log(findNonDuplicates((arr)));

// using filter
function findNonDuplicatesFilter (array) {
	return array.filter((elem, index, arr) => {
		return array.indexOf(elem) === index;
	})
}

console.log(findNonDuplicatesFilter(arr));