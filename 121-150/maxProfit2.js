/*
  Say you have an array for which the ith element is the price of a given stock on day i.
  Design an algorithm to find the maximum profit. You may complete as many transactions as you like 
  (i.e., buy one and sell one share of the stock multiple times).
  Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

  Input: [7,1,5,3,6,4]        Output: 7
  Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
               Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

  Input: [1,2,3,4,5]          Output: 4
  Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
               Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
               engaging multiple transactions at the same time. You must sell before buying again.

  Input: [7,6,4,3,1]          Output: 0
  Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

function maxProfit(prices) {
  if (prices.length < 2) return 0;

  let peak = null, valley = null, maxP = 0;

  for (let i = 0; i < prices.length-1; i++) {
    if (prices[i] > prices[i+1]) {
      if (valley !== null) peak = prices[i];
    }
    if (prices[i] < prices[i+1]) {
      if (valley == null) valley = prices[i];
    }
    if (peak != null && valley != null) {
      maxP += peak - valley;
      peak = null; 
      valley = null;
    }
  }
  if (valley != null) maxP += prices[prices.length-1] - valley;
  return maxP;
}

P = [1,5];
console.log(maxProfit(P))       // 4
P = [7,1,5,3,6,4];
console.log(maxProfit(P));      // 7
P = [7,1,1,5,3,6,2,4];
console.log(maxProfit(P));      // 9
P = [5,5,4,9,3,8,5,4,1,6,8,3,4];
console.log(maxProfit(P));      // 18

//  Dynamic Programming
var maxProfit = function(prices) {
  let min = 100000000;
  let maxP = 0;
  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < min) {
          min = prices[i];
      } else if (prices[i] - min > maxP) {
          maxP = prices[i] - min;
      }
  }
  return maxP;
}

//  Recursiong : Time limit
function maxProfit(prices) {
  return calculate(prices, 0);
}

function calculate(P, s) {
  if (s >= P.length) return 0;

  let max = 0;
  for (let i = s; i < P.length; i++) {
    let maxprofit = 0;
    for (let j = i + 1; j < P.length; j++) {
      if (P[i] < P[j]) {
        const profit = calculate(P, j + 1) + P[j] - P[i];
        if (profit > maxprofit) maxprofit = profit;
      }
    }
    if (maxprofit > max) max = maxprofit;
  }
  return max;
}
