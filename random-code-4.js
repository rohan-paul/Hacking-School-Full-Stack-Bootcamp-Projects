function pyramidInverted (totalRows) {
    let str = '';

    for (let row = totalRows; row >= 1; row-- ) {

        for (let col1 = totalRows; col1 >= row; col1-- ) {
            // str += '#';
            // console.log(str);
        }

        for (let col2 = row; col2 >=1; col2--) {
            str += '*#';
            console.log(str);
        }
        // console.log(str);
        str = '';

    }
}

pyramidInverted(5);