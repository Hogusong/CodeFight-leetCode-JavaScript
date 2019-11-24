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

  dict = {};
  let fact = getFactorial(n-1);
  k--;            // k can be used as index.

  result = [];
  getKthPermute(nums, n, k, fact);
  return result.join('')
}

function getKthPermute(nums, n, k, fact) {
  if (nums.length === 1 || n === 1) {
    result.push(nums[0]);
    return result;
  }
  let index = Math.floor(k / fact);
  result.push(nums[index]);
  nums.splice(index, 1);
  k = k % fact;
  fact = fact / (n - 1);
  n--;
  return getKthPermute(nums, n, k, fact);
}

function getFactorial(n) {
    if (n == 1) return 1;
    if (!dict[n-1]) dict[n-1] = getFactorial(n-1);
    return n * dict[n-1];
}

console.log(getPermutation(9, 37098));
console.log(getPermutation(3, 5));
console.log(getPermutation(4, 9));

//  Recursion : Time limit.
function gneKthPermutation(n, k) {
  count = 0, result = '';
  let fact = 1;
  for (let i = 1; i <= n; i++) fact *= i;
  if (k > fact/2) {
    k = fact - k + 1;
    helpRecReverse(n, n, k, '');
  } else helpRec(n, 0, k, '');
  return result;
}

function helpRec(n, i, k, answer) {
  if (i >= n) {
    count ++;
    if (k === count) {
      result = answer;
      return ;
    }
  }
  for (let j = 1; j <= n; j++) {
    if (answer.includes(j)) continue
    helpRec(n, i+1, k, answer+j)
  }
}

function helpRecReverse(n, i, k, answer) {
  if (i < 1) {
    count ++;
    if (k === count) {
      result = answer;
      return ;
    }
  }
  for (let j = n; j >= 1; j--) {
    if (answer.includes(j)) continue
    helpRecReverse(n, i-1, k, answer+j)
  }
}

console.log(gneKthPermutation(3, 5));
console.log(gneKthPermutation(4, 9));

var getPermutation = function(n, k) {
  N = [];  
  for (let i = 1; i <= n ; i++) N.push(i);
  for (let j = 1; j < k; j++) getNextPermutation();
  return N.join('');
}

function getNextPermutation() {
  let index = N.length-1;
  while (index > 0 && N[index] < N[index-1]) index--;

  let i = N.length-1;
  while (N[index-1] > N[i]) i--;
  [N[index-1], N[i]] = [N[i], N[index-1]];
  
  let left = index;
  let right = N.length - 1;
  while (left < right) {
    [N[left], N[right]] = [N[right], N[left]];
    left++;
    right--;
  }
}

console.log(getPermutation(3,3));