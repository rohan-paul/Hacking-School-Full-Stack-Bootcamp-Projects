/*https://www.geeksforgeeks.org/find-second-largest-element-array/

Pseudo-code for more Efficient Solution can be to find the second largest element in a single traversal.

Below is the complete algorithm for doing this:

1) Initialize two variables first and second to INT_MIN as,
   first = second = INT_MIN
2) Start traversing the array,
   a) If the current element in array say arr[i] is greater
      than first. Then update first and second as,
      second = first
      first = arr[i]
   b) If the current element is in between first and second,
      then update second to store the value of current variable as
      second = arr[i]
3) Return the value stored in second.*/

function findSecondLargest (arr) {

	let maxVal = -Infinity;
	let nextMaxVal = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > maxVal) {
			nextMaxVal = maxVal;
			maxVal = arr[i];
		} else if (arr[i] < maxVal && arr[i] > nextMaxVal) {
			nextMaxVal = arr[i]; 
		}
	}
	return nextMaxVal;
}


//Alternative-2

function findSecondLargestAlt(arr) {

	return arr.sort((a, b) => { b - a ;})[1];
}

console.log(findSecondLargestAlt([20, 120, 111, 215, 54, 78]));