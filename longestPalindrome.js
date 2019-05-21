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
  let start = 0, end = 0;
  for (let i=0; i<s.length; i++) {
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
  while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    left--;
    right++;
  }
  return right - left - 1;
}

console.log(longestPalindrome('dabcdcbab'));
console.log(longestPalindrome('cbbd'));
