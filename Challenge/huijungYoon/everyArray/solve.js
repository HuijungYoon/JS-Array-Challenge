function solution(inputArray) {
  const isAllEven = (currentValue) => currentValue % 2 === 0; //짝수
  if (inputArray.every(isAllEven)) {
    //맞다면 짝수
    return true;
  } else {
    //홀수가 하나라도 있다면 false;
    return false;
  }
}

exports.solution = solution;
