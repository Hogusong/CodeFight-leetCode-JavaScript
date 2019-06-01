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
