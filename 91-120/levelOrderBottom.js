/*
  Given a binary tree, return the bottom-up level order traversal of its nodes' values. 
  (ie, from left to right, level by level from leaf to root).

  Given binary tree [3,9,20,null,null,15,7],
      3            
     / \            [ [15, 7],
    9  20             [9, 20],
      /  \            [3] ]
    15    7         
  return its bottom-up level order traversal as:
*/

function levelOrderBottom(root) {
  if (!root) return [];

  let stack = [root];
  const result = []
  while (stack.length > 0) {
    const temp = [...stack];
    stack = []
    const arr = [];
    for (let t of temp) {
      arr.push(t.val);
      if (t.left) stack.push(t.left);
      if (t.right) stack.push(t.right);
    }
    result.push(arr);
  }
  return result.reverse();
}

//  Sliding Window
function readBottomTop(root) {
  if (!root) return [];

  let from = 0, to = 1, added = 1;
  let stack = [root];
  const result = []
  while (added > 0) {
    added = 0;
    const arr = [];
    for (let i = from; i < to; i++) {
      const node = stack[i];
      arr.push(node.val);
      if (node.left) {
        stack.push(node.left);
        added ++;
      }
      if (node.right) {
        stack.push(node.right);
        added ++;
      }
    }
    from = to;
    to += added;
    result.push(arr);
  }
  return result.reverse();
}