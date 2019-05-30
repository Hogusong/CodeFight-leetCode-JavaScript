/*
  Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.

  '?' Matches any single character.
  '*' Matches any sequence of characters (including the empty sequence).
  The matching should cover the entire input string (not partial).

  Note: s could be empty and contains only lowercase letters a-z.
        p could be empty and contains only lowercase letters a-z, and characters like ? or *.

  Input:  s = "aa",   p = "a"           Output: false
  Explanation: "a" does not match the entire string "aa".

  Input:  s = "aa",   p = "*"           Output: true
  Explanation: '*' matches any sequence.

  Input:  s = "cb",   p = "?a"          Output: false
  Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

  Input:  s = "adceb",  p = "*a*b"      Output: true
  Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".

  Input:  s = "acdcb",  p = "a*c?b"     Output: false
*/

function isMatching(s, p) {

}