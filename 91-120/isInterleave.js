/*
  Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

  Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
  Output: true

  Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
  Output: false
*/

function isInterleave(s1, s2, s3) {
  if (s1 === '' && s2 === '' && s3 === '') return true;
  if (s1.length + s2.length != s3.length) return false;
  if (s1[0] != s3[0] && s2[0] != s3[0]) return false;

  return isInterleaveRec(s1, 0, s2, 0, s3, 0);
}

function isInterleaveRec(s1, i, s2, j, s3, k) {
  if (i === s1.length) return s2.substring(j) === s3.substring(k);
  if (j === s2.length) return s1.substring(i) === s3.substring(k);
  if (s1[i] != s3[k] && s2[j] != s3[k]) return false;

  if (s1[i] === s3[k] && s2[j] === s3[k]) {
    return isInterleaveRec(s1, i+1, s2, j, s3, k+1) || isInterleaveRec(s1, i, s2, j+1, s3, k+1);
  } else if (s1[i] != s3[k]) {
    return isInterleaveRec(s1, i, s2, j+1, s3, k+1);
  } else return isInterleaveRec(s1, i+1, s2, j, s3, k+1);
}

function is_Interleave(s1, s2, s3) {
  if (s1.length + s2.length != s3.length) return false;
  if (s1[0] != s3[0] && s2[0] != s3[0]) return false;

  return is_InterleaveRec(s1, 0, s2, 0, s3, '');
}

function is_InterleaveRec(s1, i, s2, j, s3, str) {
  if (str === s3 && i == s1.length && j == s2.length) return true;
  let ans = false;
  if (i < s1.length) ans = ans || is_InterleaveRec(s1, i+1, s2, j, s3, str+s1[i]);
  if (j < s2.length) ans = ans || is_InterleaveRec(s1, i, s2, j+1, s3, str+s2[j]);
  return ans;
}

s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
console.log(isInterleave(s1, s2, s3));
s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
console.log(isInterleave(s1, s2, s3) + '\n');

s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
console.log(is_Interleave(s1, s2, s3));
s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
console.log(is_Interleave(s1, s2, s3) + '\n');
