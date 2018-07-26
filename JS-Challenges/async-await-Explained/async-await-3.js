// The below function will take a number as input and will resolve one second later with the number doubled.

doubleAfter1Second = x => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve( x * 2)
        }, 1000)
    })
}

// Note, if I just ran the below code it will not print anything, as I am NOT outputting the resolved value with a Promise
// console.log(doubleAfter1Second(2));

// The bekow code will output 20
doubleAfter1Second(10).then((sum) => {
    console.log(sum);
  });

/* function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }

  function addPromise(x){
    return new Promise(resolve => {
      doubleAfter2Seconds(10).then((a) => {
        doubleAfter2Seconds(20).then((b) => {
          doubleAfter2Seconds(30).then((c) => {
            resolve(x + a + b + c);
            })
        })
      })
    });
  } */
