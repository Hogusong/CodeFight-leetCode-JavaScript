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
