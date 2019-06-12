/*
  Given a string S and a string T, count the number of distinct subsequences of S which equals T.

  A subsequence of a string is a new string which is formed from the original string by deleting some 
  (can be none) of the characters without disturbing the relative positions of the remaining characters. 
  (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

  Input: S = "rabbbit",   T = "rabbit"        Output: 3
  As shown below, there are 3 ways you can generate "rabbit" from S.
  (The caret symbol ^ means the chosen letters)

  rabbbit     rabbbit    rabbbit
  ^^^^ ^^     ^^ ^^^^    ^^^ ^^^

  Input: S = "babgbag",   T = "bag"           Output: 5
  
  babgbag     babgbag     babgbag     babgbag     babgbag
  ^^ ^        ^^    ^     ^    ^^       ^  ^^         ^^^
*/

//  Using Array ( It takes too long. No good)
function numDistinct(s, t) {
  if (s.length < 1) return  (t.length < 1) ? 1 : 0;
  if (s.length < t.length) return 0;
  if (!s.includes(t[0])) return 0;
  if (s === t) return 1;
  const loc = findIndex(s, t[0], 0);
  count = 0
  findPossibleNum(s, t, 1, [...loc]);
  return count;
}

function findPossibleNum(s, target, i, loc) {
  if (i > target.length-1) {
    count += loc.length
    return ;
  }
  const temp = [...loc];
  loc = [];
  for (let j of temp) {
    loc = findIndex(s, target[i], j+1)
    if (loc.length > 0) findPossibleNum(s, target, i+1, [...loc]);
  }
}

function findIndex(s, chr, i) {
  const arr = [];
  let index = s.indexOf(chr, i);
  while (index >= i) {
    arr.push(index);
    i = index + 1;
    index = s.indexOf(chr, i);
  }
  return arr;
}

s = "babgbag";
t = "bag";
console.log(numDistinct(s, t));
