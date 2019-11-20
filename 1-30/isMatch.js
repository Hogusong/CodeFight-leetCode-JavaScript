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

  Input:  s = "aab", p = "c*a*b"                      Output: false
  Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".

  Input:  s = "mississippi",  p = "mis*is*p*."        Output: true
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

s = "aab",  p = "c*a*b";
console.log(isMatchDP(s, p));
console.log(isMatch(s, p));
s = "xaylmzx",  p = "x.y*z.";
console.log(isMatchDP(s, p));
console.log(isMatch(s, p));
s = "aa",  p = "a";
console.log(isMatchDP(s, p));
console.log(isMatch(s, p));
s = "aab",  p = ".*.";
console.log(isMatchDP(s, p));
console.log(isMatch(s, p));

//  Wrong answer ------------  which is in LeetCode solution.
function isMatch(s, p) {
  if (p.length < 1) return s.length < 1;
  result = [];
  for (let i = 0; i <= s.length; i++) {
    const row = [];
    for (let j = 0; j <= p.length; j++) row.push('');
    result.push(row);
  }
  return recursion(0, 0, s, p);
}

function recursion(i, j, s, p) {
  if (result[i][j]) return result[i][j] === 'T';
  let ans, first_match;
  if (j == p.length) ans = i == s.length;
  else {
    first_match = (i < s.length && (p[j] == s[i] || p[j] == '.'));
    if (j + 1 < p.length && p[j+1] == '*') {
      ans = recursion(i, j+2, s, p) || first_match && recursion(i+1, j, s, p)
    } else {
      ans = first_match && recursion(i+1, j+1, s, p);
    }
  }
  result[i][j] = ans ? 'T' : 'F';
  return ans;  
}

var isMatch = function(s, p) {
  if (p.length < 1) return s.length < 1;
  let first_match = (s.length > 0 && (p[0] == s[0] || p[0] == '.'));

  if (p.length > 1 && p[1] == '*'){
    return (isMatch(s, p.substring(2)) ||
            (first_match && isMatch(s.substring(1), p)));
  } else {
    return first_match && isMatch(s.substring(1), p.substring(1));
  }
};