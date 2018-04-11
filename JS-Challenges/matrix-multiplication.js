/* The math of matrix multiplication - https://www.mathsisfun.com/algebra/matrix-multiplying.html
To multiply a matrix by another matrix we need to do the "dot product" of rows and columns .
m1 = [1 , 2 , 3], [4 , 5, 6 ]
m2 = [7, 8], [9, 10], [11, 12]

The "Dot Product" is where we multiply matching members, then sum up:

1st row and 1st column>>
(1, 2, 3) • (7, 9, 11) = 1×7 + 2×9 + 3×11  = 58

2nd row and 1st column>>
1, 2, 3) • (8, 10, 12) = 1×8 + 2×10 + 3×12 = 64

2nd row and 1st column >>
(4, 5, 6) • (7, 9, 11) = 4×7 + 5×9 + 6×11 = 139

2nd row and 2nd column >>
(4, 5, 6) • (8, 10, 12) = 4×8 + 5×10 + 6×12 = 154

We match the 1st members (1 and 7), multiply them, likewise for the 2nd members (2 and 9) and the 3rd members (3 and 11), and finally sum them up.



*/
function multiplyMatrices(m1, m2) {
  var result = [];
  for (var i = 0; i < m1.length; i++) {
    result[i] = [];
    for (var j = 0; j < m2[0].length; j++) {
      var sum = 0;
      for (var k = 0; k < m1[0].length; k++) {
        sum += m1[i][k] * m2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

var m1 = [1 , 2 , 3], [4, 5, 6];
var m2 = [7, 8], [9, 10], [11, 12];

var mResult = multiplyMatrices(m1, m2);

/*In Google Chrome and Firefox you can do:*/

console.table(mResult);