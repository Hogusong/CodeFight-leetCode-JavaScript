/*
  You are given an n x n 2D matrix representing an image.  Rotate the image by 90 degrees (clockwise).

  You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
  DO NOT allocate another 2D matrix and do the rotation.

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

  // Rotate clockwise 
  reverseColumns(matrix, len);
  console.log(matrix)
  transpose(matrix, len);

  // Rotate anti-clockwise
  // transpose(matrix, len);
  // reverseColumns(matrix, len);
  console.log(matrix)
}

function reverseColumns(arr, len) {
  for (let i=0; i<len/2; i++) {
    [arr[i], arr[len-i-1]] = [arr[len-i-1], arr[i]]
  }
}

// function reverseColumns(arr, len) {
//   for (let i = 0; i < len; i++) {
//     j = 0;
//     k = len - 1
//     while (j < k) {
//       [arr[j][i], arr[k][i]] = [arr[k][i], arr[j][i]];
//       j++;
//       k--;
//     }
//   }
// }

function transpose(arr, len) {
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]]
    }
  }
}

matrix = [ [1,2,3], [4,5,6], [7,8,9] ]
matrix = [ [1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16] ]
rotateMatrix(matrix);
