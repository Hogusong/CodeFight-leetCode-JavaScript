/*
  Given a positive integer n, generate a square matrix filled with elements from 1 to n**2 in spiral order.

  Input: 3,     Output: [ [ 1, 2, 3 ], 
                          [ 8, 9, 4 ], 
                          [ 7, 6, 5 ] ]
*/

function generateMatrix(n) {
  if (n === 1) return [[1]];

  let count = 1, matrix = createMatrix(n);
  let top = 0, bottom = n - 1, left = 0, right = n - 1;
  while (count <= n * n) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = count++;
    }
    if (count > n * n) return matrix;
    top++;
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = count++;
    }
    if (count > n * n) return matrix;
    right--;
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = count++;
    }
    if (count > n * n) return matrix;
    bottom--;
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = count++;
    }
    left++;
  }
  return matrix;
}

function createMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push('.')
    }
    matrix.push(row);
  }
  return matrix;
}

console.log(generateMatrix(4));
