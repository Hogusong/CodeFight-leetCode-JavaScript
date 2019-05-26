/*
  Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
  Return the sum of the three integers. You may assume that each input would have exactly one solution.

  Given array nums = [-1, 2, 1, -4], and target = 1.
  The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

function closestThreeSum(nums, target) {
  subsets = [];
  const data = nums.map((e,i) => i);
  getSubsets(nums, nums.length, 3, 0, data, 0);
  let gap = 0;
  while (true) {
    for (let s of subsets) {
      if (s[0] + s[1] + s[2] === target + gap) {
        return s;
      }
      if (s[0] + s[1] + s[2] === target - gap) {
        return s;
      }
    }
    gap++;
  }
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
nums = [-79,-95,8,-76,-93,-6,19,-68,-64,21,47,37,-47,-88,-12,23,-99,-63,43,-20,50,-85,-64,-48,91,40,64,-50,38,-17,22,-7,-91,-93,40,-35,72,92,-38,-28,75,99,-10,83,-51,-65,73,59,74,-64,-97,-71,-51,-69,68,50,-97,14,62,88,-28,18,-57,98,-61,45,-92,57,9,-99,-54,-87,63,-90,-63,-70,-62,-24,-32,16,-48,-83,-8,49,-98,61,27,-34,13,-81,32,-100,-4,-46,78,-62,-55,98,15,46,-25,-30,-20];
target = 289;
console.time('This')
console.log(closestThreeSum(nums, target));
console.timeEnd('This')


