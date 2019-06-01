/*
  Given an array of non-negative integers, you are initially positioned at the first index of the array.
  Each element in the array represents your maximum jump length at that position.
  Determine if you are able to reach the last index.

  Input: [2,3,1,1,4]      Output: true
  Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

  Input: [3,2,1,0,4]      Output: false
  Explanation: You will always arrive at index 3 no matter what. Its maximum
               jump length is 0, which makes it impossible to reach the last index.
*/

function canJump(nums) {
  if (nums.length < 2) return true;
  if (nums[0] < 1) return false;

  let index = nums.indexOf(0);
  while (index >= 0 && index < nums.length-1) {
    let next = false;
    for (let i=index-1; i >= 0; i--) {
      if (nums[i] > index - i) next = true;
    }
    if (!next) return false;
    index = nums.indexOf(0, index+1);
  }
  return true;
}

arr = [3,2,1,0,1];
// arr = [8,2,1,0,1,0,0,0];
// arr = [3,0,0,0];
console.log(canJump(arr));