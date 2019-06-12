/*
  Given a triangle, find the minimum path sum from top to bottom. 
  Each step you may move to adjacent numbers on the row below.

  [    [2],
      [3,4],
     [6,5,7],
    [4,1,8,3]
  ]
  The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
*/

//  Recursion
function minPathTotal(triangle) {
  if (triangle.length < 1) return 0;
  minTotal = null;
  getPathTotal(triangle, 0, 0, 0);
  return minTotal; 
}

function getPathTotal(T, row, col, total) {
  total += T[row][col];
  if (row === T.length-1) {
    minTotal = (minTotal != null) ? Math.min(minTotal, total) : total;
    return
  }
  getPathTotal(T, row+1, col, total);
  getPathTotal(T, row+1, col+1, total);
}

T = [ [2], [3,4], [6,5,7], [4,1,8,3] ];
// T = [ [2] ];
// T = [ [2],  [3,4] ];
console.log(minPathTotal(T));

function minPathTotal2(triangle) {
  const R = triangle.length;
  if (R < 1) return 0;
  const C = triangle[R-1].length;

  const dp = [];
  for (let i = 0; i < R; i++) dp.push();

  for (let i = 1; i < R; i++) {
    for (let j = 0; j < i+1; j++) {
      if (j < 1) triangle[i][j] += triangle[i-1][0];
      else if (j === i) triangle[i][j] += triangle[i-1][j-1];
      else triangle[i][j] += Math.min(triangle[i-1][j-1], triangle[i-1][j]);
    }
  }

  console.log(triangle)
  return Math.min(...triangle[R-1]);
}
 
console.log(minPathTotal2(T));
