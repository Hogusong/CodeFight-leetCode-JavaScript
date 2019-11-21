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

var isMatch2 = function(s, p) {
  if (p.length < 1) return s.length < 1;
  return isMatchRec2(s, p, 0, 0);
}

function isMatchRec2(s, p, i, j) {
  if (p.length < j+1) return s.length < i+1;
  let first_match = (s.length > i && (p[j] == s[i] || p[j] == '.'));

  if (p.length > j+1 && p[j+1] == '*'){
    return (isMatchRec2(s, p, i, j+2) ||
            (first_match && isMatchRec2(s, p, i+1, j)));
  } else {
    return first_match && isMatchRec2(s, p, i+1, j+1);
  }
}

s = "aab",  p = "c*a*b";
console.log(isMatch(s, p));
console.log(isMatch2(s, p));
s = "xaylmzx",  p = "x.y*z.";
console.log(isMatch(s, p));
console.log(isMatch2(s, p));
s = "aa",  p = "a";
console.log(isMatch(s, p));
console.log(isMatch2(s, p));
s = "aab",  p = ".*.";
console.log(isMatch(s, p));
console.log(isMatch2(s, p));
