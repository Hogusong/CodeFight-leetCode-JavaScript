/*
  Given an array with n objects colored red, white or blue, sort them in-place 
  so that objects of the same color are adjacent, with the colors in the order red, white and blue.
  Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

  Note: You are not suppose to use the library's sort function for this problem.

  Input: [2,0,2,1,1,0],       Output: [0,0,1,1,2,2]

  A rather straight forward solution is a two-pass algorithm using counting sort.
  First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
  Could you come up with a one-pass algorithm using only constant space?
*/

function sortColors(nums) {
  if (nums.length < 2) return nums;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] >= nums[j]) [nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }
  return nums;
}

input = [2,0,2,1,1,0];
console.log(sortColors(input));

function sortColorsIns(nums) {
  if (nums.length < 2) return nums;
  for (let i=1; i<nums.length; i++) {
    for (let j=i-1; j>=0; j--) {
      if (nums[j] <= nums[j+1]) break;
      [nums[j+1], nums[j]] = [nums[j], nums[j+1]];
    }
  }
  return nums;
}

input = [2,0,2,1,1,0];
console.log(sortColorsIns(input));
