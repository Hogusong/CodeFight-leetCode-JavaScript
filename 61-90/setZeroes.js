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
