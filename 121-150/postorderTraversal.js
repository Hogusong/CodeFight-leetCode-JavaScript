// Given a binary tree, return the postorder traversal of its nodes' values.

// Recursion
function postorderTraversal(root) {
  if (!root) return [];
  result = []
  traversal(root);
  return result;    
};

function traversal(node) {
  if (!node) return;
  if (node.left) traversal(node.left);
  if (node.right) traversal(node.right);
  result.push(node.val);
}
