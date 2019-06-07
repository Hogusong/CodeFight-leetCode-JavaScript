/*
  Given a collection of integers that might contain duplicates, nums, 
  return all possible subsets (the power set).

  Note: The solution set must not contain duplicate subsets.

  Input: [1,2,2]
  Output:  [  [2], [1], [1,2,2], [2,2], [1,2], []  ]
*/

function subsetsWithDup(nums) {
  if (!nums) return null;
  if (nums.length < 1) return [[]];

  const end = nums.length - 1;
  let result = [], prev = [];
  for (let i = 0; i <= end; i++) {
    if (i === 0 || nums[i] != nums[i-1]) {
      prev = [...result];
    }

    for (let j = 0; j < prev.length; j++) {
      prev[j] = [...prev[j], nums[i]]
    }

    if (i === 0 || nums[i] != nums[i-1]) {
      prev.push([nums[i]])
    }

    for (let temp of prev) {
      result.push(temp)
    }
  }
  return [[], ...result];
}

N = [1,1,2,2];
console.log(subsetsWithDup(N));
