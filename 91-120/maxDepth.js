/*
  Given a binary tree, find its maximum depth.
  The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

  Note: A leaf is a node with no children.

  Given binary tree [3,9,20,null,null,15,7],

      3             
     / \
    9  20
      /  \
     15   7        return its depth = 3.
*/

function maxDepth(root) {
  if (!root) return 0;
  maxD = 0;
  searchDepth(root, 0);
  return maxD;
}

function searchDepth(node, count) {
  if (!node) {
    maxD = Math.max(maxD, count);
    return 
  }
  
  count ++;
  searchDepth(node.left, count);
  searchDepth(node.right, count);
}

function maxDepth(root) {
  if (!root) return 0;
  const l_D = maxDepth(root.left)
  const r_D = maxDepth(root.right);
  return 1 + Math.max(l_D, r_D);
}