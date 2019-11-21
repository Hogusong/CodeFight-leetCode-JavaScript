/*
  Given a string s, find the longest palindromic substring in s. 
  You may assume that the maximum length of s is 1000.

  Input: "babad",    Output: "bab"
  Note: "aba" is also a valid answer.

  Input: "cbbd",     Output: "bb"
*/

function longestPalindromeBF(s) {
  if (s.length < 2) return s;
  let answer = [0,0];
  for (let i = 0; i < s.length; i++) {
    const jump = answer[1] - answer[0];
    for (let j = i+jump; j < s.length; j++) {
      if (isPalidrome(s, i, j)) {
        if (j - i > answer[1] - answer[0]) answer = [i, j];
        j += (j - i);
      }
    }
  }
  return s.substring(answer[0], answer[1] + 1);
}

function isPalidrome(s, start, end) {
  for (let i=start; i<(end+start)/2; i++) {
      if (s[i] != s[end-i+start]) return false;
  }
  return true;
}

console.log(longestPalindromeBF('dabcdcbab'));

function longestPalindrome(s) {
  if (s != null && s.length < 1) return "";
  let start = 0, end = 0, len = 1, len1 = 1, len2 = 1;
  for (let i=0; i<s.length - (len/2); i++) {
    len1 = expandFromCenter(s, i, i);
    len2 = expandFromCenter(s, i, i+1); 
    len = Math.max(len1, len2);
    if (len > end - start +1) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
}

function expandFromCenter(s, left, right) {
  while(left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

console.log(longestPalindrome('dabcdcbab'));
console.log(longestPalindrome('cbbd'));

var longestPalindrome = function(s) {
  if (s.length < 2) return s;
  let max = 1, ans = s[0];
  for (let i = 0; i < s.length-max/2; i++) {
    const str1 = getPalindrome(s, i, i);
    const str2 = getPalindrome(s, i, i+1);
    if (str2.length > str1.length) {
      if (str2.length > max) {
        max = str2.length;
        ans = str2;
      }
    } else if (str1.length > str2.length && str1.length > max) {
      max = str1.length;
      ans = str1;
    } 
  }
  return ans;
};

function getPalindrome(S, left, right) {
  while (left >= 0 && right < S.length && S[left] == S[right]) {
    left--;
    right++;
  }
  return S.substring(left+1, right);
}

var longestPalindrome = function(s) {
  let from = 0, to = 1;
  for (let i = 1; i < s.length; i++) {
    [from, to] = findPalindromic(s, i, i, from, to);
    [from, to] = findPalindromic(s, i-1, i, from, to);
  }
  return s.substring(from, to);
}

function findPalindromic(str, left, right, from, to) {
  while (left >= 0 && right < str.length && str[left] == str[right]) {
    left--;
    right++;
  }
  left++;
  if (to - from < right - left) return [left, right]
  return [from, to];
}
