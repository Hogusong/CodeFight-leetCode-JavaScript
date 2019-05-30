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
  return answer;
}

console.log(permute([1,2,3]));
