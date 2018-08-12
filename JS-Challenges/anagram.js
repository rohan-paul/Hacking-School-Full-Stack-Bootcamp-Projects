/*Check whether two strings are ‘ANAGRAM’ of each other or not? 
​An anagram of a string is another string that contains same characters, only the order of characters can be different. For example, “abcd” and “dabc” are anagram of each other.
*/

function isAnagram (s1, s2) {

	// replace all non-alphanumeric char with empty space
	let a = s1.replace(/[^\w]/, '').toLowerCase().split('').sort().join('');
	let b = s2.replace(/[^\w]/, '').toLowerCase().split('').sort().join('');

	console.log(a === b ? a + " and " + b + " are anagram" 
					    : a + " and " + b + " are not anagram" );
}

isAnagram('abc', 'cGa')

// single liner
isAnagram_1 = (s1, s2) => s1.replace(/[^\w]/, '').toLowerCase().split('').sort().join('') === s2.replace(/[^\w]/, '').toLowerCase().split('').sort().join('')

// console.log(isAnagram_1('abc', 'cBa'));

//withoug using buil-in methods

function isAnagram_alt2 (s1, s2) {

	if (s1 === s2) {
		return true;
	}

	if (s1.length !== s2.length) {
		return false;
	}

	let counter = {};

	for (let i = 0; i < s1.length; i++) {

		let charCount = s1.charCodeAt(i);

		// Assign this current character as the key to the key-value pair object variable counter. And the number of occurance of this char as the value.
		// If this character was found previously, i.e. it exists in the object counter then add 1 to its current value. And if it does not exist add 1 to its current value of zero
		counter[charCount] = (counter[charCount] || 0) + 1;
	}

	for (let j = 0; j < s2.length; j++) {

		let charCountj = s2.charCodeAt(j);

		if (!counter[charCountj]) {
			return false;
		}
		counter[charCountj]--
	}
	return true;

}

// console.log(isAnagram_alt2('abc', 'cGa'));