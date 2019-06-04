/*
  Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

  You have the following 3 operations permitted on a word:
      Insert a character,   Delete a character,   Replace a character

  Input: word1 = "horse", word2 = "ros",              Output: 3
      horse -> rorse (replace 'h' with 'r')
      rorse -> rose (remove 'r')
      rose -> ros (remove 'e')
  Input: word1 = "intention", word2 = "execution",    Output: 5
      intention -> inention (remove 't')
      inention -> enention (replace 'i' with 'e')
      enention -> exention (replace 'n' with 'x')
      exention -> exection (replace 'n' with 'c')
      exection -> execution (insert 'u')
*/

//  Divide and Conquer
function minDistanceDC(word1, word2) {
  return editDist(word1, word2, word1.length, word2.length);
}

function editDist(W1 , W2 , m, n) { 
  // If first string is empty, the only option is to 
	// insert all characters of second string into first 
	if (m == 0) return n; 
	
	// If second string is empty, the only option is to 
	// remove all characters of first string 
	if (n == 0) return m; 
	
	// If last characters of two strings are same, nothing 
	// much to do. Ignore last characters and get count for 
	// remaining strings. 
	if (W1[m-1] === W2[n-1]) return editDist(W1, W2, m-1, n-1); 
	
	// If last characters are not same, consider all three 
	// operations on last character of first string, recursively 
	// compute minimum cost for all three operations and take 
	// minimum of three values. 
	return 1 + Math.min(editDist(W1, W2, m, n-1), // Insert
					editDist(W1, W2, m-1, n),     // Remove
					editDist(W1, W2, m-1, n-1));  // Replace
}

w1 = 'sunday';
w2 = 'saturday';
console.log(minDistanceDC(w1, w2));

//  Dynamic Programming using Object
function minDistanceDPObj(word1, word2) {
  dict = {};
  return convertObjRec(word1, word2, 0, 0);
}

function convertObjRec(W1, W2, m, n) {
  if (m === W1.length) return W2.length - n;
  if (n === W2.length) return W1.length - m;
  if (W1[m] === W2[n]) {
    if (!dict[(m+1) + ':' + (n+1)]) {
      dict[(m+1) + ':' + (n+1)] = convertObjRec(W1, W2, m+1, n+1);
    }
    return dict[(m+1) + ':' + (n+1)];
  }
  //  Insert
  if (!dict[m + ':' + (n+1)])     dict[m + ':' + (n+1)] = convertObjRec(W1, W2, m, n+1);
  //  Remove
  if (!dict[(m+1) + ':' + n])     dict[(m+1) + ':' + n] = convertObjRec(W1, W2, m+1, n);
  //  Replace
  if (!dict[(m+1) + ':' + (n+1)]) dict[(m+1) + ':' + (n+1)] = convertObjRec(W1, W2, m+1, n+1);
  return 1 + Math.min(dict[m + ':' + (n+1)], dict[(m+1) + ':' + (n+1)], dict[(m+1) + ':' + n]);
}

console.log(minDistanceDPObj(w1, w2));
