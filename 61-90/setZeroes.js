/*
  Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

  Input: [  [1,1,1],          Output: [ [1,0,1],
            [1,0,1],                    [0,0,0],
            [1,1,1] ]                   [1,0,1] ]

  Input: [  [0,1,2,0],        Output: [ [0,0,0,0],
            [3,4,5,2],                  [0,4,5,0],
            [1,3,1,5] ]                 [0,3,1,0] ]

  A straight forward solution using O(mn) space is probably a bad idea.
  A simple improvement uses O(m + n) space, but still not the best solution.
  Could you devise a constant space solution?
*/

//  Brute Force: Using Additional Memory.
function setZeroes(matrix) {
  const rows = [],  cols = [],  m = matrix.length,  n = matrix[0].length;
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) {
    if (matrix[i][j] === 0) {
      if (!rows.includes(i)) rows.push(i);
      if (!cols.includes(j)) cols.push(j);
    }
  }
  for (let r of rows) for (let j = 0; j < n; j++) matrix[r][j] = 0;
  for (let c of cols) for (let i = 0; i < m; i++) matrix[i][c] = 0;
  return matrix;
}

input = [ [0,1,2,0], 
          [3,4,5,2],          
          [1,3,1,5] ]         
console.log(setZeroes(input));

//  Brute Force: Using O(1) space
function setZeroesBFO1(matrix) {
  let SETZERO = null;
  let R = matrix.length;
  let C = matrix[0].length;
  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
    if (matrix[r][c] === 0) {
      for (let j = 0; j < C; j++) matrix[r][j] = matrix[r][j] != 0 ? SETZERO : matrix[r][j];
      for (let i = 0; i < R; i++) matrix[i][c] = matrix[i][c] != 0 ? SETZERO : matrix[i][c];
    }
  }

  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
    if (matrix[r][c] === SETZERO) matrix[r][c] = 0;
  }

  return matrix;
}

input = [ [0,1,2,0], 
          [3,4,5,2],          
          [1,3,1,5] ]         
console.log(setZeroesBFO1(input));
