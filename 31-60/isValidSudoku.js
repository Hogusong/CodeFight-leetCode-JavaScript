function isValidSudoku(board) {
  const rows = board.length;
  const cols = board[0].length;
  for (let r=0; r<rows; r++) {
    for (let c=0; c<cols; c++) {
      const value = board[r][c];
      if (value === '.') continue;
      if (!isValidRow(board[r], value, cols, c)) return false;
      if (!isValidCol(board, value, rows, r, c)) return false;
      if (!isValidSqare(board, value, r, c)) return false;
    }
  }
  return true;
}

function isValidRow(arr, value, cols, c) {
  for (let i=0; i<cols; i++) {
    if (i != c && value === arr[i]) return false;
  }
  return true;
}

function isValidCol(board, value, rows, r, c) {
  for (let i=0; i<rows; i++) {
    if (i != r && value === board[i][c]) return false;
  }
  return true;
}

function isValidSqare(board, value, r, c) {
  const r_from = Math.floor(r/3) * 3;
  const c_from = Math.floor(c/3) * 3;
  for (let i=r_from; i<r_from+3; i++) {
    for (let j=c_from; j<c_from+3; j++) {
      if ((i != r || j != c) && board[i][j] === value) return false;
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

function isSudokuValid(board) {
  return checkRows(board) && checkCols(board) && checkSquare(board);
}

function checkRows(board) {
  for (let row of board) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] != '.') {
        for (let j = 0; j < row.length; j++) {
          if (i != j && row[i] === row[j]) return false;
        }
      }
    }
  }
  return true;
}

function checkCols(board) {
  for (let c = 0; c < board.length; c++) {
    for (let r = 0; r < board.length; r++) {
      if (board[r][c] != '.') {
        for (let k = 0; k < board.length; k++) {
          if (r != k && board[r][c] === board[k][c]) return false; 
        }
      }
    }
  }
  return true;
}

function checkSquare(board) {
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      for (let r = x*3; r < (x+1)*3; r++) {
        for (let c = y*3; c < (y+1)*3; c++) {
          if (board[r][c] != '.') {
            for (let i = x*3; i < (x+1)*3; i++) {
              for (let j = y*3; j < (y+1)*3; j++) {
                if ((r != i && c != j) && board[r][c] === board[i][j]) return false;
              }
            }
          }
        }
      }
    }
  }
  return true;
}
