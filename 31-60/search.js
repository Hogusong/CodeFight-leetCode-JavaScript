/*
  Find the target from an sorted array in ascending order.
  You are given a target value to search. If found in the array return its index, otherwise return -1.
  You may assume no duplicate exists in the array.
  Your algorithm's runtime complexity must be in the order of O(log n).

  Input: nums = [0,1,2,4,5,6,7], target = 4  Output: 3
  Input: nums = [0,1,2,4,5,6,7], target = 3  Output: -1
*/

function search(nums, target) {
  if (nums.length < 1) return -1;
  const left = 0, right = nums.length-1;
  return searchRec(nums, target, left, right);
}

function searchRec(nums, target, left, right) {
  if (left > right) return -1;
  const center = Math.floor((right + left + 1) / 2);
  if (nums[center] === target) return center;
  if (nums[center] > target)   return searchRec(nums, target, left, center-1);
  return searchRec(nums, target, center+1, right);
}

function binarySearch(nums, target) {
  if (nums.length < 1) return -1;
  let from = 0, to = nums.length - 1;
  while (to >= from) {
    const center = Math.floor((from + to) / 2);
    if (nums[center] === target) return center;
    if (nums[center] > target) {
      to = center - 1;
    } else {
      from = center + 1;
    }
  }
  return -1;
}

console.log(search([1,2,3], 4));
console.log(binarySearch([1,2,3], 2));
console.log(search([3,5,7,9,10], 8));

