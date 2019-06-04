/*
  Implement int sqrt(int x).
  Compute and return the square root of x, 
  where x is guaranteed to be a non-negative integer.
  Since the return type is an integer, 
  the decimal digits are truncated and only the integer part of the result is returned.

  Input: 4,       Output: 2
  Input: 8,       Output: 2
  Explanation: The square root of 8 is 2.82842..., and since 
               the decimal part is truncated, 2 is returned.
*/

function mySqrt(x) {
  if (x < 3) return 1;
  let n = 2;
  while (n * n <= x) {
    n++;
  }
  return n - 1;
}

console.log(mySqrt(8));
console.log(mySqrt(98));
