function solution(inputArray) {
  const result = inputArray
    .map((e) => e * e)
    .filter((e) => e % 3 === 1)
    .reduce((acc, val) => {
      return acc + val;
    }, 0);

  return result;
  console.log(result);
}

exports.solution = solution;
