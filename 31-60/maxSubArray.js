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

//  Divide and Conquer
function maxSubArrayDC(nums) {
  return maxSubArrayRec(nums, 0, nums.length-1);
}

function maxCrossingSum(arr, s, m, e) {
  let sum = 0; left_sum = null, right_sum = null;
  for (let i=m; i>=s; i--) {
    sum = sum + arr[i];
    left_sum = (left_sum === null) ? sum : Math.max(sum, left_sum);
  }

  sum = 0;
  for (let i=m+1; i<=e; i++) {
    sum = sum + arr[i];
    right_sum = (right_sum === null) ? sum : Math.max(sum, right_sum);
  }
  return left_sum + right_sum;
}

function maxSubArrayRec(arr, s, e) {
  if ( s === e) return arr[s];
  const m = Math.floor((s + e) / 2);
  return Math.max(maxSubArrayRec(arr, s, m), maxSubArrayRec(arr, m+1, e), maxCrossingSum(arr, s, m, e));
}

console.log(maxSubArrayDC([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArrayDC([-1,0,-2]));
console.log(maxSubArrayDC([-1,-2]));
console.log(maxSubArrayDC([-2]));
