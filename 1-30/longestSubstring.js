/*
  Given a string, find the length of the longest substring without repeating characters.

  Input: "abcabcbb"   Output: 3 
  Explanation: The answer is "abc", with the length of 3. 

  Input: "bbbbb"      Output: 1
  Explanation: The answer is "b", with the length of 1.

  Input: "pwwkew"     Output: 3
  Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

function lengthOfLongestSubstring(s) {
  let i = 0, max = 0;
  const n = s.length;
  const dict = {};
  for (let j=0; j<n; j++) {
    if (dict[s[j]]) {
      i = Math.max(dict[s[j]], i);
    }
    max = Math.max(max, j-i+1);
    dict[s[j]] = j+1;
  }
  return max;
}

console.log(lengthOfLongestSubstring('dicvdadvfadi'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('au'));
console.log(lengthOfLongestSubstring('aaa'));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring(''));

function findLongestSubstring(s) {
  let i = 0, max = 0, ans = [], str = '';
  const n = s.length;
  const dict = {};
  for (let j=0; j<n; j++) {
    if (dict[s[j]]) {
      i = Math.max(dict[s[j]], i);
      ans.push(str);
      const idx = str.indexOf(s[j]);
      str = str.slice(idx+1) + s[j];
    } else {
      str += s[j];
    }
    max = Math.max(max, j-i+1);
    dict[s[j]] = j+1;
  }
  ans.push(str);
  return ans.filter(e => e.length === max);
}

console.log(findLongestSubstring('dicvdadvfadi'));
console.log(findLongestSubstring('pwwkew'));
console.log(findLongestSubstring('au'));
console.log(findLongestSubstring('aaa'));
console.log(findLongestSubstring(' '));
console.log(findLongestSubstring(''));
