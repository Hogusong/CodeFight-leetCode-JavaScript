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
  if (s.length < 1) return p.length === 0 || p === '*';
  const table = setTable(s.length, p.length);
  table[0][0] = true;

  for (let j=1; j<=p.length; j++) {
    if (p[j-1] === '*') table[0][j] = table[0][j-1];
  }
  console.log(table)

  for (let i=1; i<=s.length; i++) {
    for (let j=1; j<=p.length; j++) {
      if (p[j-1] === '*') {
        table[i][j] = table[i][j-1] || table[i-1][j];
      } else if (p[j-1] === '?' || s[i-1] === p[j-1]) {
        table[i][j] = table[i-1][j-1] ;
      } else {
        table[i][j] = false;
      }
    }
  }
  console.log(table)
  return table[s.length][p.length];
}

function setTable(m, n) {
  const temp = [];
  for (let i=0; i<=m; i++) {
    const rows = [];
    for (let j=0; j<=n; j++) {
      rows[j] = false;
    }
    temp.push(rows);
  }
  return temp;
}

console.log(isMatching('abcde', '*d?'));
console.log(isMatching('abcde', 'a*e'));
