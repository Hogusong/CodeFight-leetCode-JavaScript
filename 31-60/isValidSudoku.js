function isValidSudoku(board) {
  const rows = board.length;
  const cols = board[0].length;
  for (let r=0; r<rows; r++) {
    for (let c=0; c<cols; c++) {
      if (board[r][c] === '.') continue;
      if (!isValidRow(board[r], cols, c)) return false;
      if (!isValidCol(board, rows, r, c)) return false;
      if (!isValidSqare(board, r, c)) return false;
    }
  }
  return true;
}

function isValidRow(arr, cols, c) {
  for (let i=0; i<cols; i++) {
    if (i != c && arr[i] != '.' && arr[c] === arr[i]) return false;
  }
  return true;
}

function isValidCol(board, rows, r, c) {
  for (let i=0; i<rows; i++) {
    if (i != r && board[i][c] != '.' && board[r][c] === board[i][c]) return false;
  }
  return true;
}

function isValidSqare(board, r, c) {
  const r_from = Math.floor(r/3) * 3;
  const r_to = r_from + 3;
  const c_from = Math.floor(c/3) * 3;
  const c_to = c_from + 3;
  for (let i=r_from; i<r_to; i++) {
    for (let j=c_from; j<c_to; j++) {
      if (r === 1 && c === 3) console.log(i, j, board[i][j]);
      if ((i != r || j != c) && board[i][j] != '.' && board[i][j] === board[r][c]) return false;
    }
  } 
  return true;
}

board = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]     // false

console.log(isValidSudoku(board));

board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]     // true

console.log(isValidSudoku(board));

board = [
  [".",".",".",".","5",".",".","1","."],
  [".","4",".","3",".",".",".",".","."],
  [".",".",".",".",".","3",".",".","1"],
  ["8",".",".",".",".",".",".","2","."],
  [".",".","2",".","7",".",".",".","."],
  [".","1","5",".",".",".",".",".","."],
  [".",".",".",".",".","2",".",".","."],
  [".","2",".","9",".",".",".",".","."],
  [".",".","4",".",".",".",".",".","."]
]     // false

console.log(isValidSudoku(board));
