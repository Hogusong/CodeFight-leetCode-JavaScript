/*
  Given n non-negative integers representing an elevation map where the width of each bar is 1, 
  compute how much water it is able to trap after raining.

  The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 

  Input: [0,1,0,2,1,0,1,3,2,1,2,1]      Output: 6
  In this case, 6 units of rain water are being trapped. Thanks Marcos for contributing this image!
*/

//  Brute Force
function trapBF(height) {
  let ans = 0, len = height.length;
  for (let i=1; i<len-1; i++) {
    let max_left = 0, max_right = 0;
    for (let j=i; j >= 0; j--) {
      max_left = Math.max(max_left, height[j]);
    }
    for (let j=i; j<len; j++) {
      max_right = Math.max(max_right, height[j]);
    }
    ans += Math.min(max_left, max_right) - height[i];
  }
  return ans;
}

console.log(trapBF([0,1,0,2,1,0,1,3,2,1,2,1]));
