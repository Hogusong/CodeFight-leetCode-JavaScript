/*
  Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
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

//  Recursion
function isMatch(s, p) {
  if (p.length < 1) return s.length < 1;
  let first_match = (s.length > 0 && (p[0] == s[0] || p[0] == '.'));

  if (p.length >= 2 && p[1] == '*'){
    return (isMatch(s, p.substring(2)) ||
            (first_match && isMatch(s.substring(1), p)));
  } else {
    return first_match && isMatch(s.substring(1), p.substring(1));
  }
}

s = "mississippi";
p = "mis*is*p*.";
console.log(isMatch(s, p));
