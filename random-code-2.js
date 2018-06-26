let obj = {
	"a": 1,
	"b": 2,
	"c": 3
}


console.log('a' in obj); //true

console.log('toString' in obj); //true

console.log(obj.hasOwnProperty('a')); //true

console.log(obj.hasOwnProperty('toString')); //false