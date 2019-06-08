/*
  Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

  Input: 3
  Output:  [ [1,null,3,2],  [3,2,null,1],  [3,1,null,null,2],  [2,1,3],  [1,null,2,null,3]  ]
  Explanation:
  The above output corresponds to the 5 unique BST's shown below:

    1         3     3      2      1
      \       /     /      / \      \
      3     2     1      1   3      2
      /     /       \                 \
    2     1         2                 3
*/

class TreeNode {
  constructor(v, l=null, r=null) {
    this.val = v;
    this.left = l;
    this.right = r;
  }
}

function generateTrees(n) {
  if (n < 1) return [];
  return constructTrees(1, n);
}

function constructTrees(start, end) {
  let result = [];
  if (start > end) {
    result.push(null);
    return result;
  }

  for (let i = start; i <= end; i++) {
    const leftTrees = constructTrees(start, i-1);
    const rightTrees = constructTrees(i+1, end);
    for (let left of leftTrees) {
      for (let right of rightTrees) {
        const curr = new TreeNode(i);
        curr.left = left;
        curr.right = right;
        result.push(curr);
      }
    }
  }
  return result
}

ans = generateTrees(3);
for (let node of ans) {
  result = inorderTraversal(node)
  console.log(result.join(', '));
;}

function inorderTraversal(root) {
  result = [];
  traversal(root);
  return result;
}

function traversal(curr) {
  result.push(curr.val);
  if (curr.left) traversal(curr.left);
  else result.push('null')
  if (curr.right) traversal(curr.right);
  else result.push('null')
}
