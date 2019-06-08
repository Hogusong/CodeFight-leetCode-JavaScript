/*
  Given a string containing only digits, restore it by returning all possible valid IP address combinations.

  Input: "25525511135"
  Output: ["255.255.11.135", "255.255.111.35"]
*/

function restoreIpAddresses(s) {
  if (s.length < 4 || s.length > 12) return [];
  return convert(s)
}

function convert(s) { 
  let l = [], size = s.length;
  for (let i = 1; i < size - 2; i++) { 
    for (let j = i + 1; j < size - 1; j++) { 
      for (let k = j + 1; k < size; k++) { 
        snew = s; 
        snew = snew.substring(0, k) +  "." + snew.substring(k); 
        snew = snew.substring(0, j) +  "." + snew.substring(j); 
        snew = snew.substring(0, i) +  "." + snew.substring(i); 
        if (isValid(snew)) l.push(snew);  
      } 
    } 
  } 
  return l; 
} 

function isValid(ip) { 
  let S = ip.split("."); 
  for (let s of S) { 
    const i = +s; 
    if (s.length > 3 || i < 0 || i > 255) return false; 
    if (s.length > 1 && (i == 0 || s[0] == '0')) return false; 
  }
  return true; 
} 

console.log(restoreIpAddresses('25525511135'));
console.log(restoreIpAddresses('12515221125'));
