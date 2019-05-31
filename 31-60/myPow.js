/*
  Implement pow(x, n), which calculates x raised to the power n (xn).

  Input: 2.00000,  10           Output: 1024.00000
  Input: 2.10000,   3           Output: 9.26100
  Input: 2.00000,  -2           Output: 0.25000
  Explanation: 2**-2 = 1/2 * 1/2 = 1/4 = 0.25
  Note:  -100.0 < x < 100.0
         n is a 32-bit signed integer, within the range [−231, 231 − 1]
*/

function myPow(x, n) {
  if (x === 0) return 0;
  if (x === 1 || n === 0) return 1;
  dict = {};
  return power(x, n);
}

function power(x, n) {
  if (n === 1) return x;
  if (n === -1) return 1/x;
  const k = n > 0 ? Math.floor(n/2) : Math.floor(n/2) + (n % 2 != 0 ? 1 : 0);
  if (!dict[k]) dict[k] = power(x, k);
  if (n % 2 === 0) {
    return dict[k] * dict[k];
  } 
  return n > 0 ? x * dict[k] * dict[k] : dict[k] * dict[k] / x;
}

console.log(myPow(2.1, 3));
console.log(myPow(8, -3))
console.log(myPow(125, 15));
