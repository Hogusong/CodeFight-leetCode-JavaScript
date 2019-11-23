/*
  Given an array of non-negative integers, you are initially positioned at the first index of the array.
  Each element in the array represents your maximum jump length at that position.
  Your goal is to reach the last index in the minimum number of jumps.

  Input: [2,3,1,1,4]      Output: 2
  Explanation:  The minimum number of jumps to reach the last index is 2.
                Jump 1 step from index 0 to 1, then 3 steps to the last index.
  Note:  You can assume that you can always reach the last index.
*/

// time limit exceeded
function jump(nums) {
  if (nums.length < 2) return 0;
  const destination = nums.length - 1;

  //  initialize to start from index 0 of nums
  const queue = [[0]];

  while (queue.length > 0) {
    const temp = queue.shift();
    const t_len = temp.length;
    const curr = temp[t_len-1];
    if (curr === destination) {
      //  First arriving is the shortest jump.
      return [t_len - 1, temp];
    } else {
      for (let i=nums[curr]; i>0; i--) {
        // keep the index of bigest jump first.
        queue.push([...temp, curr+i])
      }
    }
  }
}

// time limit exceeded
var jumpRec = function(nums) {
  if (nums.length < 2) return 0;
  minStep = nums.length;
  makeJump(nums, 0, 0);
  return minStep;
}

function makeJump(nums, index, steps) {
  if (index >= nums.length - 1) {
    minStep = Math.min(minStep, steps);
    return;
  }
  for (let i = nums[index]; i > 0; i--) {
    makeJump(nums, index + i, steps+1);
  }
}

// time limit exceeded
function jumpSD(nums) {
  if (nums.length < 2) return 0;
  const queue = [[0]];
  for (let i = 0; i < queue.length; i++) {
    const temp = queue[i];
    const last = temp[temp.length-1]
    if (last >= nums.length - 1) return temp.length - 1;
    for (let j = nums[last]; j > 0; j--) {
      queue.push([...temp, last+j]);
    }
  }
}

// no time limit exceeded. (good)
var jump = function(nums) {
  const n = nums.length
  if (n < 2) return 0;

  const jumps = [];
  let i, j; 
  jumps[0] = 0; 
         
  for (i = 1; i < n; i++) { 
    jumps.push(n); 
    for (j = 0; j < i; j++) { 
      if (i <= j + nums[j] && jumps[j] != n) { 
        jumps[i] = Math.min(jumps[i], jumps[j] + 1); 
        break; 
      } 
    } 
  } 
  return jumps[n-1]; 
}

console.log(jump([2,3,0,1,4,2,3,1,5,1,3,2,1,3]));
console.log(jump([2,3,1,1,4]));
console.time('this Shift')
console.log(jump([9,4,5,4,1,8,1,2,0,7,8,7,0,6,6,1,1,2,5,0,9,8,4,7,9,6,8,1,4,0,8,5,5,3,9,8,1,2,2,3,0,1,3,2,7,9,3,0,1]));
console.timeEnd('this Shift')
console.time('this Sliding')
console.log(jumpSD([9,4,5,4,1,8,1,2,0,7,8,7,0,6,6,1,1,2,5,0,9,8,4,7,9,6,8,1,4,0,8,5,5,3,9,8,1,2,2,3,0,1,3,2,7,9,3,0,1]));
console.timeEnd('this Sliding')
