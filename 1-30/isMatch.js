/*
  Given an input string (s) and a p (p), implement regular expression matching with support for '.' and '*'.
  '.' Matches any single character.
  '*' Matches zero or more of the preceding element.
  The matching should cover the entire input string (not partial).

  s could be empty and contains only lowercase letters a-z.
  p could be empty and contains only lowercase letters a-z, and characters like . or *.

  Input:  s = "aa",  p = "a"                          Output: false
  Explanation: "a" does not match the entire string "aa".

  Input:  s = "aa",  p = "a*"                         Output: true
  Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

  Input:  s = "ab",  p = ".*"                         Output: true
  Explanation: ".*" means "zero or more (*) of any character (.)".

  Input:  s = "aab", p = "c*a*b"                      Output: true
  Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".

  Input:  s = "mississippi",  p = "mis*is*p*."        Output: false
*/

function isMatchDP(s, p) {
  if (p.length < 1) return s.length < 1;
  const m = s.length,  n = p.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    const row = []
    for (let j = 0; j <= n; j++) {
      row.push(false);
    }
    dp.push(row);
  }
  dp[0][0] = true;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i-1] === p[j-1] || p[j-1] === '.') dp[i][j] = dp[i-1][j-1];
      else if (p[j-1] === '*') dp[i][j] = dp[i-1][j] || dp[i][j-1];
    }
  }
  return dp[m][n];
}

s = "xaylmzx";
p = "x.y*bz.";
console.log(isMatchDP(s, p));
