/*
  The count-and-say sequence is the sequence of integers with the first five terms as following:

  1.     1            1 is read off as "one 1"   -->  '11'
  2.     11           11 is read off as "two 1s" -->  '21'
  3.     21           21 is read off as "one 2, then one 1"   -->  '1211'
  4.     1211
  5.     111221

  Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.
  Note: Each term of the sequence of integers will be represented as a string.
*/

function countAndSay(n) {
  let strNo = '1';
  for (let i=1; i<n; i++) {
    let pre_str = '';
    let count = 0;
    const arrNo = strNo.split('');
    strNo = '';
    for (let j=0; j<arrNo.length; j++) {
      if (pre_str === '') {
        pre_str = arrNo[j];
        count++;
      } else if (pre_str === arrNo[j]) {
        count++;
      } else {
        strNo += '' + count + pre_str;
        pre_str = arrNo[j];
        count = 1;
      }
    }
    strNo += '' + count + pre_str;
  }
  return strNo
}

console.log(countAndSay(5));

function countSay(n) {
  let strNo = '1';
  for (let i = 1; i < n; i++) {
    const temp = strNo.split('');
    let count = 1;
    strNo = '';
    for (let j = 1; j < temp.length; j++) {
      if (temp[j-1] != temp[j]) {
        strNo += '' + count + temp[j-1];
        count = 1;
      } else {
        count ++;
      }
    }
    strNo += '' + count + temp[temp.length - 1];
  }
  return strNo;
}

var countAndSay = function(n) {
  if (n == 1) return '1';
  let str = '1' ;
  for (let i = 1; i < n; i++) {
    let temp = '';
    let count = 0, prev = '';
    for (let j = 0; j < str.length; j++) {
      if (!prev) {
        count++;
        prev = str[j];
      } else if (prev === str[j]) count++;
      else {
        temp += count + prev;
        prev = str[j];
        count = 1;
      }
    }
    str = temp + count + prev;
  }
  return str;
}