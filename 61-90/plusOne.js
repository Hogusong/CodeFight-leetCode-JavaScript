/*
  Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
  The digits are stored such that the most significant digit is at the head of the list, 
  and each element in the array contain a single digit.
  You may assume the integer does not contain any leading zero, except the number 0 itself.

  Input: [1,2,3],     Output: [1,2,4]
  Explanation: The array represents the integer 123.

  Input: [4,3,2,1],   Output: [4,3,2,2]
  Explanation: The array represents the integer 4321.
*/

function plusOne(digits) {
  let up = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const value = (digits[i] + up) % 10;
    up = (digits[i] + up >= 10) ? 1 : 0;
    digits[i] = value;
  }
  if (up > 0) return [up, ...digits];
  return digits;
}

arr = [8,0,9,9];
arr = [0];
console.log(plusOne(arr));

var plusOne = function(digits) {
  let up = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + up > 9) digits[i] = 0;
    else {
      digits[i] += up--;
      break;
    }
  }
  if (up > 0) digits.unshift(up);
  return digits;
}