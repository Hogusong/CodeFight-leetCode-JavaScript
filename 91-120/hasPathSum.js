/*
  Given a binary tree and a sum, determine if the tree has a root-to-leaf path 
  such that adding up all the values along the path equals the given sum.
  Note: A leaf is a node with no children.

  Given the below binary tree and sum = 22,
        5
       / \
      4   8
     /   / \
    11  13  4
   /  \      \
  7    2      1
  return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/

function hasPathSum(root, sum) {
  if (!root) return false;
  let stack = [{'node': root, 'sum': root.val}];
  while (stack.length > 0) {
    const temp = [...stack];
    stack = [];
    for (let t of temp) {
      const node = t.node;
      const nodeSum = t.sum;
      if (!node.left && !node.right && sum === nodeSum) return true;
      if (node.left) stack.push({'node': node.left, 'sum': node.left.val + nodeSum})
      if (node.right) stack.push({'node': node.right, 'sum': node.right.val + nodeSum})
    }
  }
  return false;
}
