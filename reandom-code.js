function multiplyMatrix (arr1, arr2) {
  let result = []; // the final output which is also a 2-d array
  for (var i = 0; i < arr1.length; i++) {
    result[i] = []; // set this first element of the resulting array to be an empty array, and I am going to fill this index position up with the next lines of codes
    for (var j = 0; j < arr1.length; j++) {
      result[i][j] = arr1[i][j] * arr2[i][j];
    }
  }
  return result;
}

// let testdata = [[[1][2], [3][4]], [[5][6], [7][8]]];

var m1 = [[1,2],[3,4]]
var m2 = [[5,6],[7,8]]

console.log(multiplyMatrix(m1, m2));
// multiplyMatrix();