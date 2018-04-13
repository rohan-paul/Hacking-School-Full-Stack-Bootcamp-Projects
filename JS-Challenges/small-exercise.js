/* Problem-Fizz-Buzz - Print your name with the below conditions of dividing by 3 and 5*/

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