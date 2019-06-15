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

function convertObj(s, rows) {
  if (rows < 2) return s;
  let r = 0;
  let dict = {};
  let key = 1;
  for (let row=0; row<rows; row++) {
    dict[row] = '';
  }
  for (let i=0; i<s.length; i++) {
    dict[r] += s[i];
    r += key;
    if (r === rows - 1) {
      key = -1;
    } 
    if (r === 0) {
      key = 1;
    }
  }
  let str = '';
  for (let r=0; r<rows; r++) {
    str += dict[r]
  }
  return str;
}

function conversion(s, rows) {
  if (rows < 2) return s;
  let r = 0;
  let result = [];
  let key = 1;
  for (let i=0; i<rows; i++) {
    result.push([]);
  }
  for (let i=0; i<s.length; i++) {
    result[r].push(s[i])
    r += key;
    if (r === rows - 1) {
      key = -1;
    } 
    if (r === 0) {
      key = 1;
    }
  }
  let str = '';
  for (let r=0; r<rows; r++) {
    str += result[r].join('')
  }
  return str;
}

function conversion(s, rows) {
  if (rows < 2 || rows >= s.length) return s;
  let r = 0;
  let result = [];
  let key = 1;
  for (let i=0; i<rows; i++) {
    result.push('');
  }
  for (let i=0; i<s.length; i++) {
    result[r] += s[i];
    r += key;
    if (r === rows - 1) {
      key = -1;
    } 
    if (r === 0) {
      key = 1;
    }
  }
  return result.join('');
}

console.log(conversion("PAYPALISHIRING", 3));
console.log(convertObj("PAYPALISHIRING", 3));
console.log(conversion("PAYPALISHIRING", 4));
console.log(convertObj("PAYPALISHIRING", 4));

function convert(s, rows) {
  const len = s.length;
  if (len <= rows || rows < 2) return s;
  const result = [];
  for (let i = 0; i < rows; i++) result.push('');
  for (let i = 0; i < rows; i++) {
    let index = 0, count = 0;
    while (index <= len) {
      index = count * (rows-1) * 2
      if (i === 0 || i === rows - 1) {
        if (index + i < len) result[i] += s[index + i]
      } else {
        if (index - i >= 0 && index - i < len) result[i] += s[index - i];
        if (index + i >= 0 && index + i < len) result[i] += s[index + i];
      }
      count ++;
    }
  }
  return result.join('');
}

console.log(convert("PAYPALISHIRING", 4));
