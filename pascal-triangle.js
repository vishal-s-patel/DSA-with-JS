var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  let result = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    let temp = [];
    temp[0] = 1;
    temp[i] = 1;
    for (let j = 0; j < i - 1; j++) {
      temp[j + 1] = result[i - 1][j] + result[i - 1][j + 1];
    }
    result[i] = temp;
  }
  return result;
};

console.log(generate(2));
console.log(generate(1));
