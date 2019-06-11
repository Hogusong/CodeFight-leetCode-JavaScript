/*
  Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
  For this problem, a height-balanced binary tree is defined as a binary tree 
  in which the depth of the two subtrees of every node never differ by more than 1.

  Given the sorted array: [-10,-3,0,5,9],
  One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

        0
      / \
    -3   9
    /   /
  -10  5
*/

class TreeNode {
  constructor(v, l=null, r=null) {
    this.val = v;
    this.left = l;
    this.right = r;
  }
}

function sortedArrayToBST(nums) {
  if (nums.length < 0) return null;
  if (nums.length < 2) return new TreeNode(nums[0]);

  return makeBST(nums, 0, nums.length-1);
}

function makeBST(nums, from, to) {
  if (from > to) return null;
  if (from === to) return new TreeNode(nums[from]);

  const mid = Math.floor((from + to + 1) / 2);
  const node = new TreeNode(nums[mid]);
  node.left = makeBST(nums, from, mid-1);
  node.right = makeBST(nums, mid+1, to);
  return node;
}

nums = [-10,-3,0,5,9];
console.log(sortedArrayToBST(nums));
