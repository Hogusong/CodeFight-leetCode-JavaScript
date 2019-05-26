/*
  Given a string containing just the characters '(' and ')', 
  find the length of the longest valid (well-formed) parentheses substring.

  Input: "(()"              Output: 2   "()"
  Input: ")()())"           Output: 4   "()()"
  Input: ")(())))(())())"   Output: 6   "(())()""
  Input: ")()(((())))("     OUtput: 10  "()(((())))"
*/

// Brute Force
function longestValidParenthesesBF(s) {
  if (!s || s.length < 2) return 0;
  let max_str = '';
  for (let i = 0; i <= s.length; i++) {
    for (let j = i + 2; j <= s.length; j+=2) {
      const str = s.substr(i,j);
      if (isValid(str)) {
        max_str = (max_str.length > j - i) ? max_str : str;
      }
    }
  }
  return [max_str.length, max_str];
}

function isValid(s) { 
  let stack = [];
  for (let i=0; i<s.length; i++) {
    if (s[i] === '(') stack.push('(');
    else if (stack.length > 0 && stack[stack.length-1] === '(') stack.pop();
    else return false;
  }
  return stack.length === 0;
}

s = ")(())))(())())";
s = ")()(((())))(";
s = ")()())";
s = "(()";
strs = ["()", "(()", ")()())", ")()(((())))(", ")(())))(())())", ")(((((()())()()))()(()))(", "(((()(()", "))))))))"]
for (let s of strs) {
  console.log(longestValidParenthesesBF(s));   //  2, 2, 4, 10, 6, 22, 2, 0
}
