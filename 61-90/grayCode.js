/*
  The gray code is a binary numeral system where two successive values differ in only one bit.
  Given a non-negative integer n representing the total number of bits in the code, 
  print the sequence of gray code. A gray code sequence must begin with 0.

  Input: 2        Output: [0,1,3,2]
  Explanation:
  00 - 0
  01 - 1
  11 - 3
  10 - 2

  For a given n, a gray code sequence may not be uniquely defined.
  For example, [0,2,3,1] is also a valid gray code sequence.

  00 - 0
  10 - 2
  11 - 3
  01 - 1
  Example 2:

  Input: 0
  Output: [0]
  Explanation: We define the gray code sequence to begin with 0.
              A gray code sequence of n has size = 2n, which for n = 0 the size is 20 = 1.
              Therefore, for n = 0 the gray code sequence is [0].
*/

function grayCode(n) {
  if (n === 0) return ['0']
  dict = {}
  const answer = grayCodeRec(n)
  for (let i = 0; i < answer.length; i++) {
    answer[i] = convert(answer[i]);
  }
  return answer
}

function grayCodeRec(n) {
  if (n === 1) return ['0', '1'];
  if (!dict[n-1]) dict[n-1] = grayCodeRec(n-1);
  const addZero = combine('0', dict[n-1]);
  const addOne = combine('1', dict[n-1]);
  return [...addZero, ...addOne];
}

function combine(prefix, arr) {
  if (prefix === '1') arr = arr.reverse();
  const temp = [];
  for (let code of arr) {
    temp.push(prefix+code);
  }
  return temp;
}

function convert(str) {
  const arr = str.split('');
  let x = 1;
  let number = 0;
  while (arr.length > 0) {
    const n = arr.pop();
    number += +n * x;
    x = x * 2;
  }
  return number;
}

console.log(grayCode(3));
