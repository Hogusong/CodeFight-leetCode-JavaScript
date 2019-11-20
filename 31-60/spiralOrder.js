/*
  Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

  Input:  [  [ 1, 2, 3 ],  [ 4, 5, 6 ],  [ 7, 8, 9 ]  ]
  Output: [1,2,3,6,9,8,7,4,5]

  Input:  [  [1, 2, 3, 4], [5, 6, 7, 8],  [9, 10, 11, 12]  ]
  Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

//  Layer by Layer 
function spiralOrder(matrix) {
  if (matrix.length < 1) return [];
  const m = matrix.length - 1;
  const n = matrix[0].length - 1;
  let top = 0, right = n, bottom = m, left = 0;
  const ans = [];
  while (ans.length < (m+1) * (n+1)) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    if (ans.length >= (m+1) * (n+1)) return ans;
    top++;
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right])
    }
    if (ans.length >= (m+1) * (n+1)) return ans;
    right--;
    for (let i = right; i >= left; i--) {
      ans.push(matrix[bottom][i])
    }
    if (ans.length >= (m+1) * (n+1)) return ans;
    bottom--;
    for (let i = bottom; i >= top; i--) {
      ans.push(matrix[i][left]);
    }
    left++;
  }
  return ans;
}

matrix = [  [1, 2, 3, 4], [5, 6, 7, 8],  [9, 10, 11, 12]  ];
matrix = [  [1, 2, 3, 4], [5, 6, 7, 8],  [9, 10, 11, 12], [13, 14, 15, 16]  ];
console.log(spiralOrder(matrix));

//  Simulation
function spiralOrderS(matrix) {
  if (matrix.length < 1) return [];
  const m = matrix.length,  n = matrix[0].length;
  let seen = [], ans = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(false);
    }
    seen.push(row);
  }

  let dr = [0, 1, 0, -1],  dc = [1, 0, -1, 0];
  let r = 0, c = 0, di = 0;
  for (let i = 0; i < m * n; i++) {
    ans.push(matrix[r][c]);
    seen[r][c] = true;
    const cr = r + dr[di];
    const cc = c + dc[di];
    if (cr >= 0 && cr < m && cc >= 0 && cc < n && !seen[cr][cc]) {
      r = cr;
      c = cc;
    } else {
      di = (di + 1) % 4;
      r += dr[di];
      c += dc[di];
    }
  }
  return ans;
}

console.log(spiralOrderS(matrix));
matrix = [  [ 1, 2, 3 ],  [ 4, 5, 6 ],  [ 7, 8, 9 ]  ];
console.log(spiralOrderS(matrix));

var spiralOrder = function(matrix) {
  const rows = matrix.length;
  if (rows < 1) return [];
  if (rows < 2) return matrix[0];
  const cols = matrix[0].length;
  let ans = [], r = 0, c = 0;
  let top = 0, bottom = rows-1, left = 0, right = cols-1, count = 0;
  let direction = 'R';
  while ( count < rows * cols) {
    ans.push(matrix[r][c])
    if (direction === 'R') {
      if (c === right) {
        direction = 'D';
        r++;
        top++;
      } else c++;
    } else if (direction === 'D') {
      if (r === bottom) {
        direction = 'L';
        c--;
        right--;
      } else r++;
    } else if (direction === 'L') {
      if (c === left) {
        direction = 'U';
        r--;
        bottom--;
      } else c--; 
    } else {
      if (r === top) {
        direction = 'R';
        left++;
        c++;
      } else r--;
    }
    count++;
  }
  return ans;
}
