/* var promise = new Promise ((resolve, reject) => {
  resolve();
  reject();
}) */

/* promise.then(() => {
  console.log("hey I am");
}).catch(() => {
  console.log("Sorry it gave error");
}); */

/* promise.then(() => {
  console.log("hey I am");
}).then(() => {
  console.log("The second then");
}).catch(() => {
  console.log("Sorry it gave error");
}).then(() => {
  console.log("The third then");
}); */

function func1() {
	return {
		func2: () => {
      console.log("Inside func2");
      return {
        func3: () => {
          console.log("Inside func3");
        }
      }
		}
	}
}

func1().func2().func3();