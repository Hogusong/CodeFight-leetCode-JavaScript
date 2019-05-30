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
  if (num1 === '0' || num2 === '0') return '0'

  let n1 = +num1, n2 = +num2;
  if (n1 > n2) [n1, num1, n2, num2] = [n2, num2, n1, num1];
  let count = 0, ans = '';
  let jump_count = '1', jump_value = num2;

  while (count < n1) {
    if (+addTwo(''+count, jump_count) <= n1) {
      ans = addTwo(ans, jump_value);
      count = +addTwo(''+count, jump_count);
      jump_count = addTwo(jump_count, jump_count);
      jump_value = addTwo(jump_value, jump_value);
    } else {
      jump_count = '1';
      jump_value = num2
      ans = addTwo(ans, jump_value);
      count = +addTwo(''+count, '1');
    }
  }
  return ans;
}

function addTwo(s1, s2) {
  let i_1 = s1.length-1, i_2 = s2.length-1, up = 0;
  let ans = '';
  while (i_1 >= 0 || i_2 >= 0) {
    const value = (i_1 >= 0 ? +s1[i_1] : 0) + (i_2 >= 0 ? +s2[i_2] : 0) + up;
    up = Math.floor(value / 10);
    const v = value % 10;
    ans = v + ans;
    i_1--;
    i_2--;
  }
  if (up > 0) ans = up + ans;
  return ans;
}

n1 = '123456789';
n2 = '987654321';           //  "121932631112635269"
n1 = "96423702883453279"
n2 = "72156405165936898"    //  6957587772858372748255887645188542
                            //  6957587772858389429556486482605809
console.log(multiply(n1, n2));
