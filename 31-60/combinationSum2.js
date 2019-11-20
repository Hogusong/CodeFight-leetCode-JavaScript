/*
  Given a collection of candidate numbers (candidates) and a target number (target), 
  find all unique combinations in candidates where the candidate numbers sums to target.

  Each number in candidates may only be used once in the combination.

  All numbers (including target) will be positive integers.
  The solution set must not contain duplicate combinations.
  Example 1:

  Input: candidates = [10,1,2,7,6,1,5], target = 8,
  A solution set is: [ [1, 7], [1, 2, 5], [2, 6], [1, 1, 6] ]

  Input: candidates = [2,5,2,1,2], target = 5,
  A solution set is:  [ [1,2,2], [5] ]
*/

function combinationSum2(candidates, target) {
  if (candidates.length < 1) return [];

  candidates = candidates.sort((a,b) => a - b);
  if (candidates[0] > target) return [];

  answer = [];
  makeCombination(candidates, target, []);
  return answer;
}

function makeCombination(arr, t, storage) {
  if (t === 0) {
    if (!inAnswer(storage)) answer.push(storage);
    return;
  }
  if (arr.length < 1) return;
  if (arr[0] > t) return;

  const last = arr.length - 1;
  if (t >= arr[last]) {
    makeCombination(arr.slice(0, last), t-arr[last], [...storage, arr[last]]);
  }
  makeCombination(arr.slice(0, last), t, [...storage]);
}

function inAnswer(storage) {
  if (answer.length < 1) return false;
  let exist = false;
  for (let arr of answer) {
    if (arr.length === storage.length) {
      exist = true;
      for (let i=0; i<arr.length; i++) {
        if (arr[i] != storage[i]) {
          exist = false;
          break;
        }
      }
      if (exist) return true;
    }
  }
  return exist;
}

console.log(combinationSum2([10,1,2,7,6,1,5], 8));
console.log(combinationSum2([4,4,2,1,4,2,2,1,3], 6));

var combinationSum2 = function(candidates, target) {
  candidates = candidates.sort((a,b) => a - b);
  if (candidates.length < 1 || candidates[0] > target) return [];
  result = [];
  subSet = new Set();
  makeCombination(candidates, target, 0, []);
  return result; 
}

function makeCombination(C, T, i, data) {
  if (T === 0) {
    const key = data.join(':');
    if (!subSet.has(key)) {
      subSet.add(key);
      result.push([...data]);
      return;  
    }
  }
  if (i > C.length - 1 || C[i] > T) return;
  makeCombination(C, T, i+1, data);
  makeCombination(C, T-C[i], i+1, [...data, C[i]])
}
