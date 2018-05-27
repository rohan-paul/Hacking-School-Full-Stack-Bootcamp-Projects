/*let promise1 = new Promise((resolve, reject) => {
	reject();
})

promise1.then(() => {
	console.log("Hey I am finished executing resolved()");
}).catch(() => {
	console.log("Hey this time rejected, but will hit again");
})

// The above Will output - "Hey this time rejected, but will hit again"

let promise2 = new Promise((resolve, reject) => {
	resolve();
})

promise2.then(() => {
	console.log("Hey I am finished executing resolved()");
}).catch(() => {
	console.log("Hey this time rejected, but will hit again");
})*/

// The above Will output - Hey I am finished executing resolved()


/*let promise3 = new Promise((resolve, reject) => {
	reject();
})

promise3.then(() => {
	console.log("First then response");
}).then(() => {
	console.log("Second then response");
}).catch(() => {
	console.log("Hey this time rejected, but will hit again");
})*/

// The above will Output - Hey this time rejected, but will hit again. Notice the 2 then() are ignored and execution jumps to catch() as only reject was passed in the function construction
// 
let promise4 = new Promise((resolve, reject) => {
	resolve();
})

promise4.then(() => {
	console.log("First then response");
}).then(() => {
	console.log("Second then response");
}).catch(() => {
	console.log("Hey this time rejected, but will hit again");
})

/*The above will Output - 
First then response
Second then response
Notice the 2 then() are sequentially executed and the catch() is ignored as no reject function was passed.

*/