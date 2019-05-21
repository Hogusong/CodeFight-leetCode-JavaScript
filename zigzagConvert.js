/*
  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
  (you may want to display this pattern in a fixed font for better legibility)

  Write the code that will take a string and make this conversion given a number of rows:

  string convert(string s, int numRows);
  Example 1:

  Input: s = "PAYPALISHIRING", numRows = 3
  Output: "PAHNAPLSIIGYIR"
      P   A   H   N
      A P L S I I G
      Y   I   R

  Input: s = "PAYPALISHIRING", numRows = 4
  Output: "PINALSIGYAHRPI"
      P     I    N
      A   L S  I G
      Y A   H R
      P     I
*/

function conversion(s, rows) {
  if (rows < 2) return s;
  let r = 0;
  let result = [];
  let direction = 'down';
  for (let i=0; i<rows; i++) {
    result.push([]);
  }
  for (let i=0; i<s.length; i++) {
    result[r].push(s[i])
    if (direction === 'down') {
      if (r === rows - 1) {
        direction = 'up';
        r--;
      } else {
        r++;
      }
    } else {
      if (r === 0) {
        direction = 'down';
        r++;
      } else {
        r--;
      }
    }
  }
  let str = '';
  for (let r=0; r<rows; r++) {
    str += result[r].join('')
  }
  return str;
}

console.log(conversion("PAYPALISHIRING", 3));
console.log(conversion("PAYPALISHIRING", 4));
