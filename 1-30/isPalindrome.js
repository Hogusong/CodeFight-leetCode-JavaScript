/*
  Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

  Input: 121,       Output: true
  Input: -121,      Output: false       -121 != 121- 
  Input: 10,        Output: false         10 != 01 
*/

function isPalindrome(x) {
  if (x < 0) return false;
  const str = '' + x;
  let left = 0, right = str.length - 1;
  while (left <= right) {
    if (str[left++] != str[right--]) return false;
  }
  return true
}
