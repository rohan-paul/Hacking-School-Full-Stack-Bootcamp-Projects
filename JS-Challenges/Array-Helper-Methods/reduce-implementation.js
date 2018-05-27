// Example 2:- return and array of unique tags from the below dataset

var persons = [
  {id : 1, name : "John", tags : "javascript"}, 
  {id : 2, name : "Alice", tags : "javascript"}, 
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];

var uniqueTags = persons.reduce((acc, personObj) => {
    acc[personObj.tags] = 1;
    return acc;
},{});

console.log(uniqueTags);;
console.log(Object.keys(uniqueTags))

/*So in the above, my accumulator is initialized to be an empty object, and within the reduce function, I am assigning each tag to the key of that object and the corresponding value to be 1 . Remember in reduce() function, the accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback.
So here, the initialized emtpy object is constructed with each invocation of the callback and the final object is returned as the returned value of the program.
*/
