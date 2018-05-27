// Problem-1 Filter even numbers

let numberArray = [1,2,3,4,5,6,7,8,9,10];

let evenNumbers = [];

for (let i = 0; i < numberArray.length; i++) {
	if (numberArray[i] % 2 === 0) {
		evenNumbers.push(numberArray[i]);
	}
}
// console.log(evenNumbers);

let evenNumbersWithFilter = numberArray.filter((item) => (item % 2 === 0));

console.log(evenNumbersWithFilter);


// Problem 2:- Filter objects with tags javascript

var persons = [
  {id : 1, name : "John", tags : "javascript"}, 
  {id : 2, name : "Alice", tags : "javascript"}, 
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];

let jsTags = persons.filter((item) => (item.tags === "javascript"))

console.log(jsTags);

// Problem 2 with indexOf
let jsTags2 = persons.filter((item) => (item.tags.indexOf("javascript") > -1));

console.log(jsTags2);