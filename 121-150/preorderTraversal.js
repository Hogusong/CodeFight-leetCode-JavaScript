// Given a binary tree, return the preorder traversal of its nodes' values.

function preorderTraversal(root) {
  if (!root) return [];
  result = [];
  traversal(root);
  return result;
};

function traversal(node) {
  if (!node) return ;
  result.push(node.val);
  if (node.left) traversal(node.left);
  if (node.right) traversal(node.right);
}

// Using Stack
function preorder(root) {
  if (!root) return [];
  let result = [], stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
}
