function goHead(A, B) {
  const tLen = A.length + B.length;
  const mid = Math.floor(tLen / 2);
  const isEven = (tLen % 2 === 0);
  let count = 0, i = 0; j = 0, prev = 0, curr = 0;
  while (i < A.length && j < B.length) {
    prev = curr;
    if (A[i] > B[j]) {
      curr = B[j];
      j++;
    } else {
      curr = A[i];
      i++;
    }
    if (count >= mid) {
      if (isEven) return (prev + curr) / 2;
      else return curr
    }
    count++;
  }
  if (i < A.length) {
    i = i + mid - count;
    if (i > 0) curr = Math.max(curr, A[j-1])
    if (isEven) return (curr + A[i]) / 2;
    else return A[i];
  }
  if (j < B.length) {
    j = j + mid - count;
    if (j > 0) curr = Math.max(curr, B[j-1])
    if (isEven) return (curr + B[j]) / 2;
    else return B[j];
  }
}

A = [];
B = [1,2,3,4];
console.log(goHead(A, B));
