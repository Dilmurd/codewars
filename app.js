function squareSum(numbers){
    return numbers.reduce((sum, num) => sum + num ** 2, 0);
}

function removeChar(str){
    return str.slice(1, -1);
  };
  

  function repeatStr (n, s) {
    return s.repeat(n);
}

function positiveSum(arr) {
    return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
}

function boolToWord( bool ){
    return bool ? 'Yes' : 'No';
}


function makeNegative(num) {
    return num > 0 ? -num : num;
}


function opposite(number) {
    return -number;
}
console.log(opposite(1));    // -1
console.log(opposite(14));   // -14
console.log(opposite(-34));  // 34


function numberToString(num) {
    return String(num);
}
console.log(numberToString(123));  // "123"
console.log(numberToString(999));  // "999"
console.log(numberToString(-100)); // "-100"


function multiply(a, b){
    return a * b
}


function evenOrOdd(number) {
    if(number % 2 === 0){
      return "Even";
    }else{
      return "Odd"
  }
  }