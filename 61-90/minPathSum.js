/*
  Given a m x n grid filled with non-negative numbers, 
  find a path from top left to bottom right which minimizes the sum of all numbers along its path.

  Note: You can only move either down or right at any point in time.

  Input:  [ [1,3,1],
            [1,5,1],
            [4,2,1] ]           Output: 7
  Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

function minPathSum(grid) {
  const m = grid.length - 1;
  const n = grid[0].length - 1;
  min_sum = null;
  uniquePathsRec(grid, m, n, 0, 0, 0);
  return min_sum;
};

function uniquePathsRec(grid, m, n, r, c, sum) {
  sum += grid[r][c];
  if (m === r && n === c) {
    min_sum = (min_sum != null) ? Math.min(min_sum, sum) : sum;
    return;
  }
  if (r+1 <= m) uniquePathsRec(grid, m, n, r+1, c, sum);
  if (c+1 <= n) uniquePathsRec(grid, m, n, r, c+1, sum);
}

matrix = [[7,1,3,5,8,9,9,2,1,9,0,8,3,1,6,6,9,5],[9,5,9,4,0,4,8,8,9,5,7,3,6,6,6,9,1,6],[8,2,9,1,3,1,9,7,2,5,3,1,2,4,8,2,8,8],[6,7,9,8,4,8,3,0,4,0,9,6,6,0,0,5,1,4],[7,1,3,1,8,8,3,1,2,1,5,0,2,1,9,1,1,4],[9,5,4,3,5,6,1,3,6,4,9,7,0,8,0,3,9,9],[1,4,2,5,8,7,7,0,0,7,1,2,1,2,7,7,7,4],[3,9,7,9,5,8,9,5,6,9,8,8,0,1,4,2,8,2],[1,5,2,2,2,5,6,3,9,3,1,7,9,6,8,6,8,3],[5,7,8,3,8,8,3,9,9,8,1,9,2,5,4,7,7,7],[2,3,2,4,8,5,1,7,2,9,5,2,4,2,9,2,8,7],[0,1,6,1,1,0,0,6,5,4,3,4,3,7,9,6,1,9]];
// matrix = [ [1,3,1,3,1], [1,2,5,2,1], [2,4,2,2,1] ]
console.time('Recursion')
console.log(minPathSum(matrix));
console.timeEnd('Recursion')

function minPathSumDP(grid) {
  dict = {};
  return minCost(grid, grid.length-1, grid[0].length-1)
}

function minCost(cost, m, n) {
  if (n < 0 || m < 0) return 100000;
  else if (m === 0 && n === 0) {
    return cost[0][0];
  }

  if (!dict[(m-1) + ':' + n]) dict[(m-1) + ':' + n] = (m > 0) ? minCost(cost, m-1, n) : 100000;
  if (!dict[m + ':' + (n-1)]) dict[m + ':' + (n-1)] = (n > 0) ? minCost(cost, m, n-1) : 100000;
  return cost[m][n] + Math.min(dict[(m-1) + ':' + n], dict[m + ':' + (n-1)]);
}

matrix = [[7,1,3,5,8,9,9,2,1,9,0,8,3,1,6,6,9,5],[9,5,9,4,0,4,8,8,9,5,7,3,6,6,6,9,1,6],[8,2,9,1,3,1,9,7,2,5,3,1,2,4,8,2,8,8],[6,7,9,8,4,8,3,0,4,0,9,6,6,0,0,5,1,4],[7,1,3,1,8,8,3,1,2,1,5,0,2,1,9,1,1,4],[9,5,4,3,5,6,1,3,6,4,9,7,0,8,0,3,9,9],[1,4,2,5,8,7,7,0,0,7,1,2,1,2,7,7,7,4],[3,9,7,9,5,8,9,5,6,9,8,8,0,1,4,2,8,2],[1,5,2,2,2,5,6,3,9,3,1,7,9,6,8,6,8,3],[5,7,8,3,8,8,3,9,9,8,1,9,2,5,4,7,7,7],[2,3,2,4,8,5,1,7,2,9,5,2,4,2,9,2,8,7],[0,1,6,1,1,0,0,6,5,4,3,4,3,7,9,6,1,9]];
// matrix = [ [1,3,1,3,1], [1,2,5,2,1], [2,4,2,2,1] ]
console.time('Dynamic')
console.log(minPathSumDP(matrix));
console.timeEnd('Dynamic')

function minPathSumTable(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const table = [];
  for (let i = 0; i < m; i++) {
    const row = []
    for (let j = 0; j < n; j++) row.push(0);
    table.push(row);
  }
  table[0][0] = grid[0][0];

  for (let i = 1; i < m; i++) table[i][0] = table[i-1][0] + grid[i][0];

  for (let i = 1; i < n; i++) table[0][i] = table[0][i-1] + grid[0][i];

  for (let i = 1; i < m; i++) for(let j = 1; j < n; j++) {
    table[i][j] = grid[i][j] + Math.min(table[i-1][j], table[i][j-1]);
  }
 
  return table[m-1][n-1];
}

matrix = [[7,1,3,5,8,9,9,2,1,9,0,8,3,1,6,6,9,5],[9,5,9,4,0,4,8,8,9,5,7,3,6,6,6,9,1,6],[8,2,9,1,3,1,9,7,2,5,3,1,2,4,8,2,8,8],[6,7,9,8,4,8,3,0,4,0,9,6,6,0,0,5,1,4],[7,1,3,1,8,8,3,1,2,1,5,0,2,1,9,1,1,4],[9,5,4,3,5,6,1,3,6,4,9,7,0,8,0,3,9,9],[1,4,2,5,8,7,7,0,0,7,1,2,1,2,7,7,7,4],[3,9,7,9,5,8,9,5,6,9,8,8,0,1,4,2,8,2],[1,5,2,2,2,5,6,3,9,3,1,7,9,6,8,6,8,3],[5,7,8,3,8,8,3,9,9,8,1,9,2,5,4,7,7,7],[2,3,2,4,8,5,1,7,2,9,5,2,4,2,9,2,8,7],[0,1,6,1,1,0,0,6,5,4,3,4,3,7,9,6,1,9]];
// matrix = [ [1,3,1,3,1], [1,2,5,2,1], [2,4,2,2,1] ]
console.time('Using table')
console.log(minPathSumTable(matrix));
console.timeEnd('Using table')

// without using extra space.
var minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  for (let r = 1; r < m; r++) grid[r][0] += grid[r-1][0];
  for (let c = 1; c < n; c++) grid[0][c] += grid[0][c-1];
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      grid[r][c] += Math.min(grid[r-1][c], grid[r][c-1]); 
    }
  }
  return grid[m-1][n-1];
}
