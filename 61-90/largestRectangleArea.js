/*
  Given n non-negative integers representing the histogram's bar height 
  where the width of each bar is 1, find the area of largest rectangle in the histogram.

  Input: [2,1,5,6,2,3]      Output: 10    5 + 5
  Input: [2,1,5,6,3,3]      Output: 12    3 + 3 + 3 + 3
  Input: [3,4,3,0,5,6]      Output: 10    3 + 3 + 3 < 5 + 5 
*/

function largestRectangleArea(heights) {
  const len = heights.length;
  if (len < 1) return 0;
  if (len < 2) return heights[0];

  let max_area = 0, area = 0, stack = [], index = 0;
  while (index < len) {
    if (stack.length < 1 || heights[stack[stack.length-1]] <= heights[index]) {
      stack.push(index++);
    } else {
      max_area = getMaxArea(heights, stack, index, max_area);
    }
  }
  while (stack.length > 0) {
    max_area = getMaxArea(heights, stack, len, max_area)
  }
  return max_area;
}

function getMaxArea(heights, stack, index, max_area) {
  const top = stack.pop();
  if (stack.length < 1) area = heights[top] * index;
  else area = heights[top] * (index - stack[stack.length-1] - 1);
  return Math.max(max_area, area);
}

input = [ [2,1,5,6,2,3], [2,1,3,6,2,3], [3,4,3,0,4,6], [2,3,2,5,4,6,2,3] ];
for (let ip of input) console.log(largestRectangleArea(ip));
console.log(largestRectangleArea([2,3,1,5,4,6,2,3]))
