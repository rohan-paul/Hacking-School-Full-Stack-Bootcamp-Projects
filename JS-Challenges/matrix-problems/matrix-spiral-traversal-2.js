// Print a given matrix in spiral form - Pretty much the same steps, like the other file, only here, I will be using splice() instead of shift() and pop()

// helper function to deal with all the elements on the right layer of the spiral / Matrix.
topAndRightSpiral = matrix => {

  // Take out the first row from inputMatrix and push to result
  let topRow = matrix.splice(0, 1)

  let rightColumn = [];

  matrix.forEach(elem => {
    rightColumn.push(elem.splice(-1, 1));
  })

  return topRow.concat(rightColumn).toString().split();
}

// helper function to deal with all the elements on the bottom layer and the left column of the spiral / Matrix.
bottomAndLeftSpiral = matrix => {

  // Now from the last row push the elements in reverse order. But unlike my other solution here, I am using splice() which returns the deleted element as an array. So, if only one single element is deleted, then a single-element array will be returned from the function. Hence, I have to use [0] to extract the elements from the array and only then, I can reverse it.

  let bottom = matrix.splice(matrix.length - 1, 1)[0].reverse()

  let leftColumn = [];

  // Now push the first elements of the remaining arrays. But this push will work from vetically downwards direction. Hence I need to later reverse this.
  matrix.forEach(elem => {
    leftColumn.push(elem.splice(0, 1));
  })

  // return the top row and last column elements as a list
  return bottom.concat(leftColumn.reverse()).toString().split()
}

// Now the final function
printClockWiseSpiral = matrix => {

  let resultSpiral = [];

  while (matrix.length > 0) {

    // if only 1 more element left in matrix
    if (matrix.length === 1) {
      resultSpiral.push(matrix[0])
      break;
    }

    resultSpiral.push(topAndRightSpiral(matrix));

    resultSpiral.push(bottomAndLeftSpiral(matrix));

  }

  return resultSpiral.toString().split();

}


let input = [[1,  2,   3,  4],
             [5,  6,   7,  8],
             [9,  10, 11, 12],
             [13, 14, 15, 16]];

console.log(printClockWiseSpiral(input));