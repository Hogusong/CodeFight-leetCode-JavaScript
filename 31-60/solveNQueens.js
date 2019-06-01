/*
  The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
  Given an integer n, return all distinct solutions to the n-queens puzzle.
  Each solution contains a distinct board configuration of the n-queens' placement, 
  where 'Q' and '.' both indicate a queen and an empty space respectively.

  Input: 4
  Output: [
            [".Q..",  // Solution 1
              "...Q",
              "Q...",
              "..Q."],

            ["..Q.",  // Solution 2
              "Q...",
              "...Q",
              ".Q.."]
          ]
  Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
*/

function solveNQueens(n) {
  board = createBoard(n);
  if (!solveNQ_Util(board, 0)) return false;
  console.log(board);
  return true;
}

function solveNQ_Util(board, col) {
  const n = board.length
  if (col === n) return true;

  for (let i = 0; i < n; i++) {
    if (isSafe(board, i, col, n)) {
      board[i][col] = 'Q';
      if (solveNQ_Util(board, col+1)) return true;
      board[i][col] = '.';
    }
  }
  return false;
}

function isSafe(board, row, col, n) {
  //  Check this row on left side
  for (let i = 0; i < col; i++) {
    if (board[row][i] === 'Q') return false
  }

  //  Check upper diagonal on left side
  for (let i = row; i >= 0; i--) {
    for (let j = col; j >= 0; j--) {
      if (board[i][j] === 'Q') return false
    }
  }

  //  Check lower diagonal on left side
  for (let i = row; i < n; i++) {
    for (let j = col; j >= 0; j--) {
      if (board[i][j] === 'Q') {
        return false
      }
    }
  }
  return true;
}

function createBoard(n) {
  const temp = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push('.');
    }
    temp.push(row);
  }
  return temp;
}

console.log(solveNQueens(4));
