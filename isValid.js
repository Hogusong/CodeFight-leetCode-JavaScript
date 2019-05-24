/*
  Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.

  Input: "()"         Output: true
  Input: "()[]{}"     Output: true
  Input: "(]"         Output: false
  Input: "([)]"       Output: false
  Input: "{[]}"       Output: true
*/

function isValid(str) {
  if (str.length === 0) return true;
  const stack = [];
  const open = '({['
  const dict = {  '(': ')',  '{': '}',  '[': ']'  }
  for (let s of str) {
    if (open.includes(s)) {
      stack.push(s);
    } else {
      const x = stack.pop();
      if (!x || dict[x] != s) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid("()[]{}"));
console.log(isValid("([)]"));
console.log(isValid('({}{(){}})'));
