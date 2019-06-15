/*
  Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
  A region is captured by flipping all 'O's into 'X's in that surrounded region.

        X X X X                 X X X X
        X O O X       -->       X X X X
        X X O X                 X X X X
        X O X X                 X 0 X X
  Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. 
  Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. 
  Two cells are connected if they are adjacent cells connected horizontally or vertically.
*/

function solveBoard(board) {
  if (board.length < 3 || board[0].length < 3) return board;
  const m = board.length,  n = board[0].length, stack = [];
  dict = {};

  //  left --> right
  for (let i = 0; i < n; i++) {
    if (board[0][i] === 'O') {
      dict[0+':'+i] = 'O';
      stack.push([0, i]);
    }
    if (board[m-1][i] === 'O') {
      dict[(m-1)+':'+i] = 'O';
      stack.push([m-1, i]);
    }
  }
  //  top --> bottom
  for (let i = 1; i < m-1; i++) {
    if (board[i][0] === 'O') {
      dict[i+':'+0] = 'O';
      stack.push([i, 0]);
    }
    if (board[i][n-1] === 'O') {
      dict[i+':'+(n-1)] = 'O';
      stack.push([i, n-1]);
    }
  }
  
  while (stack.length > 0) {
    const [r,c] = stack.pop();
    if (isValid(r-1,c, m, n) && board[r-1][c] === 'O' && !dict[(r-1)+':'+c]) {
      dict[(r-1)+':'+c] = 'O';
      stack.push([r-1, c])
    }
    if (isValid(r+1,c, m, n) && board[r+1][c] === 'O' && !dict[(r+1)+':'+c]) {
      dict[(r+1)+':'+c] = 'O';
      stack.push([r+1, c])
    }
    if (isValid(r,c-1, m, n) && board[r][c-1] === 'O' && !dict[r+':'+(c-1)]) {
      dict[r+':'+(c-1)] = 'O';
      stack.push([r, c-1])
    }
    if (isValid(r,c+1, m, n) && board[r][c+1] === 'O' && !dict[r+':'+(c+1)]) {
      dict[r+':'+(c+1)] = 'O';
      stack.push([r, c+1])
    }
  }

  for (let i = 1; i < m-1; i++) {
    for (let j = 1; j < n-1; j++) {
      if (board[i][j] === 'O' && !dict[i+':'+j]) board[i][j] = 'X';
    }
  }
  return board;
}

function isValid(r, c, m, n) {
  return r > 0 && r < m-1 && c > 0 && c < n-1
}

B = [ ['X','X','X','X'],
      ['X','O','O','X'],
      ['X','X','O','X'],
      ['X','O','X','X'] ];
console.log(solveBoard(B));

B = [ ["O","X","X","O","X"],
      ["X","O","O","X","O"],
      ["X","O","X","O","X"],
      ["O","X","O","O","O"],
      ["X","X","O","X","O"]]
console.log(solveBoard(B));
