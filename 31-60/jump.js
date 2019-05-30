/*
  Given an array of non-negative integers, you are initially positioned at the first index of the array.
  Each element in the array represents your maximum jump length at that position.
  Your goal is to reach the last index in the minimum number of jumps.

  Input: [2,3,1,1,4]      Output: 2
  Explanation:  The minimum number of jumps to reach the last index is 2.
                Jump 1 step from index 0 to 1, then 3 steps to the last index.
  Note:  You can assume that you can always reach the last index.
*/

function jump(nums) {
  if (nums.length === 1) return 0;
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

console.log(jump([2,3,0,1,4,2,3,1,5,1,3,2,1,3]));
console.log(jump([2,3,1,1,4]));
console.log(jump([9,4,5,4,1,8,1,2,0,7,8,7,0,6,6,1,1,2,5,0,9,8,4,7,9,6,8,1,4,0,8,5,5,3,9,8,1,2,2,3,0,1,3,2,7,9,3,0,1]));
