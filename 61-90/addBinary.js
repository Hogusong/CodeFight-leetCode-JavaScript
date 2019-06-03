/*
  Given two binary strings, return their sum (also a binary string).
  The input strings are both non-empty and contains only characters 1 or 0.

  Input: a = "11", b = "1"          Output: "100"
  Input: a = "1010", b = "1011"     Output: "10101"
*/

function addBinary(a, b) {
  let answer = '';
  let i = a.length-1, j = b.length-1, up = 0;
  while (i >= 0 || j >= 0) {
    const x = (i >= 0) ? +a[i--] : 0;
    const y = (j >= 0) ? +b[j--] : 0;
    const value = (x + y + up) % 2;
    up = Math.floor((x + y + up) / 2);
    answer = value + answer;
  }
  if (up > 0) return up + answer;
  return answer;
}
a = '0';
b = '1001';
console.log(addBinary(a, b))
