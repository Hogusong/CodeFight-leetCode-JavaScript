/*
  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
  Note: Given n will be a positive integer.

  Input: 2,         Output: 2
  Explanation: There are two ways to climb to the top.
      1. 1 step + 1 step
      2. 2 steps

  Input: 3,         Output: 3
  Explanation: There are three ways to climb to the top.
      1. 1 step + 1 step + 1 step
      2. 1 step + 2 steps
      3. 2 steps + 1 step
*/

//  Brute Force and Recursion
function climbStairsBF(n) {
  if (n === 1) return 1;
  return climbStairsBFRec(0, n)
}

function climbStairsBFRec(i, n) {
  if (i > n) return 0;
  if (i === n) return 1;
  return climbStairsBFRec(i+1, n) + climbStairsBFRec(i+2, n);
}

console.log(climbStairsBF(5));
console.log(climbStairsBF(8));
console.log(climbStairsBF(10));

//  Dynamic Programming and Recursion
function climbStairsDP(n) {
  if (n === 1) return 1
  dict = {}
  return climbingRec(0, n);
}

function climbingRec(i, n) {
  if (i > n) return 0;
  if (n === i) return 1;

  if (!dict[i+1]) dict[i+1] = climbingRec(i+1, n);
  if (!dict[i+2]) dict[i+2] = climbingRec(i+2, n);
  return dict[i+1] + dict[i+2];
}

console.log(climbStairsDP(5));
console.log(climbStairsDP(8));
console.log(climbStairsDP(10));

//  Recursion with Memorize
function climbStairsRM(n) {
  return climb_Stairs(0, n, []);
}

function climb_Stairs(i, n, memo) {
  if (i > n) return 0;
  if (i == n) return 1;
  if (memo[i] > 0) return memo[i];
  
  memo[i] = climb_Stairs(i + 1, n, memo) + climb_Stairs(i + 2, n, memo);
  return memo[i];
}

console.log(climbStairsRM(5));
console.log(climbStairsRM(8));
console.log(climbStairsRM(10));

//  Dynamic Programming with Array
function climbStairsDPA(n) {
  const dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
}

console.log(climbStairsDPA(5));
console.log(climbStairsDPA(8));
console.log(climbStairsDPA(10));

function climbStairsFib(n) {
  if (n === 1) return 1;
  let first = 1,  second = 2;
  for (let i = 3; i <= n; i++) {
    [first, second] = [second, first + second]
  }
  return second;
}

console.log(climbStairsFib(5));
console.log(climbStairsFib(8));
console.log(climbStairsFib(10));
