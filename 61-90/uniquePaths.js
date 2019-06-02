/*
  A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
  The robot can only move either down or right at any point in time. 
  The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
  How many possible unique paths are there?

  In a 7 x 3 grid. How many possible unique paths are there?
  Note: m and n will be at most 100.

  Input: m = 3, n = 2       Output: 3
  From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
      1. Right -> Right -> Down
      2. Right -> Down -> Right
      3. Down -> Right -> Right

  Input: m = 7, n = 3       Output: 28
*/

//  Brute Force
function uniquePathsBF(m, n) {
  if (m === 1 || n === 1) return 1;

  const arr = [];
  for (let i = 1; i < m; i++) arr.push('r');
  for (let i = 1; i < n; i++) arr.push('d');
  const permutationSet = getPermutation(arr);
  return convertToPath(permutationSet, arr);
}

function getPermutation(arr) {
  const len = arr.length;
  let index_arr = [];
  for (let i = 0; i < len; i++) index_arr[i] = i;
  return getPermutationSet(index_arr);
}

function getPermutationSet(arr) {
  let answer = [[]];
  for (let i = 0; i < arr.length; i++) {
    const temp = [...answer];
    answer = [];
    for (let j = 0; j < arr.length; j++) {
      for (let t of temp) {
        if (!t.includes(arr[j])) {
          answer.push([arr[j], ...t])
        }
      }
    }
  }
  return answer;
}

function convertToPath(permutationSet, B) {
  const dict = {}
  for (let P of permutationSet) {
    const path = getPath(P, B);
    if (!dict[path]) dict[path] = ''
  }
  return Object.keys(dict).length;
}

function getPath(P, B) {
  let path = '';
  for (let e of P) {
    path += B[e];
  }
  return path;
}

console.log(uniquePathsBF(3,2));
console.log(uniquePathsBF(7,3));

function uniquePaths(m, n) {
  if (m === 1 || n === 1) return 1;

  const arr = [];
  for (let i = 1; i < n; i++) arr.push('d');
  for (let i = 1; i < m; i++) arr.push('r');

  let result = [], used = [];
  for (let i=0; i<arr.length; i++) used[i] = false;

  // arr = arr.sort((a,b) => a - b);   //  do it if needed.

  permuteRec(result, [], arr, used, arr.length);
  return result.length;
}

function permuteRec(result, temp, arr, used, n) {
  if (n === 0) {
    result.push([...temp]);
    return;
  }
  for (let i = 0; i < used.length; i++) {
    if (used[i] || (i > 0 && arr[i] === arr[i-1]) && used[i-1]) continue;
    used[i] = true;
    temp.push(arr[i]);
    permuteRec(result, temp, arr, used, n-1);
    used[i] = false;
  }
}

console.log(uniquePaths(3,2));
console.log(uniquePaths(7,3));
