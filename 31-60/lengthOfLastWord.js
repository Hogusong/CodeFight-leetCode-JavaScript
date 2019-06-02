/*
  Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
  return the length of last word in the string.
  If the last word does not exist, return 0.

  Note: A word is defined as a character sequence consists of non-space characters only.

  Input: "Hello World",       Output: 5
*/

function lengthOfLastWord(s) {
  s = s.trim();
  if (s.length < 1) return 0;

  const arr = s.split(' ');
  return arr[arr.length-1].length;
}

str = 'Hello World '
console.log(lengthOfLastWord(str));
