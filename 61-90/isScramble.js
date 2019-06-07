/*
  Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.

  Below is one possible representation of s1 = "great":
      great
    /    \
    gr    eat
  / \    /  \
  g   r  e   at
            / \
            a   t
  To scramble the string, we may choose any non-leaf node and swap its two children.

  For example, if we choose the node "gr" and swap its two children, it produces a scrambled string "rgeat".
      rgeat
    /    \
    rg    eat
  / \    /  \
  r   g  e   at
            / \
            a   t
  We say that "rgeat" is a scrambled string of "great".

  Similarly, if we continue to swap the children of nodes "eat" and "at", it produces a scrambled string "rgtae".
      rgtae
    /    \
    rg    tae
  / \    /  \
  r   g  ta  e
        / \
        t   a
  We say that "rgtae" is a scrambled string of "great".

  Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.

  Input: s1 = "great", s2 = "rgeat"         Output: true
  Input: s1 = "abcde", s2 = "caebd"         Output: false
*/

function isScramble(s1, s2) {
  if (s1.length != s2.length) return false;
  if (s1 === s2) return true
  if (!isAnagram(s1, s2)) return false;

  return checkRec(s1, s2);
}

function checkRec(s1, s2) {
  if (s1 === s2) return true;
  if (s1.length != s2.length) return false;
  let scramble = false;
  const len = s1.length;
  for (let i = 1; i < len; i++) {
    scramble = scramble || 
               (checkRec(s1.substr(0,i), s2.substr(0,i)) && 
               checkRec(s1.substr(i,len-i), s2.substr(i, len-i))) 
               || 
               (checkRec(s1.substr(0,i), s2.substr(len-i, i)) &&
               checkRec(s1.substr(i, len-i), s2.substr(0, len-i))) 
  }
  return scramble;
}

function isAnagram(s1, s2) {
  for (let i = 0; i <s1.length; i++) if (!s2.includes(s1[i])) return false;
  return true;
}

console.log(isScramble('great', 'rgeat'));
console.log(isScramble('abcde', 'caebd'));
console.log(isScramble("abcdefghijklmnopq", "efghijklmnopqcadb"));
