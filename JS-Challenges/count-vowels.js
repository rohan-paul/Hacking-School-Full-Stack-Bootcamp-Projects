/* Find the count of Vowels in the given string using match method and regular expression in JS
*/

function countVowels (str) {
	const re = /(a|e|i|o|u)/g;

	let vowelCounter = 0;

	for (let i of str) {

		if (i.match(re)) {
			vowelCounter++;
		}		
	}
	return vowelCounter;
}

console.log(countVowels("Paul"));
