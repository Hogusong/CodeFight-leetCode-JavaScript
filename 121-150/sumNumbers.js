/*
  Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
  An example is the root-to-leaf path 1->2->3 which represents the number 123.
  Find the total sum of all root-to-leaf numbers.
  Note: A leaf is a node with no children.

  Input: [1,2,3]          Output: 25
        1
       / \
      2   3

  Explanation:  The root-to-leaf path 1->2 represents the number 12.
                The root-to-leaf path 1->3 represents the number 13.
                Therefore, sum = 12 + 13 = 25.

  Input: [4,9,0,5,1]      Output: 1026
          4
         / \
        9   0
       / \
      5   1
  Explanation:  The root-to-leaf path 4->9->5 represents the number 495.
                The root-to-leaf path 4->9->1 represents the number 491.
                The root-to-leaf path 4->0 represents the number 40.
                Therefore, sum = 495 + 491 + 40 = 1026.
*/

//  Recursion
function sumNumbers(root) {
  if (!root) return 0;
  sum = 0;
  getPathRec(root, '');
  return sum;
}

function getPathRec(node, str) {
  if (!node.left && !node.right) {
    sum += +(str + node.val);
    return;
  }
  str += node.val;
  if (node.left) getPathRec(node.left, str);
  if (node.right) getPathRec(node.right, str);
}

//  Using Stack.
function sumAllPaths(root) {
  if (!root) return 0;

  let stack = [[root]], ans = [];
  while (stack.length > 0) {
    const temp = [...stack];
    stack = [];
    for (let t of temp) {
      const node = t[t.length-1];
      if (!node.left && !node.right) ans.push(t);
      else {
        if (node.left) stack.push([...t, node.left])
        if (node.right) stack.push([...t, node.right])
      }
    }
  }
  let sum = 0;
  for (let a of ans) {
    let str = '';
    for (let n of a) {
      str += n.val;
    }
    sum += +str;
  }
  return sum;
}
