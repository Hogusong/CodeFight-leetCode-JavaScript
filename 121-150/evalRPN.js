/*
  Evaluate the value of an arithmetic expression in Reverse Polish Notation.
  Valid operators are +, -, *, /. Each operand may be an integer or another expression.

  Division between two integers should truncate toward zero.
  The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.

  Input: ["2", "1", "+", "3", "*"],           Output: 9
  Explanation: ((2 + 1) * 3) = 9

  Input: ["4", "13", "5", "/", "+"],          Output: 6
  Explanation: (4 + (13 / 5)) = 6

  Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"],         Output: 22
  Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
              = ((10 * (6 / (12 * -11))) + 17) + 5
              = ((10 * (6 / -132)) + 17) + 5
              = ((10 * 0) + 17) + 5
              = (0 + 17) + 5
              = 17 + 5
              = 22
*/

function evalRPN(tokens) {
  let stack = [];
  for (let t of tokens) {
    if (!'*/+-+'.includes(t)) {
      stack.push(t);
    } else {
      const y = stack.pop();
      const x = stack.pop();
      stack.push(process(+x, +y, t));
    }
  }
  return stack.pop();
}

function process(x, y, t) {
  if (t === '*') return x * y;
  if (t === '/') {
    if (x * y < 0) return Math.ceil(x / y);
    return Math.floor(x / y);
  }
  if (t === '+') return x + y;
  if (t === '-') return x - y;
}

T = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
T = ["4","13","5","/","+"];
T = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];    //  22
T = ["4","-2","/","2","-3","-","-"];    //  -7
console.log(evalRPN(T));

function makeRPN(str) {
  const strArray = parseStr(str);
  const stack = [], ans = [];
  for (let s of strArray) {
    if (isNaN(s)) {
      if (s != ')') {
        stack.push(s);
      } else {
        while (stack[stack.length-1] != '(') {
          ans.push(stack.pop())
        }
        stack.pop();
      }
    } else {
      ans.push(s);
    }
  }
  if (stack.length > 0) ans.push(stack.pop());
  return ans;
}

function parseStr(str) {
  const S = str.replace(/ /g, '').split('');
  let ans = [], value = '';
  for (let s of S) {
    if ('()*/+'.includes(s)) {
      if (value.length > 0) {
        ans.push(value);
        value = ''
      }
      ans.push(s);
    } else if (s === '-') {
      if ('(*/+-'.includes(ans[ans.length-1])) {
        value = s;
      } else {
        if (value.length > 0) {
          ans.push(value);
          value = ''
        }
          ans.push(s);
      }
    } else {
      value += s;
    }
  }
  if (value.length > 0) ans.push(value);
  return ans;
}

str = '((10 * (6 / ((9 + 3) * -11))) + 17) + 5'
T = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(makeRPN(str));
