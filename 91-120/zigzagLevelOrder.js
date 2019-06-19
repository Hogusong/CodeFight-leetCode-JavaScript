/*
  Given a binary tree, return the zigzag level order traversal of its nodes' values. 
  (ie, from left to right, then right to left for the next level and alternate between).

  Given binary tree [3,9,20,null,null,15,7],
      3
     / \
    9  20
      /  \
     15   7
  return its zigzag level order traversal as:
  [ [3],
    [20,9],
    [15,7] ]
*/

function zigzagLevelOrder(root) {
  if (!root) return [];
  let stack = [root], result = [], swap = false;
  while (stack.length > 0) {
    const temp = [...stack], values = [];
    stack = [];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].left)  stack.push(temp[i].left);
      if (temp[i].right) stack.push(temp[i].right);
      values.push(temp[i].val)
    }
    if (swap) result.push(values.reverse());
    else result.push(values);
    swap = !swap;
  }
  return result
}

//  Sliding Window.
function zigzagLevelOrder(root) {
  if (!root) return [];
  let stack = [root], result = [], swap = false;
  let from = 0, to = 1, added = 1
  while (added > 0) {
    const values = [];
    added = 0;
    for (let i = from; i < to; i++) {
      if (stack[i].left) {
        added++;
        stack.push(stack[i].left);
      } 
      if (stack[i].right) {
        stack.push(stack[i].right);
        added++;
      }
      values.push(stack[i].val)
    }
    [from, to] = [to, to + added];
    if (swap) result.push(values.reverse());
    else result.push(values);
    swap = !swap;
  }
  return result
}