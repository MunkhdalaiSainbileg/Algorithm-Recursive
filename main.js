// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  // console.log(number)
  //code here
  if(number > 1 ){
     number = number * findFactorialRecursive(number-1);
     //console.log(answer)
  }
  return number;
}

function findFactorialIterative(number) {
  //code here
  let answer = 1;
  while(number>1){
    answer = answer * number;
    //console.log(number)
    number--;
  }
  return answer;
}

findFactorialRecursive(5);
//findFactorialIterative(4);