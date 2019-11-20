/*
  Given a sorted array nums, remove the duplicates in-place such that each element appear only once 
  and return the new length. Do not allocate extra space for another array, 
  you must do this by modifying the input array in-place with O(1) extra memory.

  Given nums = [1,1,2],                 return 2  -->  1 and 2 respectively.
  Given nums = [0,0,1,1,1,2,2,3,3,4],   return 5  -->  0, 1, 2, 3, and 4 respectively.

  Clarification:
  Confused why the returned value is an integer but your answer is an array?

  Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.
  Internally you can think of this:
  // nums is passed in by reference. (i.e., without making a copy)
  int len = removeDuplicates(nums);
  // any modification to nums in your function would be known by the caller.
  // using the length returned by your function, it prints the first len elements.
  for (int i = 0; i < len; i++) {
      print(nums[i]);
  }
*/

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let index = 0;
  for (let j=1; j<nums.length; j++) {
      if (nums[j] != nums[index]) {
          nums[++index] = nums[j]
      }
  }
  return ++index;
}

var removeDuplicates = function(nums) {
  let key = nums[0];
  let index = null;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === key) {
      if (!index) index = i;
    } else {
      key = nums[i];
      if (index) nums[index++] = nums[i]
    }
  }
  return index ? index : nums.length;
};
