/*
  Given a binary tree, return the level order traversal of its nodes' values.
  (ie, from left to right, level by level).

  Given binary tree [3,9,20,null,null,15,7],
      3
     / \
    9  20
      /  \
     15   7
  return its level order traversal as:
  [ [3],
    [9,20],
    [15,7] ]
*/

function levelOrder(root) {
  if (!root) return [];
  let stack = [root], result = [];
  while (stack.length > 0) {
    const temp = [...stack], values = [];
    stack = [];
    for (let t of temp) {
      values.push(t.val);
      if (t.left) stack.push(t.left);
      if (t.right) stack.push(t.right);
    }
    result.push(values);
  }
  return result;
}
