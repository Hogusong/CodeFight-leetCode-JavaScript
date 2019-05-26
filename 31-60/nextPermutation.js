/*
  Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
  If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
  The replacement must be in-place and use only constant extra memory.

  Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
        1,2,3 → 1,3,2
        3,2,1 → 1,2,3
        1,1,5 → 1,5,1
*/

function nextPermutation(nums) {
  let i = nums.length - 1;
  while (i > 0 && nums[i-1] >= nums[i]) {  i--;  }
  if (i > 0) {
    let j = nums.length - 1;
    while (nums[i-1] >= nums[j]) {  j--;   }
    [nums[i-1], nums[j]] = [nums[j], nums[i-1]];
  }
  
  j = nums.length - 1;
  while (j > i ) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
  return nums;
}

console.log(nextPermutation([1,4,2,5,3]));  //  1 4 3 2 5
