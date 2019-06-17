/*
  Given a sorted array and a target value, return the index if the target is found. 
  If not, return the index where it would be if it were inserted in order.
  You may assume no duplicates in the array.

  Input: [1,3,5,6], 5     Output: 2
  Input: [1,3,5,6], 2     Output: 1
  Input: [1,3,5,6], 7     Output: 4
  Input: [1,3,5,6], 0     Output: 0
*/

function searchInsert(nums, target) {
  if (nums.length < 1) return 0;
  return searchRec(nums, target, 0, nums.length - 1);
}

function searchRec(nums, target, from, to) {
  if (from > to) return from;
  const center = Math.floor((from + to) / 2);
  if (nums[center] > target) return searchRec(nums, target, from, center-1);
  if (nums[center] < target) return searchRec(nums, target, center+1, to);
  return center;
}

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));
console.log(searchInsert([3,5,7,9,10], 8));

function searchInsert(nums, target) {
  if (nums.length < 1) return 0;

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
  return from;
}
