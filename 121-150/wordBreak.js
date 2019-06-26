/*
  Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
  determine if s can be segmented into a space-separated sequence of one or more dictionary words.

  The same word in the dictionary may be reused multiple times in the segmentation.
  You may assume the dictionary does not contain duplicate words.

  Input: s = "leetcode",  wordDict = ["leet", "code"]        Output: true
  Explanation: Return true because "leetcode" can be segmented as "leet code".

  Input: s = "applepenapple", wordDict = ["apple", "pen"]    Output: true
  Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
               Note that you are allowed to reuse a dictionary word.

  Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
  Output: false
*/

function wordBreak(s, wordDict) {
  return breakWord(s, 0, s.length, wordDict);
}

function breakWord(s, i, n, wordDict) {
  if (i >= n) return true;

  for (let w of wordDict) {
    if (n - i < w.length) continue;
    if (s.substring(i, i + w.length) != w) continue;
    if (breakWord(s, i+w.length, n, wordDict)) return true;
  }
  return false;
}

s = "cars";
words = ["car","ca","rs"];
console.log(wordBreak(s, words));

