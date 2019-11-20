/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Your goal is to reach the last index in the minimum number of jumps.

Input: [2,3,1,1,4]    Output: 2
  Explanation: The minimum number of jumps to reach the last index is 2.
               Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/

function jumpBF(nums) {
  const n = nums.length
  if (n < 2) return 0;
  if (nums[0] == 0) return nums.length;
  const stack = [[0]];
  let index = 0;
  while (index < stack.length) {
    const temp = stack[index++];
    const lastIndex = temp[temp.length-1];
    if (lastIndex >= n - 1) return temp.length - 1;
    const endPoint = nums[lastIndex];
    for (let i = 1; i <= endPoint; i++) {
      stack.push([...temp, lastIndex + i])
    }
  }
  return n - 1;
}

function jumpDP(nums) {
  const n = nums.length
  if (n < 2) return 0;
  if (nums[0] == 0) return nums.length;

  const ans = [0];
  for (let i = 1; i < n; i++) {
    if (!ans[i]) ans[i] = n;
    for (let j = 0; j < nums[i-1]; j++ ) {
      if (ans[n-1] && ans[n-1] < n) return ans[n-1];
      ans[i+j] = !ans[i+j] ? ans[i-1] + 1 : Math.min(ans[i+j], ans[i-1]+1);
    }
  }
  return ans[n-1];
}

var jump = function(nums) {
  const n = nums.length
  if (n < 2) return 0;

  if (nums[0] == 0) return nums.length;

  const jumps = [];
  let i, j; 
  jumps[0] = 0; 
         
  for (i = 1; i < n; i++) { 
      jumps.push(n); 
       for (j = 0; j < i; j++) { 
            if (i <= j + nums[j] && jumps[j] != n) { 
                jumps[i] = Math.min(jumps[i], jumps[j] + 1); 
                break; 
            } 
        } 
  } 
  return jumps[n-1]; 
} 

function jumpR(nums) {
  const n = nums.length
  if (n < 2) return 0;
  if (nums[0] == 0) return n;

  minJump = n;
  jumpRec(nums, 0, 0, n);
  return minJump;
}

function jumpRec(arr, index, count, n) {
  if (index >= n-1) {
    minJump = Math.min(minJump, count);
    return;
  }
  count++
  for (let i = 1; i <= arr[index]; i++) {
    jumpRec(arr, index+i, count, n);
  }
}

nums = [8,2,4,4,4,0,1,1,6,3,5,1,2,6,6,0,4,8,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7];
console.log(jumpBF(nums));
console.log(jumpDP(nums));
console.log(jump(nums));
console.log(jumpR(nums));
