/*
  Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

  (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

  You are given a target value to search. If found in the array return true, otherwise return false.

  Example 1:

  Input: nums = [2,5,6,0,0,1,2], target = 0
  Output: true
  Example 2:

  Input: nums = [2,5,6,0,0,1,2], target = 3
  Output: false
  Follow up:

  This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
  Would this affect the run-time complexity? How and why?
*/

const obj = { '3': [2,5,6,0,0,1,2], '2': [2,2,2,2,1,2,2,2,2,2], '4': [1,4,1,1,1] }
for (let key in obj) {
  console.log(obj[key], key)
  console.log(searchNumber(obj[key], +key));
}

function searchNumber(nums, target) {
  const len = nums.length;
  if (len < 1 || target == null) return false;
  if (len === 1) return nums[0] === target;

  if (nums[0] < nums[len-1]) return findNumber(nums, target, 0, len-1);

  const pivot = findPivot(nums, 0, len-1);
  if (pivot < 0) return nums[0] === target;
  
  if (nums[0] <= target && target <= nums[pivot]) return findNumber(nums, target, 0, pivot);
  if (nums[pivot+1] <= target && target <= nums[len-1] ) return findNumber(nums, target, pivot+1, len-1);
  return false;
}

function findPivot(N, s, e) {
  if (s === e) {
    if (N[s] > N[s+1]) return s;
    return -1;
  }
  const m = Math.floor((s+e)/2);
  if (N[m] > N[m+1]) return m;
  if (N[0] < N[m]) return findPivot(N, m, e);
  if (N[0] === N[m]) {
    for (let i = s; i <=e; i++) if (N[i] > N[i+1]) return i;
  }
  return findPivot(N, s, m);
}

function findNumber(N, T, s, e) {
  if ( s > e) return false;
  if (s === e) return N[s] === T;

  const m = Math.floor((s+e) / 2);
  if (N[m] < T) return findNumber(N, T, m+1, e);
  return findNumber(N, T, s, m); 
}
