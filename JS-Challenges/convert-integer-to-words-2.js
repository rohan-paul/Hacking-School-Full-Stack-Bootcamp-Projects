// Super simple brute-force script for the numbers from 0-99.
var words = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirthteen', 'fourteen', 'fifteen'
];

numToWord = num => {

  let finalWord = '';

  if (num > words.length) {

    if ((num > 15 && num < 20)) {
      finalWord = (words[num - 10].charAt(0).toUpperCase() + words[num - 10].slice(1) ) + "teen"
    }
    else if ((num >= 20 && num < 30)) {
      finalWord = ( num > 20 ? ('Twenty-' + words[num - 20]) : 'Twenty' )
    }
    else if ((num >= 30 && num < 40)) {
      finalWord = ( num > 30 ? ('Thirty-' + words[num - 30]) : 'Thity' )
    }
    else if ((num >= 40 && num < 50)) {
      finalWord = ( num > 40 ? ('Forty-' + words[num - 40]) : 'Forty' )
    }
    else if ((num >= 50 && num < 60)) {
      finalWord = ( num > 50 ? ('Fifty-' + words[num - 50]) : 'Fifty' )
    }
    else if ((num >= 60 && num < 70)) {
      finalWord = ( num > 60 ? ('Sixty-' + words[num - 60]) : 'Sixy' )
    }
    else if ((num >= 70 && num < 80)) {
      finalWord = ( num > 70 ? ('Seventy-' + words[num - 70]) : 'Seventy' )
    }
    else if ((num >= 80 && num < 90)) {
      finalWord = ( num > 80 ? ('Eighty-' + words[num - 80]) : 'Eighty' )
    }
    else if ((num >= 90 && num < 100)) {
      finalWord = ( num > 90 ? ('Ninety-' + words[num - 90]) : 'Ninety' )
    }
  }
  else {
    finalWord = words[num]
  }
  return finalWord;
}

console.log(numToWord(99));