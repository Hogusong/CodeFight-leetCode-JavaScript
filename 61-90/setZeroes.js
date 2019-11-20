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

//  Space Efficient Solution
function setZeroesEff(matrix) {
  let isCol = false;
  let R = matrix.length;
  let C = matrix[0].length;

  for (let i = 0; i < R; i++) {
    if (matrix[i][0] == 0) isCol = true;
    for (let j = 1; j < C; j++) {
      // If an element is zero, we set the first element of the corresponding row and column to 0
      if (matrix[i][j] == 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  console.log(matrix.join('\n'))
  // Iterate over the array once again and using the first row and first column, update the elements.
  for (let i = 1; i < R; i++) {
    for (let j = 1; j < C; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }
  console.log('\n' + matrix.join('\n'))

  // See if the first row needs to be set to zero as well
  if (matrix[0][0] == 0) {
    for (let j = 0; j < C; j++) {
      matrix[0][j] = 0;
    }
  }
  console.log('\n' + matrix.join('\n'))

  // See if the first column needs to be set to zero as well
  if (isCol) {
    for (let i = 0; i < R; i++) {
      matrix[i][0] = 0;
    }
  }
  console.log('\n' + matrix.join('\n'))
  return matrix;
}

input = [ [1,0,2,0], 
          [3,4,5,2],          
          [1,3,1,5] ]         
console.log(setZeroesEff(input));

var setZeroes = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (matrix[r][c] === 0) {
        for (let i = 0; i < n; i++) {
          if (matrix[r][i] != 0) matrix[r][i] = 'X';
        }
        for (let i = 0; i < m; i++) {
          if (matrix[i][c] != 0) matrix[i][c] = 'X';
        }
      }
    }
  }
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (matrix[r][c] === 'X') matrix[r][c] = 0;
    }
  }
  return matrix;
};