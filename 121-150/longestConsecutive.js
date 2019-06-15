/*
  Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
  Your algorithm should run in O(n) complexity.

  Input: [100, 4, 200, 1, 3, 2, 3]       Output: 4
  Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/

function longestConsecutive(nums) {
  if (nums.length < 2) return nums.length;
  
  nums = nums.sort((a,b) => a-b);
  let maxLen = 0, count = 1;
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i-1] + 1) count++;
      else if (nums[i] === nums[i-1]) continue;
      else {
          maxLen = Math.max(maxLen, count);
          count = 1
      }
  }
  return Math.max(maxLen, count);
}

N = [100, 4, 200, 1, 3, 2, 3];
console.log(longestConsecutive(N));

function longestConsecutiveSet(nums) {
  const num_set = new Set();
  for (let num of nums) {
      num_set.add(num);
  }

  let longestStreak = 0;

  for (let num of num_set) {
    if (!num_set.has(num-1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (num_set.has(currentNum+1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

N = [100, 4, 200, 1, 3, 2, 3];
console.log(longestConsecutiveSet(N));
