/* Basic implementation of Symbol.iterator
Basically an iterator
has a function – next() – which allows you to output values step by step.
let array = [1, 2, 3];
let iterator = array[Symbol.iterator]();
console.log(iterator.next()); // prints {done: false, value: 1}
*/

let array = [1, 2, 3];

console.log(typeof(array));

console.log(Array.isArray(array));

console.log(typeof array[Symbol.iterator]);

// declare serial to be a Symbol
var serial = array[Symbol.iterator]();

console.log(serial);

console.log(typeof(serial));

console.log(serial.next());
console.log(serial.next());
console.log(serial.next());
console.log(serial.next());


// Implementing the next() function of Symbol.iterator with my own custom iteration. Its pretty much like a makeIterator function where I control how many next loop I can run printing the value and done with each iteration. Note in the below example although I have 3 elements in the array, but I am printing 11, 12, 13, 14

let array1 = [1, 2, 3];

array1[Symbol.iterator] = function() {
	let nextValue = 10;

	return {
		next: function() {
			nextValue++;
			return {
				done: nextValue > 15 ? true : false,
				value: nextValue
			}
		}
	}
}

for (let element of array1) {
	console.log(element);
}

// Now implement the same above makeIterator with objects instead of arrays
let person = {

	name: 'Max',
	hobbies: ['Sports', 'Cooking'],

	[Symbol.iterator]: function () {
		let i = 0;
		let hobbies = this.hobbies;

		return {
			next: function () {
				let value = hobbies[i];
				i++;
				return {
					done: i > hobbies.length ? true : false,
					value: value
				}
			}
		}
	}
}

for (let hobby of person) {
	console.log(hobby);
}

/* Few points on the above implementation

A> Note that the full person is an object, but I am only iterating over the 'hobbies' property.
B> And the part, [Symbol.iterator] is itself a property of person object.
C>
*/