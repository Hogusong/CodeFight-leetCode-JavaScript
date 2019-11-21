/*
  Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that 
  a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
  The solution set must not contain duplicate quadruplets.

  Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

  A solution set is:  [   [-1,  0, 0, 1],
                          [-2, -1, 1, 2],
                          [-2,  0, 0, 2]    ]
*/

//  Brute Force
function fourSumZero(nums, target) {
  subsets = [];
  getSubsets(nums, nums.length, 4, 0, []);
  const result = []
  for (let s of subsets) {
    if (s[0] + s[1] + s[2] + s[3] === target) {
      s.sort();
      let saveIt = true;
      for (let r of result) {
        if (r[0] === s[0] && r[1] === s[1] && r[2] === s[2] && r[3] === s[3]) saveIt = false;
      }
      if (saveIt) {
        result.push(s);
      }
    }
  }
  return result;
}

function getSubsets(arr, n, r, i, data) {
  if (data.length === r) {
    subsets.push(data);
    return;
  }
  if (i >= n) return;
  getSubsets(arr, n, r, i+1, [...data, arr[i]]);
  getSubsets(arr, n, r, i+1, [...data]);
}

var fourSumSubsets = function(nums, target) {
  if (nums.length < 4) return []
  result = [];
  data = [];
  set = new Set();
  nums = nums.sort((a,b) => a - b);
  makeSubsets(nums, 4, 0, 0, target);
  return result;
}

function makeSubsets(nums, maxCount, count, i, target) {
  if (maxCount === count) {
    if (getSum(data) === target) {
      const key = data.join(':');
      if (!set.has(key)) {
        set.add(key);
        result.push([...data]);
      }
    }
    return;
  }
  if (i >= nums.length) return ;

  data[count] = nums[i];
  makeSubsets(nums, maxCount, count+1, i+1, target);
  makeSubsets(nums, maxCount, count, i+1, target);
}

function getSum(arr) {
  let sum = 0
  arr.forEach(i => sum += i);
  return sum;
}

// fastest
var fourSum = function(nums, target) {
  const n = nums.length;
  if (n < 4) return [];

  nums = nums.sort((a,b) => a-b); 
  const result = [];
  const set = new Set();
  for (let x = 0; x < n - 2; x++) {
    if (nums[x] > 0 && nums[x] > target) break;
    if (x > 0 && nums[x-1] == nums[x]) continue;
    for (let i = x + 1; i < n - 1; i++) {
      if (nums[i] > 0 && nums[x] + nums[i] > target) break;
      if (i > x + 1 && nums[i-1] == nums[i]) continue;
      let l = i + 1;
      let r = n - 1;
      while (l < r) {
        if (nums[x] + nums[i] + nums[l] + nums[r] === target ) {
          const key = nums[i] + ':' + nums[l] + ':' + nums[r]
          if (!set.has(key)) {
            result.push([nums[x], nums[i], nums[l], nums[r]]);
            set.add(key);
          }
          l++;
          r--;
        } else if (nums[x] + nums[i] + nums[l] + nums[r] > target ) {
          r--;
        } else l++;
      }
    }
  }
  return result
};
