/*
  Given two non-negative integers num1 and num2 represented as strings, 
  return the product of num1 and num2, also represented as a string.

  Input: num1 = "2", num2 = "3"           Output: "6"
  Input: num1 = "123", num2 = "456"       Output: "56088"
  Note: The length of both num1 and num2 is < 110.
        Both num1 and num2 contain only digits 0-9.
        Both num1 and num2 do not contain any leading zero, except the number 0 itself.
        You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

function multiply(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  if (num1.length > num2.length) {
    a = num1.split('');
    b = num2.split('');  
  } else {
    a = num2.split('');
    b = num1.split('');  
  }
  const ans = [];
  for (let i=a.length-1; i>=0; i--) {
    const temp = [];
    for (let k=0; k<a.length-1-i; k++) {
      temp.push(0);
    }
    for (let j=b.length-1; j>=0; j--) {
      temp.push(a[i]*b[j]);
    }
    ans.push(temp);
  }
  const result = mergeArr(ans);
  return result.reverse().join('');
}

function mergeArr(arr) {
  if (arr.length == 1) return arr[0];
  const mid = Math.floor(arr.length / 2);
  const left = mergeArr(arr.slice(0, mid));
  const right = mergeArr(arr.slice(mid));
  return combineTwo(left, right);
}

function combineTwo(L, R) {
  const temp = [];
  let idx = 0, up = 0;
  while (idx < L.length || idx < R.length) {
    const sum = (idx < L.length ? L[idx] : 0) + (idx < R.length ? R[idx] : 0) + up;
    const value = sum % 10;
    up = Math.floor(sum / 10);
    temp.push(value);
    idx++;
  }
  if (up > 0)  temp.push(up)
  return temp;
}

function multiply2(num1, num2) {
  if (num1 == '0' || num2 == '0') return '0';

  a = num1.split('');
  b = num2.split('');
  let result = [];

  for (let i = a.length-1; a[i] >= 0; i--) {
    for (let j = b.length-1; b[j] >= 0; j--) {
      if (!result[i + j]) {
        result[i + j] = 0;
      }
      result[i + j] += a[i] * b[j];
    }
  }

  result = result.reverse();
  for (let i = 0; result[i] >= 0; i++) {
    if (result[i] >= 10) {
      if (!result[i + 1]) {
        result[i + 1] = 0;
      }
      result[i + 1] += parseInt(result[i] / 10);
      result[i] %= 10;
    }
  }

  return result.reverse().join('');
}

n1 = '123456789';
n2 = '987654321';           //  "121932631112635269"
// n1 = "96423702883453279"
// n2 = "72156405165936898"    //  6957587772858372748255887645188542
// n1 = '123';
// n2 = '23';
n1 = '9';
n2 = '99';
console.log(multiply(n1, n2));
console.log(multiply2(n1, n2));
