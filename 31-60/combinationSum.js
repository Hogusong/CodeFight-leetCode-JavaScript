/*
  Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), 
  find all unique combinations in candidates where the candidate numbers sums to target.

  The same repeated number may be chosen from candidates unlimited number of times.

  All numbers (including target) will be positive integers.
  The solution set must not contain duplicate combinations.

  Input: candidates = [2,3,6,7], target = 7,
  A solution set is:
      [ [7], [2,2,3] ]

  Input: candidates = [2,3,5], target = 8,
  A solution set is:
      [ [2,2,2,2], [2,3,3], [3,5] ]
*/

function combinationSum(candidates, target) {
  if (candidates.length < 1) return [];

  candidates = candidates.sort((a,b) => a - b);
  if (candidates[0] > target) return [];

  answer = [];
  makeCombination([...candidates], target, []);
  return answer;
}

function makeCombination(arr, t, storage) {
  if (arr.length < 1) return;
  if (t === 0) {
    answer.push(storage);
    return;
  }
  if (arr[0] > t)  return;
  const last = arr.length - 1;
  if (t >= arr[last]) {
    makeCombination([...arr], t-arr[last], [...storage, arr[last]]);
  }
  makeCombination(arr.slice(0, last), t, [...storage]);
}

console.log(combinationSum([2,3,6,7], 7));

function comboSum(candidates, target) {
  result = [];
  candidates = candidates.sort((a,b) => a-b);
  if (target >= candidates[0]) comboSumRec(candidates, target, []);
  return result;
}

function comboSumRec(C, target, A) {
  if (target === 0) {
    result.push(A);
    return;
  }
  if (C.length < 1 || C[0] > target) return;
  if (C[0] <= target) comboSumRec([...C], target - C[0], [...A, C[0]]);
  comboSumRec(C.slice(1), target, [...A]);
}

console.log(comboSum([2,6,5,3,7], 8));
