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
  anc = isNegative ? -ans : ans;
  if (ans < -2147483648 || ans > 2147483647) return 0;
  return ans;
}

console.log(reverseInt(123));
console.log(reverseInt(-123));
console.log(reverseInt(120));

function reverse(n) {
  const isNegative = n < 0;
  n = Math.abs(n);
  const arr = [];
  while (n > 0) {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  }
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[arr.length-i-1] * 10**i;
  }
  num = isNegative ? -num : num;
  if (num < -2147483648 || num > 2147483647) return 0;
  return num;
}