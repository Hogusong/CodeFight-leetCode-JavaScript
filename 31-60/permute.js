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

arr = [1,2,3,4]
console.time('Using Queue');
console.log(permute(arr));
console.timeEnd('Using Queue');

function permutateR(nums) {
  if (nums.length < 2) return [nums];
  let result = [];
  permuteRec(result, [], nums, nums.length)
  return result;
}

function permuteRec(result, temp, nums, n) {
  if (n === 0) {
    result.push([...temp]);
    return;
  }
  for (let i=0; i<nums.length; i++) {
    if (temp.includes(nums[i])) continue;
    temp.push(nums[i]);
    permuteRec(result, temp, nums, n-1);
    temp.pop();
  }
}

console.time('Recursion');
console.log(permutateR(arr));
console.timeEnd('Recursion');

function permutationsA(nums) {
  if (nums.length <  2) return [nums];
  result = [];
  permuteRe(nums, 0, []);
  return result;
}

function permuteRe(N, i, answer) {
  if (i === N.length) {
    result.push(answer);
    return 
  }
  for (let j = 0 ; j < N.length; j++) {
    if (answer.includes(N[j])) continue;
    permuteRe(N, i+1, [...answer, N[j]]);
  }
}

console.log(permutationsA([1,2,3]));
