/*
  Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
  If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
  The replacement must be in-place and use only constant extra memory.

  Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
        1,2,3,0 → 1,3,0,2
        3,2,1,0 → 0,1,2,3
        2,1,3,0 → 2,3,0,1
        1,1,5 → 1,5,1
*/

function nextPermutation(nums) {
  if (nums.length < 2) return nums;
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i+1]) i--;
  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[i] >= nums[j]) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];      
  }
    
  j = nums.length - 1;
  while (j > i+1 ) {
    [nums[i+1], nums[j]] = [nums[j], nums[i+1]];
    i++;
    j--;
  }
}

console.log(nextPermutation([1,4,2,5,3]));  //  1 4 3 2 5
console.log(nextPermutation([5,4,3,2,1]));  //  1 2 3 4 5

//  Getting Permutation
function makePermutation(arr) {
  if (arr.length < 2) return arr[0];
  result = [];
  permutationRec(arr, []);
  return result.length;
}

function permutationRec(arr, answer) {
  if (arr.length < 2) {
    result.push([...answer, arr[0]]);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    permutationRec([...arr.slice(0, i), ...arr.slice(i+1)], [...answer, arr[i]])
  }
}

console.time('Rec');
console.log(makePermutation([1,2,3,4,5,6,7,8,9]));
console.timeEnd('Rec');

var makePermutations = function(arr) {
  let result = [[]];
  for (let i = 0; i < arr.length; i++) {
    const temp = [...result];
    result = [];
    for (let j = 0; j < arr.length; j++) {
      temp.forEach(t => {
        if (!t.includes(arr[j])) {
          result.push([arr[j], ...t]);
        }
      })
    }
  }
  return result.length;
}

console.time('Array');
console.log(makePermutations([1,2,3,4,5,6,7,8,9]));
console.timeEnd('Array');

