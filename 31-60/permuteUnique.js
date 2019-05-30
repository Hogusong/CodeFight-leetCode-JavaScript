/*
  Given a collection of numbers that might contain duplicates, return all possible unique permutations.

  Input: [1,1,2]
  Output:  [  [1,1,2],  [1,2,1],  [2,1,1]  ]
*/

function permuteUnique(nums) {
  if (nums.length < 2) return [nums];

  const len = nums.length;
  let index_arr = [];
  for (let i=0; i<len; i++) {
    index_arr.push(i);
  }

  let answer = [[]];

  for (let i = 0; i < len; i++) {
    const temp = [...answer];
    answer = [];
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < temp.length; k++) {
        if (!temp[k].includes(index_arr[j])) {
          answer.push([index_arr[j], ...temp[k]])
        }
      }
    }
  }
  return convertAndCheck(answer, nums);
}

function convertAndCheck(ans, nums) {
  const result = [];
  for (let i=0; i<ans.length; i++) {
    const temp = convert([...ans[i]], nums);
    if (!included(temp, result)) result.push(temp);
  }
  return result;
}

function convert(arr, nums) {
  for (let i=0; i<arr.length; i++) {
    arr[i] = nums[arr[i]];
  }
  return [...arr];
}

function included(T, A) {
  if (A.length < 1) return false;
  let exist = true;
  for (let i=0; i<A.length; i++) {
    exist = true;
    for (let j=0; j<T.length; j++) {
      if (T[j] !== A[i][j]) {
        exist = false;
        break;
      }
    }
    if (exist) return true;
  }
  return exist;
}

console.log(permuteUnique([1,1,2]));
