/*
  Given a string s, partition s such that every substring of the partition is a palindrome.
  Return all possible palindrome partitioning of s.

  Input:  "aab"
  Output: [ ["aa","b"], ["a","a","b"]  ]
*/

function partition(s) {
  if (s.length < 2) return [[s]];
  result = [];
  makeGroup(s, 0, s.length, []);
  return result;
} 

function makeGroup(s, i, n, arr) {
  if (i >= n) {
    result.push(arr);
    return;
  }

  for (let j = i+1; j <= n; j++) {
    if (isPolindrome(s, i, j-1)) makeGroup(s, j, n, [...arr, s.slice(i, j)]);
  }
}

function isPolindrome(str, start, end) {
  for (let i = 0; i < (end - start)/2; i++) {
    if (str[start+i] != str[end-i]) return false;
  }
  return true;
}

console.log(partition('aaba'));
