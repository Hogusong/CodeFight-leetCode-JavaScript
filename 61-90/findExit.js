/*
  Given a 2D board and a word, find if the word exists in the grid.

  The word can be constructed from letters of sequentially adjacent cell, 
  where "adjacent" cells are those horizontally or vertically neighboring. 
  The same letter cell may not be used more than once.

  Example:

  board =
  [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ]

  Given word = "ABCCED", return true.
  Given word = "SEE", return true.
  Given word = "ABCB", return false.
*/

function findExit(board, word) {
  if (word === '') return false;
  if (board.length < 1 || board[0].length < 1) return false;
  const start = findStartingPoint(board, word[0]);
  if (start.length < 1) return false;
  for (let S of start) {
    // if (findPathList(board, word.slice(1), S, [])) return true;
    if (findPathObj(board, word.slice(1), S, {})) return true;
  }
  return false;
}

function findPathList(B, W, S, dict) {
  dict.push(S.join(':'));
  if (!W) return true;
  let r = S[0], c = S[1], rows = B.length, cols = B[0].length;
  const next = [];
  if (r-1 >= 0 && B[r-1][c] === W[0] && !dict.includes((r-1)+':'+c)) next.push([r-1, c]);

  if (r+1 < rows && B[r+1][c] === W[0] && !dict.includes((r+1)+':'+c)) next.push([r+1, c]);

  if (c-1 >= 0 && B[r][c-1] === W[0] && !dict.includes(r+':'+(c-1))) next.push([r, c-1]);

  if (c+1 < cols && B[r][c+1] === W[0] && !dict.includes(r+':'+(c+1))) next.push([r, c+1]);

  for (let N of next) {
    const found = findPathList(B, W.slice(1), N, [...dict]);
    if (found) {
      return true;
    }
  }
  return false;
}

function findPathObj(B, W, S, dict) {
  dict[S.join(':')] = 1;
  if (!W) return true;
  let r = S[0], c = S[1], rows = B.length, cols = B[0].length;
  const next = [];
  if (r-1 >= 0 && B[r-1][c] === W[0] && !dict[(r-1)+':'+c]) next.push([r-1, c]);

  if (r+1 < rows && B[r+1][c] === W[0] && !dict[(r+1)+':'+c]) next.push([r+1, c]);

  if (c-1 >= 0 && B[r][c-1] === W[0] && !dict[r+':'+(c-1)]) next.push([r, c-1]);

  if (c+1 < cols && B[r][c+1] === W[0] && !dict[r+':'+(c+1)]) next.push([r, c+1]);

  for (let N of next) {
    const found = findPathObj(B, W.slice(1), N, Object.assign({}, dict));
    if (found) {
      return true;
    }
  }
  return false;
}

function findStartingPoint(board, s) {
  const ans = [];
  for (let r = 0; r < board.length; r++) {
    let index = -1;
    while(true) {
      index = board[r].indexOf(s, index+1);
      if (index >= 0) ans.push([r, index]);
      else break;
    }
  }
  return ans;
}

board = [ ['A','B','C','E'],
          ['S','F','C','S'],
          ['A','D','E','E'] ];
words = ["ABCCED", "SEE", "ABCB"];
for (let word of words) console.log(findExit(board, word)); // true, true, false
board = [ ["A","B","C","E"],
          ["S","F","E","S"],
          ["A","D","E","E"] ];
word = "ABCESEEEFS";
console.log(findExit(board, word));   // true
board = [ ["a","a","a","a"],
          ["a","a","a","a"],
          ["a","a","a","a"] ]
word = "aaaaaaaaaaaaa";
console.log(findExit(board, word));   //  false

function exist(board, word) {
  const m = board.length;
  const n = board[0].length;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === word[0]) {
        if (findWord(board, word, r, c, 1, [r+':'+c])) return true;
      }
    }
  }
  return false;
}

function findWord(B, W, r, c, i, path) {
  if (i === W.length) return true;
  let left = false, right = false, top = false, bottom = false;
  if (r-1 >= 0 && !path.includes(r-1 + ':' + c) && B[r-1][c] === W[i]) {
    top = findWord(B, W, r-1, c, i+1, [...path, (r-1)+':'+ c])
  }
  if (r+1 < B.length && !path.includes(r+1 + ':' + c) && B[r+1][c] === W[i]) {
    bottom = findWord(B, W, r+1, c, i+1, [...path, (r+1)+':'+ c])
  } 
  if (c-1 >= 0 && !path.includes(r + ':' + (c-1)) && B[r][c-1] === W[i]) {
    left = findWord(B, W, r, c-1, i+1, [...path, r+':'+(c-1)])
  }
  if (c+1 < B[0].length && !path.includes(r+':'+(c+1)) && B[r][c+1] === W[i]) {
    right = findWord(B, W, r, c+1, i+1, [...path, r+':'+(c+1)])
  } 
  return left || right || top || bottom;
}