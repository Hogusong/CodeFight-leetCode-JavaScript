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
T = [ [2],  [3,4] ];
console.log(minPathTotal(T));
