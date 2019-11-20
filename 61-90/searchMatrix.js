/*
  Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

  Integers in each row are sorted from left to right.
  The first integer of each row is greater than the last integer of the previous row.

  Input: matrix = [ [1,   3,  5,  7],
                    [10, 11, 16, 20],
                    [23, 30, 34, 50] ]
  target = 3,                     Output: true

  Input: matrix = [ [1,   3,  5,  7],
                    [10, 11, 16, 20],
                    [23, 30, 34, 50] ]
  target = 13,                    Output: false
*/

function searchMatrix(matrix, target) {
  if (matrix.length < 1) return false;
  const m = matrix.length - 1,  n = matrix[0].length - 1;
  let r = null;
  for (let i = 0; i <= m; i++) {
    if (matrix[i][0] <= target && target <= matrix[i][n]) {
      r = i;
      break;
    }
  }
  if (r != null) return findTarget(matrix[r], 0, n, target);
  return false;
}

function findTarget(L, s, e, t) {
  if (s === e) return L[s] === t;
  const center = Math.floor((s + e) / 2);
  if (L[center] === t) return true;
  if (L[center] < t && center < e) return findTarget(L, center+1, e, t);
  if (L[center] > t && center > s) return findTarget(L, s, center-1, t);
  return false;
}

input = [ [1,   3,  5,  7],
          [10, 11, 16, 20],
          [23, 30, 34, 50] ];
target = 13;
console.log(searchMatrix(input, target));
target = 11;
console.log(searchMatrix(input, target));

var searchMatrix = function(matrix, target) {
  const row = findRow(matrix, target, 0, matrix.length-1);
  if (row < 0) return false;
  return searchInRow(matrix[row], target, 0, matrix[row].length-1)
}

function findRow(M, T, s, e) {
  if (s === e) {
    if (M[s][0] <= T && T <= M[s][M[s].length-1]) return s;
    return -1;
  }
  if (s > e) return -1;

  const mid = Math.floor((s + e) / 2);
  if (T < M[mid][0]) return findRow(M, T, s, mid-1);
  if (T > M[mid][M[mid].length-1]) return findRow(M, T, mid+1, e);
  return mid;
}

function searchInRow(M, T, s, e) {
  if (s === e) return M[s] === T;
  if (s > e) return false;

  const mid = Math.floor((s + e) / 2);
  if (T < M[mid]) return searchInRow(M, T, s, mid-1);
  if (T > M[mid]) return searchInRow(M, T, mid+1, e);
  return true;
}
