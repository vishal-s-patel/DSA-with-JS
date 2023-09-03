/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
  let prefix_n = [0];
  let postfix_y = [];
  let minPenalty = Number.MAX_VALUE;
  let hour = 0;
  postfix_y[customers.length] = 0;
  let count = 0;
  for (let c of customers) {
    if (c === "N") {
      prefix_n.push(count + 1);
      count++;
    } else {
      prefix_n.push(count);
    }
  }
  count = 0;
  for (let i = customers.length - 1; i >= 0; i--) {
    if (customers[i] === "Y") {
      postfix_y[i] = count + 1;
      count++;
    } else {
      postfix_y[i] = count;
    }
  }
  for (let i = 0; i < prefix_n.length; i++) {
    if (postfix_y[i] + prefix_n[i] < minPenalty) {
      minPenalty = postfix_y[i] + prefix_n[i];
      hour = i;
    }
  }
  return hour;
};

console.log(bestClosingTime("NNNNN"));
