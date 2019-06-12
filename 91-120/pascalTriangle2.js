/*
  Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
  Note that the row index starts from 0.
  In Pascal's triangle, each number is the sum of the two numbers directly above it.

  Pascal's triangle       [     [1],
                               [1,1],
                              [1,2,1],
                             [1,3,3,1],
                            [1,4,6,4,1], ... ]

  Input: 3      Output: [1,3,3,1]
*/

function getRow(rowIndex) {
  if (rowIndex < 1) return [1];
  let rows = [[1]]
  for (let i = 1; i <= rowIndex; i++) {
    const row = [1];
    const R = rows[rows.length - 1];
    for (let j = 1; j < i; j++) {
      row[j] = R[j-1] + R[j];
    }
    row.push(1);
    if (i >= rowIndex) return row
    rows.push(row);
  }
}

console.log(getRow(3));
