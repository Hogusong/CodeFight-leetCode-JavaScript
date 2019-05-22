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
Input: 58,      Output: "LVIII"       L = 50,  V = 5,  III = 3
Input: 1994,    Output: "MCMXCIV"     M = 1000, CM = 900, XC = 90 and IV = 4.
*/

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
};

console.log(intToRoman(1994));
