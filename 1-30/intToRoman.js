/*
  Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
  Symbol       Value
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000

  For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. 
  The number twenty seven is written as XXVII, which is XX + V + II.
  Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. 
  Instead, the number four is written as IV. Because the one is before the five we subtract it making four. 
  The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

  I can be placed before V (5) and X (10) to make 4 and 9. 
  X can be placed before L (50) and C (100) to make 40 and 90. 
  C can be placed before D (500) and M (1000) to make 400 and 900.
  Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

  Input: 3,       Output: "III"
  Input: 4,       Output: "IV"
  Input: 9,       Output: "IX"
  Input: 58,      Output: "LVIII"       Explanation: L = 50, V = 5, III = 3.
  Input: 1994,    Output: "MCMXCIV"     Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

function intToRoman(num) {
  let ans = '', x = 0;
  if (num >= 1000) {
    x = Math.floor(num / 1000);
    ans += 'M'.repeat(x);
    num = num % 1000;
  } 
  if (num >= 100) {
    x = Math.floor(num / 100);
    if (x == 9) ans += 'CM'
    else if (x >= 5) ans += 'D' + 'C'.repeat(x-5);
    else if (x == 4) ans += 'CD'
    else ans += 'C'.repeat(x)
    num = num % 100;
  }
  if (num >= 10) {
    x = Math.floor(num / 10);
    if (x == 9) ans += 'XC'
    else if (x >= 5) ans += 'L' + 'X'.repeat(x-5);
    else if (x == 4) ans += 'XL'      
    else ans += 'X'.repeat(x)
    num = num % 10;
  }
  if (num === 9) ans += 'IX'
  else if (num >= 5) ans += 'V' + 'I'.repeat(num-5);
  else if (num == 4) ans += 'IV'
  else ans += 'I'.repeat(num)

  return ans;
}

function intToRoman(num) {
  const R = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  const N = [1000, 500, 100, 50, 10, 5, 1]
  let answer = '', i = 2, value = 0;
  if (num >= 1000) {
    value = Math.floor(num / 1000);
    answer += R[0].repeat(value);
    num = num % 1000;
  }
  while (num > 0) {
    if (num >= N[i]) {
      if (num >= N[i-1]) {
        value = Math.floor((num - N[i-1]) / N[i]);
        if (value > 3) answer += R[i] + R[i-2];
        else answer += R[i-1] + R[i].repeat(value);
        num -= (N[i-1] + value * N[i]);
      } else {
        value = Math.floor(num / N[i]);
        if (value > 3) answer += R[i] + R[i-1];
        else answer += R[i].repeat(value);
        num -= value * N[i];
      }
    }
    i += 2;
  }
  return answer;
}

console.log(intToRoman(9));
console.log(intToRoman(239));
console.log(intToRoman(999));
console.log(intToRoman(154));
console.log(intToRoman(94));

function intToRoman(num) {
  const R = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  const N = [1000, 500, 100, 50, 10, 5, 1]
  let answer = '', i = 0, remain = 0, value = 0;
  while (num > 0) {
    if (i === 0 && num >= N[i]) {
      answer += R[i];
      num -= N[i]
    } else {
      i += 2;
      value = Math.floor(num / N[i]);
      remain = num % N[i];
      if (value === 9) {
        answer += R[i] + R[i-2];
      } else if (value > 4) {
        answer += R[i-1];
        for (let j=0; j<value-5; j++) {
          answer += R[i];
        }
      } else if (value === 4) {
        answer += R[i] + R[i-1];
      } else {
        for (let j=0; j<value; j++) {
          answer += R[i];
        }
      }
      num = remain;
    }
  }   
  return answer;
}
