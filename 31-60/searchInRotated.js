/*
  Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
  (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

  You are given a target value to search. If found in the array return its index, otherwise return -1.
  You may assume no duplicate exists in the array.
  Your algorithm's runtime complexity must be in the order of O(log n).

  Input: nums = [4,5,6,7,0,1,2],  target = 0,     Output: 4
  Input: nums = [4,5,6,7,0,1,2],  target = 3,     Output: -1
*/

function searchInRotated(nums, target) {
  const len = nums.length;
  if (len < 1) return -1;
  if (len === 1) return nums[0] != target ? -1 : 0;
  const pivot = findPivot(nums);
  if (pivot < 0) return binarySearch(nums, target, 0, len - 1);
  if (nums[len-1] < target) return binarySearch(nums, target, 0, pivot);
  return binarySearch(nums, target, pivot + 1, len - 1)
};

function findPivot(arr) {
  if (arr[0] < arr[arr.length-1]) return -1;
  for (let i=1; i<arr.length; i++) {
    if (arr[i-1] > arr[i]) return i-1;
  }
  return -1
}

function binarySearch(nums, t, start, end) {
  while (end >= start) {
      const c = Math.floor((start + end) / 2);
      if (nums[c] === t) return c;
      if (nums[c] > t) end = c - 1;
      else start = c + 1;
  }
  return -1
}

console.log(searchInRotated([4,5,6,7,0,1,2], 0));       //  4
console.log(searchInRotated([4,5,6,7,0,1,2], 7));       //  3
console.log(searchInRotated([6,7,8,1,2,3,4,5], 6));     //  0
console.log(searchInRotated([6,7,8,1,2,3,4,5], 3));     //  5
console.log(searchInRotated([6,7,8,1,2,3,4,5], 5));     //  7
console.log(searchInRotated([6,7,8], 1));     //  -1
console.log(searchInRotated([6,7,8], 10));    //  -1
console.log(searchInRotated([6,2,4], 1));     //  -1
console.log(searchInRotated([6,2,4], 10));    //  -1
