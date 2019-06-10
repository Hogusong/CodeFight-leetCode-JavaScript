/*
Input:     1         1            Output: true
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Input:     1         1            Output: false
          /           \
         2             2

        [1,2],     [1,null,2]

Input:     1         1            Output: false
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]
*/

function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p && q || p && !q) return false;
  if (p.val != q.val) return false;

  const left = isSameTree(p.left, q.left);
  const right = isSameTree(p.right, q.right);
  return left && right;
}
