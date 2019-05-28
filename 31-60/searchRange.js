/*
  Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
  Your algorithm's runtime complexity must be in the order of O(log n).
  If the target is not found in the array, return [-1, -1].

  Input: nums = [5,7,7,8,8,10],   target = 8    Output: [3,4]
  Input: nums = [5,7,7,8,8,10],   target = 6    Output: [-1,-1]
*/

function searchRange(nums, target) {
  if (nums.length < 1) return [-1, -1];
  const index = searchRec(nums, target, 0, nums.length-1);
  if (index < 0) return [-1, -1];
  
  let left = index-1, right = index+1;
  while (nums[left] === target || nums[right] === target) {
      if (nums[left] === target) left--;
      if (nums[right] === target) right++;
  }
  return [++left, --right]
}

function searchRec(nums, target, from, to) {
  if (from === to) return nums[from] === target ? from : -1;
  const center = Math.floor((from+to) / 2);
  if (nums[center] > target) return searchRec(nums, target, from, center-1);
  if (nums[center] < target) return searchRec(nums, target, center+1, to);
  return center;
}

arr = [5,7,7,8,8,10];
console.log(searchRange(arr, 8));
console.log(searchRange(arr, 6));
