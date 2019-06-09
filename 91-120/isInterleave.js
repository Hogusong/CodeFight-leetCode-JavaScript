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

function isInterleaveDP(s1, s2, s3) {
  if (s1 === '' && s2 === '' && s3 === '') return true;
  if (s1.length + s2.length != s3.length) return false;
  if (s1[0] != s3[0] && s2[0] != s3[0]) return false;

  dict = {};
  return isInterleaveRecDP(s1, 0, s2, 0, s3, 0);
}

function isInterleaveRecDP(s1, i, s2, j, s3, k) {
  if (s1[i] != s3[k] && s2[j] != s3[k]) return false;
  if (k === s3.length - 1) {
    if (i >= s1.length) return s3[k] === s2[j];
    else return s3[k] === s1[i];
  }

  if (!dict[(i+1)+':'+j]) dict[(i+1)+':'+j] = isInterleaveRecDP(s1, i+1, s2, j, s3, k+1);
  if (!dict[i+':'+(j+1)]) dict[i+':'+(j+1)] = isInterleaveRecDP(s1, i, s2, j+1, s3, k+1);

  if (s1[i] === s3[k] && s2[j] === s3[k]) {
    return dict[(i+1)+':'+j] || dict[i+':'+(j+1)];
  } else if (s1[i] != s3[k]) {
    return dict[i+':'+(j+1)];
  } else return dict[(i+1)+':'+j];
}

s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
console.log(isInterleaveDP(s1, s2, s3));
s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
console.log(isInterleaveDP(s1, s2, s3) + '\n');

//  Using table
function interleaving(s1, s2, s3) {
  table = [];
  for (let i = 0; i <= s1.length; i++) {
    const row = [];
    for (let j = 0; j <= s2.length; j++) {
      row[j] = -1;
    }
    table.push(row);
  }
  return interleavingTable(s1, 0, s2, 0, s3, 0)
}

function interleavingTable(s1, i, s2, j, s3, k) {
  if (i === s1.length) return s2.substring(j) === s3.substring(k);
  if (j === s2.length) return s1.substring(i) === s3.substring(k);
  if (s1[i] != s3[k] && s2[j] != s3[k]) return false;

  if (table[i+1][j] < 0) {
    table[i+1][j] = interleavingTable(s1, i+1, s2, j, s3, k+1) ? 1 : 0;
  }
  if (table[i][j+1] < 0) {
    table[i][j+1] = interleavingTable(s1, i, s2, j+1, s3, k+1) ? 1 : 0;
  }
  //  1 for 'true',  0 for 'false'.
  if (s1[i] === s3[k] && s2[j] === s3[k]) {
    return table[i+1][j] > 0 || table[i][j+1] > 0;
  } else if (s1[i] != s3[k]) {
    return table[i][j+1] > 0;
  } else {
    return table[i+1][j] > 0;  
  }
}

s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
console.log(interleaving(s1, s2, s3));
s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
console.log(interleaving(s1, s2, s3) + '\n');
