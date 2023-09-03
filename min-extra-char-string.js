var minExtraChar = function (s, dictionary) {
  let dp = s.split("");
  for (let word of dictionary) {
    let temp = word.split("");
    temp.forEach((ch) => {
      let index = dp.findIndex((w) => w === ch);
      if (index != -1) {
        dp.splice(index, 1);
      }
    });
  }
  return dp.length;
};

console.log(minExtraChar("sayhelloworld", ["hello", "world"]));
