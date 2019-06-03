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

//  Dynamic Programming
function uniquePathsDP(m, n) {
  dict = {};
  return uniquePathsRec(m, n);
}

function uniquePathsRec(m, n) {
  if (m === 1 || n === 1) return 1;
  if (!dict[(m-1) + ':' + n]) dict[(m-1) + ':' + n] = uniquePathsRec(m-1, n);
  if (!dict[m + ':' + (n-1)]) dict[m + ':' + (n-1)] = uniquePathsRec(m, n-1);
  return  dict[(m-1) + ':' + n] + dict[m + ':' + (n-1)];
}

console.log(uniquePathsDP(3,2));
console.log(uniquePathsDP(7,3));

//  Using Table
function uniquePathsUT(m, n) {
  const table = []
  //  Initialize the table
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      //  First row and column has only 1 possible path to reach.
      if (i === 0 || j === 0) row.push(1);
      //  Temporary set 0 for all other spots.
      else row.push(0)
    }
    table.push(row);
  }

  //  Calculate possible ways for each spot.
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        table[i][j] = table[i-1][j] + table[i][j-1];
      }
  }
  //  Get the answer from right-bottom corner and return it.
  return table[m-1][n-1];
}

console.log(uniquePathsUT(3,2));
console.log(uniquePathsUT(7,3));
