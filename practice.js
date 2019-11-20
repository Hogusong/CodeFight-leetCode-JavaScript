var findMedianSortedArrays = function(A, B) {
  const isEven = (A.length + B.length) % 2 == 0;
  const mid = Math.floor(A.length + B.length) / 2;
  let i = 0, j = 0, count = 0, pre = null, curr = null;
  while (count <= mid) {
    pre = curr;
    if (i >= A.length) curr = B[j++];
    else if (j >= B.length) curr = A[i++];
    else curr = A[i] < B[j] ? A[i++] : B[j++];
    count++
  }
  return !isEven ? curr : (curr + pre) / 2;
}

console.log(findMedianSortedArrays([1,3], [2]));