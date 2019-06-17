/*
  Given an unsorted integer array, find the smallest missing positive integer.

  Input: [1,2,0]          Output: 3 
  Input: [3,4,-1,1]       Output: 2
  Input: [7,8,9,11,12]    Output: 1

  Your algorithm should run in O(n) time and uses constant extra space.
*/

function firstMissingPositive(nums) {
  if (nums.length < 1) return 1;
  if (nums.length === 1) return (nums[0] != 1 ) ? 1 : 2;

  const arr = nums.sort((a,b) => a - b);
  const idx = findFirstPositive(arr);
  if (idx < 0) return 1;
  if (arr[idx] > 1) return 1;
  for (let i=idx+1; i<arr.length; i++) {
    if (arr[i] - arr[i-1] > 1) return arr[i-1] + 1;
  }
  return arr[arr.length-1] + 1;
}

function findFirstPositive(arr) {
  if (arr[0] > 0) return 0;
  if (arr[arr.length-1] < 1) return -1;
  let start = 0, end = arr.length - 1;
  while(start <= end) {
    const c = Math.floor((start + end) / 2);
    if (arr[c] > 0 && (!arr[c-1] || arr[c-1] < 1)) return c;
    if (arr[c] < 1) start = c + 1;
    else end = c - 1;
  }
}

console.log(firstMissingPositive([3,4,8,10,12]));
console.log(firstMissingPositive([1,2,0]));
console.log(firstMissingPositive([3,5,-1,0,1,-2]));

function findNumber(arr, t) {
  if (arr[0] >= t) return 0;
  if (arr[arr.length-1] < t) return arr.length;
  let start = 0, end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === t) return mid;
    if (arr[mid] > t) end = mid - 1;
    else start = mid + 1
  }
  return start;
}

console.log()
console.log(findNumber([1,3,5,7,9,11],6));
console.log(findNumber([1,3,5,7,9,11],5));
console.log(findNumber([1,3,5,7,9,11],12));
