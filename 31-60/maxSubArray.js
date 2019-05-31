/*
  Given an integer array nums, find the contiguous subarray (containing at least one number) 
  which has the largest sum and return its sum.

  Input: [-2,1,-3,4,-1,2,1,-5,4],       Output: 6
  Explanation: [4,-1,2,1] has the largest sum = 6.

  If you have figured out the O(n) solution, 
  try coding another solution using the divide and conquer approach, which is more subtle.
*/

//  Brute Force
function maxSubArrayBF(nums) {
  if (nums.length < 1) return 0;
  if (nums.length === 1) return nums[0];

  let max_sum = null;
  for (let i=0; i<nums.length; i++) {
    let sum = 0
    for (let j=i; j<nums.length; j++) {
      sum += nums[j] ;
      max_sum = (max_sum != null) ? Math.max(sum, max_sum) : sum;
    }
  }
  return max_sum;
}

function maxSubArray(nums) {
  let max_sum = null, sum = null;
  for (let i = 0; i < nums.length; i++) {
    sum = ( sum === null || sum < 0) ? nums[i] : sum + nums[i];
    max_sum = (max_sum != null) ? Math.max(sum, max_sum) : sum;
  }
  return max_sum;
}

console.log(maxSubArrayBF([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([-1,0,-2]));
console.log(maxSubArray([-1,-2]));
console.log(maxSubArray([-2]));
