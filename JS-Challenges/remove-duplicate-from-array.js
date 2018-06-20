// remove duplicate element from an array and return the array
removeDupFromArr1 = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      result.push(arr[i]);
    }
  }
  return result;
}

myDuplicatedArr = [1 , 2 , 3, 2];
myDuplicatedStrArr = ['a' , 'b' , 'c', 'b'];

// console.log(removeDupFromArr1(myDuplicatedStrArr));

// Function construction with Prototype
/*Array.prototype.unique = function() {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (result.indexOf(this[i]) < 0) {
      result.push(this[i]);
    }
  }
  return result;
}*/

Array.prototype.unique = function() {
    var a = [];
    for ( i = 0; i < this.length; i++ ) {
        var current = this[i];
        if (a.indexOf(current) < 0) a.push(current);
    }
    return a;
}

console.log(Array.prototype.unique.call(myDuplicatedArr));