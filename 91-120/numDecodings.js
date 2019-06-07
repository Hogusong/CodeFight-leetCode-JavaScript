/*
  A message containing letters from A-Z is being encoded to numbers using the following mapping:

  'A', 'B', ... , 'Y', 'Z'   ->   1, 2, ... , 25, 26

  Given a non-empty string containing only digits, determine the total number of ways to decode it.

  Input: "12"           Output: 2
  Explanation: It could be decoded as "AB" (1 2) or "L" (12).

  Input: "226"          Output: 3
  Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
*/

function numDecodings(s) {
  if (s.length < 1 || s[0] === '0') return 0;

  count = 0;
  countPossibleDecodings(s, 0);
  return count;
}

function countPossibleDecodings(str, i) {
  if (str[i] === '0') return;

  if (i === str.length - 1) {
    count ++;
    return;
  }

  if (i + 1 === str.length - 1) {
    if (str.length && +str.substr(i, 2) <= 26) count ++
    countPossibleDecodings(str, i+1);    
    return
  }

  countPossibleDecodings(str, i+1);
  if (i+2 < str.length && +str.substr(i, 2) <= 26) {
    countPossibleDecodings(str, i+2);
  }  
}

Strings = ['123456', '1502658', '226'];
for (let s of Strings) console.log(numDecodings(s));
