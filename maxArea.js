/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). F
ind two lines, which together with x-axis forms a container, 
such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Input: [1,8,6,2,5,4,8,3,7]      Output: 49 = (9-2) * min(8,7) : (2,8) and (9,7)
*/

var maxAreaBF = function(H) {
  let maxArea = 0;
  for (let i=0; i<H.length; i++) {
      for (let j=H.length-1; j>i; j--) {
          maxArea = Math.max(maxArea, (j-i) * Math.min(H[i], H[j]))
      }
  }
  return maxArea;
};

input = [1,8,6,2,5,4,8,3,7]
console.log(maxAreaBF(input));
