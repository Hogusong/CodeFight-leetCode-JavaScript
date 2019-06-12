/*
  Say you have an array for which the ith element is the price of a given stock on day i.
  If you were only permitted to complete at most one transaction 
  (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
  Note that you cannot sell a stock before you buy one.

  Input: [7,1,5,3,6,4]          Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
               Not 7-1 = 6, as selling price needs to be larger than buying price.

  Input: [7,6,4,3,1]            Output: 0
  Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

//  Brute Force
function maxProfit(prices) {
  if (prices.length < 2) return 0;
  let maxP = 0;
  for (let i = 0; i < prices.length; i++) {
    const max = Math.max(...prices.slice(i+1));
    maxP = Math.max(maxP, max - prices[i]);
  }
  return maxP;
}

P = [7,1,5,3,6,4];
console.log(maxProfit(P));
P = [7,6,4,3,1];
console.log(maxProfit(P));
P = [2,4,1];
console.log(maxProfit(P));

//  Brute Force 2
function maxProfit2(prices) {
  if (prices.length < 2) return 0;
  let maxP = 0;
  for (let i = 0; i < prices.length-1; i++) {
    for (let j = i+1; j < prices.length; j++) {
      maxP = Math.max(maxP, prices[j] - prices[i]);
    }
  }
  return maxP;
}

P = [7,1,5,3,6,4];
console.log(maxProfit2(P));
P = [7,6,4,3,1];
console.log(maxProfit2(P));
P = [2,4,1];
console.log(maxProfit2(P));
