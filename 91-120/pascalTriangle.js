/*
  Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
  In Pascal's triangle, each number is the sum of the two numbers directly above it.

  Input: 5       Output:  [     [1],
                               [1,1],
                              [1,2,1],
                             [1,3,3,1],
                            [1,4,6,4,1]
                          ]
*/

// Using Array
function pascalTriangle(numRows) {
  // First base case; if user requests zero rows, they get zero rows.
  if (numRows < 1) return [];

  // Second base case; first row is always [1].
  const result = [[1]];

  // Each triangle element (other than the first and last of each row)
  // is equal to the sum of the elements above-and-to-the-left and
  // above-and-to-the-right.
  for (let i = 1; i < numRows; i++) {
    const temp = result[result.length-1];
    const arr = [1]
    for (let j = 1; j < i; j++) {
      arr.push(temp[j-1] + temp[j])
    }

    // The last row element is always 1.
    arr.push(1);
    result.push(arr);
  }
  return result;
}

console.log(pascalTriangle(5));
