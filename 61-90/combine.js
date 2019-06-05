/*
  Given two integers n and k, 
  return all possible combinations of k numbers out of 1 ... n.

  Input: n = 4, k = 2
  Output: [ [2,4], [3,4], [2,3], [1,2], [1,3], [1,4], ]
*/

function combine(n, k) {
  if (n < k) return [];
  if (n === k) return makeArray(n);
  result = [];
  combineRec(n, k, 1, []);
  return result;
}

function combineRec(n, k, i, temp) {
  if (temp.length === k) {
    result.push(temp);
    return;
  }
  if (i > n) return;
  combineRec(n, k, i+1, [...temp, i]);
  combineRec(n, k, i+1, [...temp])
}

function makeArray(n) {
  const ans = [];
  for (let i = 1; i <= n; i++) ans.push(i);
  return [ans];
}

console.log(combine(4, 2));
