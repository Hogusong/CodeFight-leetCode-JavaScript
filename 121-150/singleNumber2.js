/*
  Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.
  Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

  Input: [2,2,3,2]              Output: 3
  Input: [0,1,0,1,0,1,99]       Output: 99
*/

//  Brute Force
function singleNumber(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == null) continue;
    let index = nums.indexOf(nums[i], i+1);
    if (index < 0) return nums[i];
    while(index > i) {
      nums[index] = null;
      index = nums.indexOf(nums[i], i+1);
    }
  }
  return nums[nums.length-1];
}

//  Sorting first
function singleNumber(nums) {
  nums = nums.sort((a,b) => a-b);
  let count = 0, value = null;
  for (let n of nums) {
    if (n != value) {
      if (count === 1) return value;
      count = 1;
      value = n;
    } else {
      count++;
    }
  }
  return nums[nums.length-1];
}

//  Using Object
function singleNumber(nums) {
  const dict = {};
  for (let n of nums) {
    if (!dict[n]) dict[n] = 1;
    else dict[n]++
  }
  for (let key in dict) {
    if (dict[key] === 1) return key
  }
  return null;
}

// Math:  3 * (a + b + c) - (a + a + a + b + c + c + c) = 2 * b
function singleNumber(nums) {
  const set = new Set();
  let sumSet = 0, sumArray = 0;
  for (let i = 0; i < nums.length; i++) {
      sumArray += nums[i];
      if (!set.has(nums[i])) {
          set.add(nums[i]);
          sumSet += nums[i];
      }
  }
  return (3 * sumSet - sumArray) / 2;
}
