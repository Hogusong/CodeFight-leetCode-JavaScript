/*
  Given a collection of distinct integers, return all possible permutations.

  Input: [1,2,3]
  Output:  [ [1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1] ]
*/

function permute(nums) {
  if (nums.length < 2) return [nums];

  const len = nums.length;
  let answer = [[]];
  for (let i = 0; i < len; i++) {
    const temp = [...answer];
    answer = [];
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < temp.length; k++) {
        if (!temp[k].includes(nums[j])) {
          answer.push([nums[j], ...temp[k]])
        }
      }
    }
  }
  // return answer;
}

arr = [1,2,3,4,5,6,7,8,9]
console.time('Using Queue');
console.log(permute(arr));
console.timeEnd('Using Queue');

function permutateR(nums) {
  if (nums.length < 2) return [nums];
  let result = [], used = [];
  for (let i=0; i<nums.length; i++) used[i] = false;
  permuteRec(result, [], nums, used, nums.length)
  // return result;
}

function permuteRec(result, temp, nums, used, n) {
  if (n === 0) {
    result.push([...temp]);
    return;
  }
  for (let i=0; i<used.length; i++) {
    if (used[i] || (i > 0 && nums[i] === nums[i-1] && used[i-1])) continue;
    used[i] = true;
    temp.push(nums[i]);
    permuteRec(result, temp, nums, used, n-1);
    temp.pop();
    used[i] = false;
  }
}

console.time('Recursion');
console.log(permutateR(arr));
console.timeEnd('Recursion');
