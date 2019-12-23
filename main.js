// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  // console.log(number)
  //code here
  if (number > 1) {
    number = number * findFactorialRecursive(number - 1);
    //console.log(answer)
  }
  return number;
}

function findFactorialIterative(number) {
  //code here
  let answer = 1;
  while (number > 1) {
    answer = answer * number;
    //console.log(number)
    number--;
  }
  return answer;
}

// findFactorialRecursive(5);
//findFactorialIterative(4);

function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

let counter = 0;
function fibonacciRecursiveWithMemoi() {
  let array = {};
  return function fib(n) {
    counter++;
    if (n in array) {
      return array[n];
    } else {
      if (n < 2) {
        array[n] = n;
        return n;
      }
      array[n] = fib(n - 1) + fib(n - 2);
      return array[n]
    }
  }
}

const memoized = new fibonacciRecursiveWithMemoi();

console.log('5' + memoized(10));
console.log('Number of operation: '+ counter);


function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

// fibonacciIterative(3);
// fibonacciRecursive(6)

function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

// reverseString('yoyo mastery')
//should return: 'yretsam oyoy' 