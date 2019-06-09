/*
  Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

  Input: 3            Output: 5
  Given n = 3, there are a total of 5 unique BST's:

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

function numTrees(n) {
  if (n < 3) return n;

  dict = {};
  dict[0] = 1;
  return createTrees(n);
}

function createTrees(n) {
  if (n < 3) return n;
  let total = 0
  for (let i = 1; i <= n; i++) {
    if (!dict[i-1]) dict[i-1] = createTrees(i-1);
    if (!dict[n-i]) dict[n-i] = createTrees(n-i);
    total += dict[i-1] * dict[n-i];
  }
  return total ;
}

for (let i = 1; i <= 7; i++) console.log(numTrees(i));
