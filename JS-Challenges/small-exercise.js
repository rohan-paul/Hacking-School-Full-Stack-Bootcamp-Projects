/* Problem-2 */

function printName() {
    for (var i = 1; i <= 100; i++) {
        // Math.floor (Math.random () * (max - min + 1) + min);
        if (i % 3 == 0) {
            console.log("rohan");
        } else if (i % 5) {
            console.log("paul");
        } else if ((i % 3 == 0) && (i % 5 == 0) ) {
            console.log("rohan paul");
        }
        else {
            console.log(i);
        }
    }
}

// printName();



/*  20 40
    10 60
//  80, 50
*/

function matrixDiagonalSums(matrix) {

    let mainSum = 0, secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
    }
    console.log(mainSum + ', ' + secondarySum);
}

// let myMatrix = [[20, 40], [10, 60]];
let myMatrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
matrixDiagonalSums(myMatrix);