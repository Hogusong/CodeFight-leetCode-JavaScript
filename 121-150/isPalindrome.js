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
