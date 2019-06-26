/*
  Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
  add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

  The same word in the dictionary may be reused multiple times in the segmentation.
  You may assume the dictionary does not contain duplicate words.

  Input:  s = "catsanddog"    wordDict = ["cat", "cats", "and", "sand", "dog"]
  Output:  [    "cats and dog",    "cat sand dog"    ]

  Input:  s = "pineapplepenapple"  wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
  Output:  [    "pine apple pen apple",    "pineapple pen apple",    "pine applepen apple"   ]
  Explanation: Note that you are allowed to reuse a dictionary word.

  Input:  s = "catsandog"     wordDict = ["cats", "dog", "sand", "and", "cat"]
  Output:  []
*/

function wordBreak(s, wordDict) {
  result = []
  breakWord(s, wordDict, [])
  return result;
}

function breakWord(str, dict, ans) {
  const n = str.length;
  if (n < 1) {
    result.push(ans.join(' '))
    return;
  }
  for (let i = 1; i <= n; i++) {
    const prefix = str.substring(0, i);
    if (dict.includes(prefix)) {
      breakWord(str.substring(i), dict, [...ans, prefix]);
    }
  }
}

s = "pineapplepenapple";
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
console.log(wordBreak(s, wordDict));

function wordBreak(s, wordDict) {
  result = [];
  breakWord(s, 0, s.length, wordDict, '');
  return result;
}

function breakWord(s, i, n, wordDict, ans) {
  if (i >= n) {
    result.push(ans.trim())
    return 
  }

  for (let w of wordDict) {
    if (n - i < w.length) continue;
    if (s.substring(i, i + w.length) != w) continue;
    breakWord(s, i+w.length, n, wordDict, ans + w + ' ')
  }
}
