/* https://www.geeksforgeeks.org/third-largest-element-array-distinct-elements/

SOLUTION-1 - Quite optimum solution - 1> In this method, we can find third largest in one traversal only.. Without using an extra step of sorting the whole array

Initialize first, second and second = -INF

2> > Start Iterating the array and comparing first, second and thrid with the current element with 3 if loops.

3> Note, because, I have intialized all with -Infinity, so the first variable will get updated first.

So for myArr variable down below, the first iteration loop will update 'first' to 1 , and then the next iteration loop will update 'first' to 14 and 'second' to 1.
Then in the third iteration loop, first will NOT get changed, while 'second' will get updated to 2 - because the second if clause will get satisfied.

4) Paul note - Here, I am not sorting at all, I am just keeping a track of 2 variables maxVal and nextMaxVal, and updating their values while traversing the array.
*/

thirdLargestElem = arr => {

  let first = -Infinity, second = -Infinity, third = -Infinity;

  for (let i of arr) {

    if (first < i) {
      second = first;
      first = i;
    } else if (second < i && first !== i) {
      third = second;
      second = i;
    } else if (third < i && second !== i) {
      third = i
    }
  }
  return third;
}

let myArr = [1, 14, 2, 16, 10, 20]
let myArr2 = [19, -10, 20, 14, 2, 16, 10]

console.log(thirdLargestElem(myArr)); // => 10
console.log(thirdLargestElem(myArr2));  // => 16
