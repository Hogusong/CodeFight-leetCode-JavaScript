/*
  Given an array of integers, return the first indices of the two numbers 
  such that they add up to a specific target.
  You may assume that each input would have exactly one solution, 
  and you may not use the same element twice.

  Example:
  Given nums = [1, 2, 11, 7, 8, 15], target = 9,

  Because nums[1] + nums[3] = 2 + 7 = 9,
  return [1, 3]
  num[0] + num[4] = 1 + 8 = 9 but this set will come later than the other.
*/

function findTwoSum(arr, target) {
  const dict = {};
  for (let i=0; i<arr.length; i++) {
    const diff = target - arr[i];
    if (dict[diff] != undefined) return [dict[diff], i] 
    dict[arr[i]] = i;
  }
  return [];
}

console.log(findTwoSum([1, 2, 11, 7, 8, 15], 9));   // [1, 3]

function xfindTwoSum (arr, target) {
  const dict = {};
  for (let i=0; i<arr.length; i++) {
    dict[arr[i]] = i;
  }
  for (let i=0; i<arr.length-1; i++) {
    const diff = target - arr[i];
    if (dict[diff] && dict[diff] > i) {
      return [i, dict[diff]];
    }
  }
  return [];
}

console.log(xfindTwoSum([1, 2, 11, 7, 8, 15], 9));  // [0, 4]
