/* Important: We can only multiply matrices if the number of columns in the first matrix is the same as the number of rows in the second matrix.

The math of matrix multiplication - https://www.mathsisfun.com/algebra/matrix-multiplying.html
To multiply a matrix by another matrix we need to do the "dot product" of rows and columns .
m1 = [1 , 2 , 3], [4 , 5, 6 ]
m2 = [7, 8], [9, 10], [11, 12]

The "Dot Product" is where we multiply matching members, then sum up:

1st row and 1st column>>
(1, 2, 3) • (7, 9, 11) = 1×7 + 2×9 + 3×11  = 58

1st row and 2nd column >>
(1, 2, 3) • (8, 10, 12) = 1×8 + 2×10 + 3×12 = 64

2nd row and 1st column >>
(4, 5, 6) • (7, 9, 11) = 4×7 + 5×9 + 6×11 = 139

2nd row and 2nd column >>
(4, 5, 6) • (8, 10, 12) = 4×8 + 5×10 + 6×12 = 154

We match the 1st members (1 and 7), multiply them, likewise for the 2nd members (2 and 9) and the 3rd members (3 and 11), and finally sum them up.

For the pictorial representation see - https://www.intmath.com/matrices-determinants/4-multiplying-matrices.php
*/

//Alternative-1
/* i to represent each element of m1, which itself is an array.
 j to represent actual numerical values of the first element of m2, noting first element m2 is an array.
 */
function multiplyMatrices(m1, m2) {

  // First check if the given arguments are 2 dimensional arrays
 /*  if (!Array.isArray(m1) || !Array.isArray(m2) || !m1.length || !m2.length) {
    throw new Error('arguments should be in 2-dimensional array format');
  } */

  // Check that the number of columns in the first matrix is the same as the number of rows in the second matrix.
  /* if (m1[0].length !== m2.length) {
    throw new Error('number of columns in the first matrix should be the same as the number of rows in the second');
  } */

  var result = [];
  for (var i = 0; i < m1.length; i++) {
    result [i] = [];
    for (var j = 0; j < m2[0].length; j++) {
      var sum = 0;
      for ( var k = 0; k < m1[0].length; k++) {
        sum += m1[i][k] * m2[k][j];
      }
      result[i][j] = sum;
    }
  }
return result;
}

// Alternative-2
/* A> Here with reduce() method, I am executing the function ( return sum + (elm*B[k][j]) ) on each element of the array from left to right, reducing the array to a single value. And the initial-value to the reduce() method is set to be at 0  */
/* function multiplyMatrices (A, B) {
  var result = new Array(A.length).fill(0).map(row => new Array(B[0].length).fill(0));

  return result.map((row, i) => {
      return row.map((val, j) => {
          return A[i].reduce((sum, elm, k) => sum + (elm*B[k][j]) ,0)
      })
  })
} */

var m1 = [[1 , 2 , 3], [4, 5, 6]];
var m2 = [[7, 8], [9, 10], [11, 12]];

console.log(multiplyMatrices(m1, m2));;