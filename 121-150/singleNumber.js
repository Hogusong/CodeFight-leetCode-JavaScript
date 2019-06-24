/*
  Given a non-empty array of integers, every element appears twice except for one. Find that single one.
  Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

  Input: [2,2,1],             Output: 1
  Input: [4,1,2,1,2]          Output: 4
*/

// Brute Force
function singleNumber(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == null) continue;
    const index = nums.indexOf(nums[i], i+1);
    if (index < 0) return nums[i];
    nums[i] = null;
    nums[index] = null;
  }
  return null;
}

// Sorting first
function singleNumber(nums) {
  nums = nums.sort((a,b) => a-b);
  for (let i = 0; i < nums.length - 1; i+=2 ) {
    if (nums[i] != nums[i+1]) return nums[i];
  }
  return nums[nums.length - 1];
}

// Math:  2 * (a + b + c) - (a + a + b + c + c) = b
function singleNumber(nums) {
  const set = new Set();
  let sumSet = 0, sumArray = 0;
  for (let i = 0; i < nums.length; i++) {
      sumArray += nums[i];
      if (!set.has(nums[i])) {
          set.add(nums[i]);
          sumSet += nums[i];
      }
  }
  return 2 * sumSet - sumArray;
}