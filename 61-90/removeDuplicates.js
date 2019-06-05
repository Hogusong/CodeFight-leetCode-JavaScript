/*
  Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.
  Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

  Given nums = [1,1,1,2,2,3],       return 5    -->   [1, 1, 2, 2, 3]  It will be fine up to twice duplicates. 

  Given nums = [0,0,1,1,1,1,2,3,3], return 7    -->   [0, 0, 1, 1, 2, 3, 3]

  Clarification:  Confused why the returned value is an integer but your answer is an array?

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
  if (nums.length < 3) return nums.length;
  let num = null, countNum = 0, cutTotal = 0;
  for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] < nums[i-1]) break;
      if (nums[i] != num) {
          num = nums[i];
          if (countNum > 2) {
              const cutCount = countNum - 2;
              for (let j = i; j < nums.length; j++) {
                  [nums[j], nums[j-cutCount]] = [nums[j-cutCount], nums[j]];
              }
              i = i - cutCount;
              cutTotal += cutCount;
          }
          countNum = 1;
      } else {
          countNum++;
      }
  }
  if (countNum > 2) cutTotal += countNum - 2;
  return nums.slice(0, nums.length - cutTotal);
}

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
