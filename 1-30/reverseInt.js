/*
  Given a 32-bit signed integer, reverse digits of an integer.

  Input: 123    Output: 321
  Input: -123   Output: -321
  Input: 120    Output: 21

  Assume we are dealing with an environment which could only store integers within 
  the 32-bit signed integer range: [−2147483648,  2147483647] = [-2**31, 2**31 - 1]. 
  For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

function reverseInt(n) {
  const isNegative = n < 0;
  n = isNegative ? -n : n;
  let ans = 0;
  while (n > 0) {
    const remain = n % 10;
    n = Math.floor(n / 10);
    ans = ans * 10 + remain;
  }
  return isNegative ? -ans : ans;
}

console.log(reverseInt(123));
console.log(reverseInt(-123));
console.log(reverseInt(120));
