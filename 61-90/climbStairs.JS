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
