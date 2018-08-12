/*Print a given matrix in spiral form - Pretty much the same steps, like the other file, only here, I will be using splice() instead of shift() and pop()

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

1 2 3 4 5 6 12 18 17 16 15 14 13 7 8 9 10 11*/

 

// HELPER-function-1 to deal with all the elements on the right layer of the spiral / Matrix.
topAndRightSpiral = matrix => {

  // Take out the first row from inputMatrix and push to result
  let topRow = matrix.splice(0, 1)

  let rightColumn = [];

  // spliec() - If the start-index to splice() is negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.
  // e.g.  console.log([ 1, 2, 3].splice(-1, 1))  => 3
  
  matrix.forEach(elem => {
    rightColumn.push(elem.splice(-1, 1));
  })

  return topRow.concat(rightColumn).toString().split();
}

// HELPER-function-2 to deal with all the elements on the bottom layer and the left column of the spiral / Matrix.
bottomAndLeftSpiral = matrix => {

  // Now from the last row push the elements in reverse order. But unlike my other solution here, I am using splice() which returns the deleted element as an array. So, if only one single element is deleted, then a single-element array will be returned from the function. Hence, I have to use [0] to extract the elements from the array and only then, I can reverse it.

  let bottom = matrix.splice(matrix.length - 1, 1)[0].reverse()

  let leftColumn = [];

  // Now push the first elements of the remaining arrays. But this push will work from vetically downwards direction. Hence I need to reverse this and then return the final array.
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

    // if only 1 more element left in matrix, then I dont have to move 
    // in any direction. Just push it to the array.
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

/* forEach() vs map()


 Let’s first take a look at the definitions on MDN:

forEach() — executes a provided function once for each array element.
map() — creates a new array with the results of calling a provided function on every element in the calling array.
What exactly does this mean?

Well, the forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.

Meanwhile, the map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.*/