/*
  Implement atoi which converts a string to an integer.
  The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. 
  Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, 
  and interprets them as a numerical value.

  The string can contain additional characters after those that form the integral number, 
  which are ignored and have no effect on the behavior of this function.

  If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists 
  because either str is empty or it contains only whitespace characters, no conversion is performed.

  If no valid conversion could be performed, a zero value is returned.

  Only the space character ' ' is considered as whitespace character.
  Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
  If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
  
  Input: "42"                     Output: 42
  Input: "   -42"                 Output: -42
  Explanation: The first non-whitespace character is '-', which is the minus sign.
              Then take as many numerical digits as possible, which gets 42.

  Input: "4193 with words"        Output: 4193
  Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

  Input: "words and 987"          Output: 0
  Explanation: The first non-whitespace character is 'w', which is not a numerical 
               digit or a +/- sign. Therefore no valid conversion could be performed.

  Input: "-91283472332"           Output: -2147483648
  Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
               Thefore INT_MIN (−231) is returned.
*/

var myAtoi = function(str) {
  str = str.trim();
  if (str.length < 1) return 0;
  const pattA = /[-+\d]/g;
  const pattB = /[\d]/g;
  let to = 0;
  if (str[0].match(pattA)) {
      for (let i=1; i<str.length; i++) {
          if (str[i].match(pattB)) {
              to = i;
          } else {
              break;
          }
      }
  } else {
      return 0
  }   
  const ans = +str.substring(0, to+1);
  if (!ans) return 0;
  if (ans > 2147483647) return 2147483647;
  if (ans < -2147483648) return -2147483648;
  return ans;
};

function myAtoi(str) {
    str = str.trim();
    if (str.length < 1) return 0;
    const pattA = /[-+\d]/g;
    const pattB = /[\d]/g;
    let i = 0;
    if (str[0].match(pattA)) {
        for (i=1; i<str.length; i++) {
            if (!str[i].match(pattB)) break
        }
    } else {
        return 0
    }   
    const ans = +str.substring(0, i);
    if (!ans) return 0;
    if (ans > 2147483647) return 2147483647;
    if (ans < -2147483648) return -2147483648;
    return ans;  
}

function myAtoi(str) {
    str = str.trim();
    if (str.length < 1) return 0;
    if (!str[0].match(/[0-9-+]/)) return 0;
    let i = 1, j = 0;
    while (i < str.length && str[i].match(/[0-9]/)) {
        i++;
    }
    if (str[0] === '-' || str[0] === '+') j = 1;
    let ans = 0;
    while (j < i) {
        ans = ans * 10 + +str[j++];
        if (ans > 2147483648) break
    }
    if (str[0] === '-') ans = -ans;
    if (ans < -2147483648) return -2147483648;
    if (ans > 2147483647) return 2147483647;
    return ans;
}

S = ['   -42', '4193 with', 'abc 41', '95236598412442'];
S.forEach(s => console.log(myAtoi(s)));

var myAtoi = function(str) {
    const exp = '0123456789+-';
    const digit = '0123456789';
    let numStr = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] == ' ' && numStr.length == 0) continue;
      if (numStr.length > 0) {
        if (digit.includes(str[i])) numStr += str[i];
        else break;
      } else {
        if (exp.includes(str[i])) numStr = str[i];
        else break;
      } 
    }
    if (numStr.length < 1) return 0;
    let ans = 0;
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] == '-' || numStr[i] == '+') continue;
        ans = ans * 10 + parseInt(numStr[i]);
    }
    if (numStr[0] === '-') ans *= -1;
    if (ans < -2147483648) return -2147483648;
    if (ans > 2147483647) return 2147483647;
    return ans;
  };
  
  function myAtoi(str) {
    str = str.trim();
    if ('0123456789+-'.indexOf(str[0]) < 0) return 0;
  
    const prefix = str[0] == '-' ? -1 : 1;
    let n = 0;
    let index  = (str[0] == '-' || str[0] == '+') ? 1 : 0;
  
    while (index < str.length) {
      if (!'0123456789'.includes(str[index])) break;
      n = n * 10 + (+str[index++]);
    }
    n = prefix * n;
    if ( n < -2147483648) return -2147483648;
    if ( n > 2147483647) return 2147483647;
    return n;
  }
  