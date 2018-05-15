function pyramidInverted (totalRows) {
    let str = '';

    for (let row = totalRows; row >= 1; row-- ) {

        for (let col1 = totalRows; col1 >= row; col1-- ) {
            str += ' ';
            // console.log(str);
        }

        for (let col2 = row; col2 >=1; col2--) {
            str += '* ';
            // console.log(str);
        }
        console.log(str);
        str = '';

    }
}

pyramidInverted(5);

/*Explanation

A> Two key point is that I am printing n number of lines with a for loop and I am printing a "Right angled trapezium" shape with * and single-space

Note the right-angled-Trapezium's right hand will be inclined towards right so with each iteration of the for loop there will be one LESS character (i.e. a single-space) on the right.

Check the code, by replacing single-space with a #

A> KEY POINT - For each row, I am printing columns of values - first column prints ony "single space" and the second column prints "* + single space "

B> The column-1's printing output goes on **increasing** - Handle it by having the condition col1 > row. So for each value of row whcih goes on decreasing with the for loop, I am printing an incresing number of ONLY single-space.


C> The column-2's printing output goes on **decreasing** - Handle it by doing col2 >= 1  . So for each row (the number of which decreases), I am printing that many number of col2's output.

D> For first line, i.e. for first loop >> print col-1's output 1 time and col-2's output 5 times.

E> For second line - i.e. for second loop >> print col-1's output 2 times and col-2's output 4 times.

F> For third line - i.e. for third loop >> print col-1's output 3 times and col-2's output 3 times.

G>  G> After the 2 for loops are done, reset the line back to an empty space, becuase the 2 for loops need to run again from zero postion for the next value or 'row' i.e. the next line.
*/