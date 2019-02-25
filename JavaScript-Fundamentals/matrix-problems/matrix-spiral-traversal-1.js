/* Print a given matrix in spiral form
https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/

Given a 2D array (i.e.  N by M matrix ), print it in spiral form. That is,  print out the matrix in a clockwise spiral.

See the following examples.

Input:
           [ [1,  2,   3,  4],
             [5,  6,   7,  8],
             [9,  10, 11, 12],
             [13, 14, 15, 16] ]

Output:

1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

Input:
        1   2   3   4  5   6
        7   8   9  10  11  12
        13  14  15 16  17  18

Output:

1 2 3 4 5 6 12 18 17 16 15 14 13 7 8 9 10 11

*/

// SOLUTION-1 => Recursive

printClockWiseSpiral = (inputMatrix, resultArr) => {

  // The below will by my terminal condition for stopping the recursive function call
  if (inputMatrix.length === 0) return resultArr;

  // Take out the first row from inputMatrix and push to result
  resultArr = resultArr.concat(inputMatrix.shift())

  // push the last elements of the remaining rows. Here, I need to mutate the inputMatrix, hence will be using forEach (instead of map). Note in below the callback argument 'rightEnd' represent each of the left-over array.

  inputMatrix.forEach(rightEnd => {
    resultArr.push(rightEnd.pop());
  })

  // Now from the last row push the elements in reverse order
  resultArr = resultArr.concat(inputMatrix.pop().reverse());

  // Now push the first elements of the remaining arrays in reverse
  let arrayWithLeftEnd = [];
  inputMatrix.forEach(leftEnd => {
    arrayWithLeftEnd.push(leftEnd.shift())
  })
  resultArr = resultArr.concat(arrayWithLeftEnd.reverse());

  // Now I have completed one full run over the the initial given Matrix. And completely fresh new inner-matrix is stating from here on. So apply recursion. Note, that all the above code, I have modified inputMatrix and also resultArr need to be further built with next execution stack of the recursive call.

  return printClockWiseSpiral(inputMatrix, resultArr)
}


let input = [[1,  2,   3,  4],
             [5,  6,   7,  8],
             [9,  10, 11, 12],
             [13, 14, 15, 16]];

console.log(printClockWiseSpiral(input, []));