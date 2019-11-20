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

N = 4, K = 2;
console.log(combine(N, K));

//  Iterative Algorithm
function combineIter(n, k) {
  const result = [];
  const arr = [];
  for (let i = 1; i <= k; i++) arr.push(i);
  
  while (arr[k-1] <= n) {
    result.push([...arr]);
    let t = k - 1;
    while (t > 0 && arr[t] === n - k + t + 1) {
      t--;
    }
    arr[t]++;
    for (let i = t + 1; i < k; i++) {
      arr[i] = arr[i-1] + 1;
    }
  }
  return result;
}

console.log(combineIter(N, K));

//  Brute Force
function combine(n, k) {
  if (n < k) return [];
  if (n === k) return makeArray(n);
  let stack = [[]],  count = 0;
  while (count < k) {
    const temp = [...stack];
    stack = [];
    for (let t of temp) {
      const start = (t.length < 1) ? 1 : t[t.length-1] + 1;
      for (let i = start; i <= n; i++) {
        if (!t.includes(i)) {
          stack.push([...t, i])
        }
      }
    }
    count ++;
  }
  return stack;
}
