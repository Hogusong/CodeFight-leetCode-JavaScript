/*
  Given a set of distinct integers, nums, return all possible subsets (the power set).
  Note: The solution set must not contain duplicate subsets.

  Input: nums = [1,2,3]
  Output:[ [], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3] ]
*/

function subsets(nums) {
  if (nums.length < 1) return [[]];
  if (nums.length < 2) return [[], nums];
  let ans = [[]];
  for (let n of nums) {
    const temp = [...ans];
    for (let t of temp) {
      ans.push([...t, n])
    }
  }
  return ans;
}

console.log(subsets([1,2,3]));
