/*
  can make all unique subsets which has k element.
  [0,1,2,3]  --> [ [0,1], [0,2], [0,3], [1,2], [1,3], [2,3]]
*/

function combine(arr, k) {
  const n = arr.length;
  if (n < k) return [];
  if (n === k) return [arr];
  result = [];
  combineRec(arr, k, 0, []);
  return result.length;
}

function combineRec(arr, k, i, temp) {
  if (temp.length === k) {
    result.push(temp);
    return;
  }
  if (i >= arr.length) return;
  combineRec(arr, k, i+1, [...temp, arr[i]]);
  combineRec(arr, k, i+1, [...temp])
}

//  Iterative Algorithim
function uniqueSubsets(arr, k) {
  const subSets = combineIter(arr.length, k);
  const result = [];
  for (let S of subSets) {
    const temp = [];
    for (let j = 0; j < S.length; j++) {
      temp[j] = arr[S[j]];
    }
    result.push(temp)
  }
  return result.length;
}

function combineIter(n, k) {
  const result = [];
  const arr = [];
  for (let i = 0; i < k; i++) arr.push(i);
  
  while (arr[k-1] < n) {
    result.push([...arr]);
    let t = k - 1;
    while (t > 0 && arr[t] === n - k + t) {
      t--;
    }
    arr[t]++;
    for (let i = t + 1; i < k; i++) {
      arr[i] = arr[i-1] + 1;
    }
  }
  return result;
}

Ns = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50];
console.time('Recursion');
console.log(combine(Ns, 8));
console.timeEnd('Recursion');

console.time('Iterative');
console.log(uniqueSubsets(Ns, 8));
console.timeEnd('Iterative');
