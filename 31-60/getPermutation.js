/*
  The set [1,2,3,...,n] contains a total of n! unique permutations.

  By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
      "123",  "132", "213",  "231", "312",  "321"
  Given n and k, return the kth permutation sequence.
  Given n will be between 1 and 9 inclusive.
  Given k will be between 1 and n! inclusive.

  Input: n = 3, k = 3         Output: "213"
  Input: n = 4, k = 9         Output: "2314"
*/

function getPermutation(n, k) {
  const nums = [];
  for (let i = 0; i < n; i++) nums[i] = i + 1;
  if (k === 1) return nums.join('');

  let fact = 1
  for (let i = 1; i < n; i++) fact *= i;
  k--;

  result = [];
  result = getPermute(result, nums, n, k, fact);
  return result.join('')
}

function getPermute(result, nums, n, k, fact) {
  if (nums.length === 1 || n === 1) {
    result.push(nums[0]);
    return result;
  }
  let num = Math.floor(k / fact) + 1;
  result.push(nums[num-1]);
  nums.splice(num-1, 1);
  k = k % fact;
  fact = fact / (n - 1);
  n--;
  return getPermute(result, nums, n, k, fact);
}

console.log(getPermutation(9, 37098));
console.log(getPermutation(3, 5));
console.log(getPermutation(4, 9));
