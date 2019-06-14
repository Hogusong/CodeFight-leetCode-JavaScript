/*
  Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
  Note: For the purpose of this problem, we define empty string as valid palindrome.

  Input: "A man, a plan, a canal: Panama"       Output: true
  Input: "race a car"                           Output: false
*/

function isPalindrome(s) {
  s = s.toLowerCase().replace(/[!@#$%^&*()"?:;',\ ]/g, '');
  const mid = Math.floor(s.length / 2);
  for (let i = 0; i <= mid; i++) {
    if (s[i] != s[s.length-i-1]) return false;
  }
  return true;
}

s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
console.log(isPalindrome('abcddcba'));

function isPalindromeR(s) {
  s = s.toLowerCase().replace(/[\W]/g, '');
  return checkRec(s, 0);
}

function checkRec(s, i) {
  if (i >= s.length) return true;
  if (s[i] != s[s.length - 1 - i]) return false;
  return checkRec(s, i+1);
}

s = "A man, a plan, a canal: Panama";
console.log(isPalindromeR(s));
console.log(isPalindromeR('abcddcba'));
