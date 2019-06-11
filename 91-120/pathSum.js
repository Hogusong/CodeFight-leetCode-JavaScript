/*

  Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
  Note: A leaf is a node with no children.

  Given the below binary tree and sum = 22,

             5
            / \
           4   8
          /   / \
         11  13  4
        /  \    / \          Return : [ [5,4,11,2], [5,8,4,5] ]
       7    2  5   1
 */

 //  Using Stack
function pathSum(root, sum) {
  if (!root) return [];
  let stack = [{'node': root, 'pathSum': root.val, 'path': [root.val]}];
  const result = [];
  while (stack.length > 0) {
    const temp = [...stack];
    stack = [];
    for (let t of temp) {
      const node = t.node;
      const pathSum = t.pathSum;
      const path = t.path;
      if (!node.left && !node.right && pathSum === sum) result.push(path);
      if (node.left) {
        stack.push({'node': node.left,
                    'pathSum': pathSum + node.left.val, 
                    'path': [...path, node.left.val] });
      }
      if (node.right) {
        stack.push({'node': node.right,
                    'pathSum': pathSum + node.right.val, 
                    'path': [...path, node.right.val] });
      }
    }
  }
  return result;
}

//  Recursion
function pathSum(root, sum) {
  if (!root) return [];
  result = [];
  findPathSum(root, sum, [root.val], root.val);
  return result;
}

function findPathSum(node, sum, path, pathSum) {
  if (!node.left && !node.right) {
    if (sum === pathSum) result.push(path);
    return
  }

  if (node.left && node.right) {
    findPathSum(node.left, sum, [...path, node.left.val], pathSum + node.left.val);
    findPathSum(node.right, sum, [...path, node.right.val], pathSum + node.right.val);
  } else if (!node.right) {
    findPathSum(node.left, sum, [...path, node.left.val], pathSum + node.left.val);
  } else findPathSum(node.right, sum, [...path, node.right.val], pathSum + node.right.val);
}
