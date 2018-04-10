/* Problem statement -
I have 2 2-d arrays and the matrixAddition() function should return their addition. Like so,
matrixAddition( [ [1, 2, 3], [3, 2, 1,], [1, 1, 1] ], [ [2, 2, 1], [3, 2, 3], [1, 1, 3] ] );
returns [ [3, 4, 4], [6, 4, 4], [2, 2, 4] ]

Note that each of the arguments to the matrixAddition () function is two dimensional arrays of equal height and width (n)

For Matrix Visualization see how the 2 2-D Arrays in LHS added up to give the result on RHS
|1 2 3|   |2 2 1|   |3 4 4|
|3 2 1| + |3 2 3| = |6 4 4|
|1 1 1|   |1 1 3|   |2 2 4|

Also note that the lengths of the 2 2-d arrays are same. i.e arr1.length == arr2.length in the below problem.
  */
// Alterntive-1
function matrixAddition (arr1, arr2) {
  let result = [];
  for (var i = 0; i < arr1.length; i++) {
    result[i] = []; // set this first element of the resulting array to be an empty array, and I am going to fill this index position up with the next lines of codes
    for (var j = 0; j < arr1.length; j++) {
      result[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return result;
}

// Alternative-2, same approach but using forEach() instead of for()
function matrixAddition (arr1, arr2) {
  let result = [];
  arr1.forEach(function (arrItem, index1) {
    let sums = [];
    arrItem.forEach(function (numItem, index2) {
      return sums.push(numItem + arr2[index1][index2]);
    });
    return result.push(sums);
  });
  return result;
}
console.log(matrixAddition([ [1, 2, 3], [3, 2, 1,], [1, 1, 1] ], [ [2, 2, 1], [3, 2, 3], [1, 1, 3] ] ));

/* Further notes on the above
A> When I am looping through the first depth of the outer 2dArray arr1, which values are also arrays. To do matrix addition simply add up the values inside the inner arrays with the corresponding values found on the inner 2dArray b.
*/
