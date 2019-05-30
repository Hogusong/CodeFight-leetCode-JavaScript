/*
  You are given an n x n 2D matrix representing an image.  Rotate the image by 90 degrees (clockwise).

  Given input matrix     rotate the input matrix in-place such that it becomes:
      [                             [
        [1,2,3],                      [7,4,1],
        [4,5,6],          ==>         [8,5,2],
        [7,8,9]                       [9,6,3]
      ],                            ],

      [                             [
        [ 5, 1, 9,11],                [15,13, 2, 5],
        [ 2, 4, 8,10],                [14, 3, 4, 1],
        [13, 3, 6, 7],    ==>         [12, 6, 8, 9],
        [15,14,12,16]                 [16, 7,10,11]
      ],                            ]
*/

function rotateMatrix(matrix) {
  const len = matrix.length;
  if (len < 2) return matrix;
  const result = [];
  for (let i = 0; i < len; i++) {
    const rows = [];
    for (let j = 0; j < len; j++) {
      rows.push(matrix[len-j-1][i])
    }
    result.push(rows)
  }
  return result;
}

matrix = [ [1,2,3], [4,5,6], [7,8,9] ]
console.log(rotateMatrix(matrix));
