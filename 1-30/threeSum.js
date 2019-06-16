/*
  Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
  Find all unique triplets in the array which gives the sum of zero.

  Note:  The solution set must not contain duplicate triplets.

  Given array nums = [-1, 0, 1, 2, -1, -4],
  A solution set is: [ [-1, 0, 1], [-1, -1, 2] ]
*/

function threeSum(nums) {
  subsets = [];
  const data = nums.map((e,i) => i);
  getSubsets(nums, nums.length, 3, 0, data, 0);
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

function getSubsets(arr, n, r, index, data, i) {
  if (index === r) {
    const temp = []
    for (let j=0; j<r; j++) {
      temp.push(data[j]);
    }
    subsets.push(temp)
    return
  }
  if (i >= n) return

  data[index] = arr[i];
  getSubsets(arr, n, r, index+1, data, i+1);
  getSubsets(arr, n, r, index, data, i+1);
}

// nums = [-13,10,11,-3,8,11,-4,8,12,-13,5,-6,-4,-2,12,11,7,-7,-3,10,12,13,-3,-2,6,-1,14,7,-13,8,14,-10,-4,10,-6,11,-2,-3,4,-13,0,-14,-3,3,-9,-6,-9,13,-6,3,1,-9,-6,13,-4,-15,-11,-12,7,-9,3,-2,-12,6,-15,-10,2,-2,-6,13,1,9,14,5,-11,-10,14,-5,11,-6,6,-3,-8,-15,-13,-4,7,13,-1,-9,11,-13,-4,-15,9,-4,12,-4,1,-9,-5,9,8,-14,-1,4,14];
nums = [14,4,6,-1,10,9,-8,7,-13,14,-13,-11,-8,-9,11,14,-8,-14,-13,7,-10,-15,-13,-11,-11,11,14,13,2,-14,1,-7,-2,14,-1,-15,9,7,-1,3,6,1,7,5,-1,-5,4,-2,-4,-1,-9,-7,-1,-7,-11,3,12,10,-7,-1,12,1,8,-13,1,14,9,-13,6,-7,-3,-11,2,-11,10,-14,-1,-9,0,2,5,6,3,-11,6,7,0,3,3,0,-12,-8,-13,3,-14,-5,2,10,-11,-14,-12,1,-10,5,5,7,-1,11,14,6,-10,-4,-3,8,-7,10,1,8,-1,-11,-15,-6,-12,-13,12,-11];
// nums = [-1, 2, 0, 1, -1, -3, 4];
console.time('This')
console.log(threeSum(nums));
console.timeEnd('This')

function threeSubset(nums) {
  const len = nums.length
  const arr = []
  for (let i=0; i<len; i++) {
    arr.push(i);
  }
  let ans = [];
  let temp = [];
  arr.forEach(e => temp.push([e]))
  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<temp.length; j++) {
      if (arr[i] != temp[j][0]) {
        ans.push([arr[i], temp[j][0]])
      }
    }
  }
  temp = [...ans];
  ans = [];
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<temp.length; j++) {
      if (arr[i] > temp[j][0] && arr[i] > temp[j][1]) {
        ans.push([arr[i], ...temp[j]])
      }
    }
  }
  return ans;
}

// console.time('This')
// console.log(threeSubset(nums));
// console.timeEnd('This')

function threeSubsetSum(nums) {
  if (nums.length < 3) return [];

  const result = [], dict = {};
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i+1; j < nums.length - 1; j++) {
      const diff = 0 - nums[i] - nums[j];
      const index = nums.indexOf(diff, j + 1);
      if (index > j) {
        const arr = [nums[i], nums[j], nums[index]].sort((a,b) => a-b);
        const key = arr[0] + ':' + arr[1] + ':' + arr[2]
        if (!dict[key]) {
            dict[key] = 1;
            result.push(arr);
        }
      }
    }
  }
  return result.length;
}

function isNew(R, A) {
  for (let r of R) {
    if (r[0] === A[0] && r[1] === A[1] && r[2] === A[2]) return false;
  }
  return true;
}

console.time('This')
console.log(threeSubsetSum(nums));
console.timeEnd('This')
