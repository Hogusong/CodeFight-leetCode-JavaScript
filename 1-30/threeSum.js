/*
  Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
  Find all unique triplets in the array which gives the sum of zero.

  Note:  The solution set must not contain duplicate triplets.

  Given array nums = [-1, 0, 1, 2, -1, -4],
  A solution set is: [ [-1, 0, 1], [-1, -1, 2] ]
*/

function threeSumRec(nums) {
  subsets = [];
  processRec(nums, nums.length, 3, 0, []);
  const result = []
  for (let s of subsets) {
    if (s[0] + s[1] + s[2] === 0) {
      s.sort();
      let saveIt = true;
      for (let r of result) {
        if (r[0] === s[0] && r[1] === s[1] && r[2] === s[2]) saveIt = false;
      }
      if (saveIt) {
        result.push(s);
      }
    }
  }
  return result.length;
}

function processRec(arr, n, r, i, data) {
  if (data.length === r) {
    subsets.push(data);
    return;
  }
  if (i >= n) return;
  processRec(arr, n, r, i+1, [...data, arr[i]]);
  processRec(arr, n, r, i+1, [...data]);
}

// nums = [-13,10,11,-3,8,11,-4,8,12,-13,5,-6,-4,-2,12,11,7,-7,-3,10,12,13,-3,-2,6,-1,14,7,-13,8,14,-10,-4,10,-6,11,-2,-3,4,-13,0,-14,-3,3,-9,-6,-9,13,-6,3,1,-9,-6,13,-4,-15,-11,-12,7,-9,3,-2,-12,6,-15,-10,2,-2,-6,13,1,9,14,5,-11,-10,14,-5,11,-6,6,-3,-8,-15,-13,-4,7,13,-1,-9,11,-13,-4,-15,9,-4,12,-4,1,-9,-5,9,8,-14,-1,4,14];
nums = [14,4,6,-1,10,9,-8,7,-13,14,-13,-11,-8,-9,11,14,-8,-14,-13,7,-10,-15,-13,-11,-11,11,14,13,2,-14,1,-7,-2,14,-1,-15,9,7,-1,3,6,1,7,5,-1,-5,4,-2,-4,-1,-9,-7,-1,-7,-11,3,12,10,-7,-1,12,1,8,-13,1,14,9,-13,6,-7,-3,-11,2,-11,10,-14,-1,-9,0,2,5,6,3,-11,6,7,0,3,3,0,-12,-8,-13,3,-14,-5,2,10,-11,-14,-12,1,-10,5,5,7,-1,11,14,6,-10,-4,-3,8,-7,10,1,8,-1,-11,-15,-6,-12,-13,12,-11];
// nums = [-1, 2, 0, 1, -1, -3, 4];
console.time('This')
console.log(threeSumRec(nums));
console.timeEnd('This')

function threeSubsetSum(nums) {
  if (nums.length < 3) return [];

  nums = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i-1]) continue;
    const set = new Set();

    for (let j = i+1; j < nums.length - 1; j++) {
      if (j > i + 1 && nums[j] == nums[j-1]) continue;
      const diff = 0 - nums[i] - nums[j];
      if (diff < 0) break;
      const index = nums.indexOf(diff, j + 1);
      if (index > j) {
        const key = nums[j] + ':' + nums[index]
        if (!set.has(key)) {
            set.add(key);
            result.push([nums[i], nums[j], nums[index]]);
        }
      }
    }
  }
  return result.length;
}

console.time('This')
console.log(threeSubsetSum(nums));
console.timeEnd('This')

var threeSum = function(nums) {
  const n = nums.length;
  nums = nums.sort((a,b) => a - b);
  
  const result = [];
  for (let i = 0; i < n - 1; i++) {
      if (nums[i] > 0) break;
      if (i > 0 && nums[i] == nums[i-1]) continue;
      const set = new Set();
      let l = i + 1;
      let r = n - 1;
      while (l < r) {
          if (nums[i] + nums[l] + nums[r] == 0) {
              const key = nums[l] + ':' + nums[r];
              if (!set.has(key)) {
                  set.add(key);
                  result.push([nums[i], nums[l], nums[r]]);    
              }
              l++;
              r--;
          } else if (nums[i] + nums[l] + nums[r] < 0) l++;
          else r--;
      }
  }
  return result.length;
}

console.time('This')
console.log(threeSum(nums));
console.timeEnd('This')

var threeSumBF = function(nums) {
  const n = nums.length;
  nums = nums.sort((a,b) => a - b);
  const result = [];
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i-1] == nums[i]) continue;

    for (let j = i + 1; j < n - 1; j++) {
      if (nums[i] + nums[j] > 0) break;
      if (j > i + 1 && nums[j-1] == nums[j]) continue;

      const keyValue = 0 - (nums[i] + nums[j]);
      for (let k = j + 1; k < n; k++) {
        if (nums[k] > keyValue) break;
        if (k > j + 1 && nums[k-1] == nums[k]) continue;
        if (nums[k] == keyValue) result.push([nums[i], nums[j], nums[k]]);
      }
    }
  }
  return result;
}