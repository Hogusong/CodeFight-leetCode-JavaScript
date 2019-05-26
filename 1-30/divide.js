/*
  Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.
  Return the quotient after dividing dividend by divisor.
  The integer division should truncate toward zero.

  Input: dividend = 10, divisor = 3  Output: 3
  Input: dividend = 7, divisor = -3  Output: -2

  Both dividend and divisor will be 32-bit signed integers.
  The divisor will never be 0.
  Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
  For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.
*/

var divide = function(dividend, divisor) {
  const prefix = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let count = 0;
  while (dividend >= divisor) {
    dividend -= divisor;
    count++; 
  }
  const answer = prefix < 0 ? -count : count;
  if (answer > 2147483647) return 2147483647;
  if (answer < -2147483648) return -2147483648;
  return answer;
}

function divideSmart(dividend, divisor) {
  const prefix = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let count = 0, subCount = 2, subSum = divisor + divisor;
  while (dividend >= divisor) {
    if (subCount < 8) {
      dividend -= divisor;
      count++; 
      subCount += subCount;
      subSum += subSum;    
    } else if (dividend >= subSum) {
      dividend -= subSum;
      count += subCount
      subCount += subCount;
      subSum += subSum;    
    } else {
      dividend -= divisor;
      count++;
      subCount = 2;
      subSub = divisor + divisor;
    }
  }
  const answer = prefix < 0 ? -count : count;
  if (answer > 2147483647) return 2147483647;
  if (answer < -2147483648) return -2147483648;
  return answer;
};

console.time('This')
console.log(divide(2147483648, 2));
console.timeEnd('This')

console.time('This')
console.log(divideSmart(2147483648, 2));
console.timeEnd('This')
