/*
  Given an array of non-negative integers, you are initially positioned at the first index of the array.
  Each element in the array represents your maximum jump length at that position.
  Determine if you are able to reach the last index.

  Input: [2,3,1,1,4]      Output: true
  Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

  Input: [3,2,1,0,4]      Output: false
  Explanation: You will always arrive at index 3 no matter what. Its maximum
               jump length is 0, which makes it impossible to reach the last index.
*/

function canJump(nums) {
  if (nums.length < 2) return true;
  if (nums[0] < 1) return false;

  let index = nums.indexOf(0);
  while (index >= 0 && index < nums.length-1) {
    let next = false;
    for (let i=index-1; i >= 0; i--) {
      if (nums[i] > index - i) next = true;
    }
    if (!next) return false;
    index = nums.indexOf(0, index+1);
  }
  return true;
}

arr = [3,2,1,0,1];
// arr = [8,2,1,0,1,0,0,0];
// arr = [3,0,0,0];
arr = [1,2,0,1]
console.log(canJump(arr));

//  Scanning ( This is the best in time & space. )
function canJumpScan(nums) {
  if (nums.length < 2) return true;
  if (nums[0] === 0) return false;

  let max_jump = nums[0];
  for (let i = 1; i < nums.length-1; i++) {
    max_jump--;
    if (nums[i] === 0) {
      if (max_jump < 1) return false;
    } else {
      max_jump = Math.max(nums[i], max_jump);
    }
  }
  return true;
}

console.log(canJumpScan(arr));

//  BackTracking
function canJumpBT(nums) {
  return canJumpFromPosition(0, nums)
}

function canJumpFromPosition(curr_idx, nums) {
  if (curr_idx === nums.length - 1) return true;

  const max_move = Math.min(curr_idx + nums[curr_idx], nums.length - 1);
  for (let next = curr_idx + 1; next <= max_move; next++) {
    if (canJumpFromPosition(next, nums)) return true;
  }
  return false;
}

console.log(canJumpBT(arr));

//  Dynamin Programming : Top Down
function canJumpDP_TD(nums) {
  memo = [];
  for (let i = 0; i < nums.length; i++) {
    memo[i] = 'Unknown';
  }
  memo[memo.length-1] = 'Good';
  return canJumpInPosition(0, nums);
}

function canJumpInPosition(curr_idx, nums) {
  if (memo[curr_idx] != 'Unknown') {
    return memo[curr_idx] === 'Good' ? true : false;
  }

  let max_move = Math.min(curr_idx + nums[curr_idx], nums.length - 1);
  for (let next = curr_idx + 1; next <= max_move; next++) {
    if (canJumpInPosition(next, nums)) {
      memo[curr_idx] = 'Good';
      return true;
    }
  }

  memo[curr_idx] = 'Bad';
  return false;
}

console.log(canJumpDP_TD(arr));

//  Dynamin Programming : Bottom Up
function canJumpDP_BU(nums) {
  let memo = [];
  for (let i = 0; i < nums.length; i++) {
    memo[i] = 'Unknown';
  }
  memo[memo.length-1] = 'Good';

  for (let i = nums.length - 2; i >= 0; i--) {
    let max_move = Math.min(i + nums[i], nums.length - 1);
    for (let j = i + 1; j <= max_move; j++) {
      if (memo[j] === 'Good') {
        memo[i] = 'Good';
        break;
      }
    }
  }

  return memo[0] === 'Good';
}

console.log(canJumpDP_BU(arr));

//  Greedy ( Another best way. )
function canJumpGreedy(nums) {
  let last_idx = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= last_idx - i) {
      last_idx = i;
    }
  }
  return last_idx === 0
}

console.log(canJumpGreedy(arr));

var canJump = function(nums) {
  const len = nums.length;
  let jump = 0;
  for  (let i = 0; i < len; i++) {
    jump = Math.max(--jump, nums[i]);
    if (jump === 0 && i != len - 1) return false;
  }
  return true;
}