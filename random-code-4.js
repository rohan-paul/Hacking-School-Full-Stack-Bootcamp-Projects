function largestNumber(num) {
  var NUM = [];
  var res = '';

  for (var i = 0; i <num.length; i++) {
      NUM.push(num[i]+'');
  }

  NUM.sort(function (a, b) {
      var leftRight = a+b;
      var rightLeft = b+a;

      if (leftRight > rightLeft) {
        return -1;
      }
      if (leftRight < rightLeft) {
        return 1;
      }
      return 0;
  });

  for (var i = 0; i < NUM.length; i++) {
      res += NUM[i];
  }

  return parseInt(res);
}

console.log(largestNumber([3, 30, 34, 5, 9]));