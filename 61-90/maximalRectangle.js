/*
  Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

  Input:  [   ["1","0","1","0","0"],          Output: 6
              ["1","0","1","1","1"],
              ["1","1","1","1","1"],
              ["1","0","0","1","0"]  ]
*/

function maximalRectangle(matrix) {
  if (matrix.length < 1 || matrix[0].length < 1) return 0;
  let max_area = 0, previousRow = null;
  for (let i = 0; i < matrix.length; i++) {
    const row = createRow(previousRow, matrix[i])
    previousRow = row;
    const area = findMaxAreaInRow(row);
    max_area = Math.max(max_area, area);
  }
  return max_area;
}

function createRow(Pre, Curr) {
  if (!Pre) return Curr.map( a => +a);

  const H = [];
  for (let i = 0; i < Curr.length; i++) {
    H[i] = (Curr[i] === '0') ? 0 : +Pre[i] + +Curr[i]; 
  }
  return H
}

function findMaxAreaInRow(H) {
  if (H.length === 1) return +H[0];

  let stack = [], index = 0, max_area = 0;
  while (index < H.length) {
    if (stack.length < 1 || H[stack[stack.length-1]] <= H[index]) {
      stack.push(index++); 
    } else max_area = findMaxArea(H, stack, index, max_area)
  }
  while (stack.length > 0) {
    max_area = findMaxArea(H, stack, index, max_area);
  }
  return max_area;
}

function findMaxArea(H, stack, index, max_area) {
  const top = stack.pop();
  let area = 0
  if (stack.length < 1) area = H[top] * index;
  else  area = H[top] * (index - stack[stack.length-1] - 1);
  
  return Math.max(max_area, area);
}

input = [ ["1","0","1","0","0"],
          ["1","0","1","1","1"],
          ["1","1","1","1","1"],
          ["1","0","0","1","0"] ]

console.log(maximalRectangle(input));
