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

//  Dynamic Programming
function trapDP(height) {
  let ans = 0, len = height.length, l_max = [], r_max = [];
  l_max[0] = height[0];
  for (let i=1; i<len; i++) {
    l_max[i] = Math.max(height[i], l_max[i-1]);
  }
  r_max[len-1] = height[len-1];
  for (let i=len-2; i>= 0; i--) {
    r_max[i] = Math.max(height[i], r_max[i + 1])
  }
  for (let i=1; i<len-1; i++) {
    ans += Math.min(l_max[i], r_max[i]) - height[i];
  }
  return ans;
}

console.log(trapDP([0,1,0,2,1,0,1,3,2,1,2,1]));

//  Using Point
function trapUsingPoint(height) {
  let ans = 0, left = 0, right = height.length - 1;
  let left_max = 0, right_max = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= left_max ? left_max = height[left] : ans += left_max - height[left];
      left++;
    } else {
      height[right] >= right_max ? right_max = height[right] : ans +=right_max - height[right];
      right--;
    }
  }
  return ans;
}

console.log(trapUsingPoint([0,1,0,2,1,0,1,3,2,1,2,1]));

//  Using Math
function trapMath(heights) {
  const len = height.length;
  let left = 0, right = 0, sum = 0, totalH = 0;
  for (let i = 0; i < len; i++) {
    left = Math.max(left, height[i]);
    right = Math.max(right, height[len - i - 1])
    totalH += height[i];
    sum += left + right;
  }
  return sum - totalH - right * len;
}

console.log(trapMath([0,1,0,2,1,0,1,3,2,1,2,1]));
