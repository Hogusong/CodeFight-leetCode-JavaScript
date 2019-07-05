/*
  There are two sorted arrays nums1 and nums2 of size m and n respectively.
  Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

  You may assume nums1 and nums2 cannot be both empty.

  nums1 = [1, 3],   nums2 = [2]
  The median is 2.0

  nums1 = [1, 2],   nums2 = [3, 4]
  The median is (2 + 3)/2 = 2.5
*/

function xgetMedian(nums1, nums2) {
  let i = 0, j = 0;
  let combined = [];
  while (i < nums1.length && j < nums2.length) {
      if (nums1[i] <= nums2[j]) {
          combined.push(nums1[i++]);
      } else {
          combined.push(nums2[j++]);
      }
  }
  if (i < nums1.length) combined = combined.concat(nums1.slice(i));
  if (j < nums2.length) combined = [...combined, ...nums2.slice(j)];
  const median = Math.floor(combined.length / 2);
  if (combined.length % 2 === 0) {
      return (combined[median-1] + combined[median]) / 2;
  } 
  return combined[median]
}

function getMedian(A, B) {
  const lenA = A.length;
  const lenB = B.length;
  const is_even = (lenA + lenB) % 2 === 0;
  const median = Math.floor((lenA + lenB) / 2) - (is_even ? 1 : 0);
  let i = 0, j = 0, count = 0;
  while (i < lenA && j < lenB) {
    if (A[i] <= B[j]) {
      if (count === median) return calcMedian(A, i, B, j, is_even)
      else i++;
    } else {
      if (count === median) return calcMedian(B, j, A, i, is_even)
      else j++;
    }
    count++;
  }
  if (i < lenA) {
    return calcMedian(A, i, null, null, is_even, median-count);
  }
  if (j < lenB) {
    return calcMedian(B, j, null, null, is_even, median-count);
  }
}

function calcMedian(AA, i, BB, j, is_even, jump=0) {
  if (!is_even)   return AA[i+jump];
  if (BB) {
    if (AA[i+1] && AA[i+1] <= BB[j])  return (AA[i] + AA[i+1]) / 2;
    return (AA[i] + BB[j]) / 2
  } else {
    return (AA[i+jump] + AA[i+jump+1]) / 2
  }
}

function makeRandomArr() {
  const count = Math.floor(Math.random() * 1000);
  const arr = []
  for (let i=0; i<count; i++) {
    const no = Math.floor(Math.random() * 1000);
    if (arr.indexOf(no) < 0) arr.push(no);
  }
  return arr.sort((a,b) => a-b);
}

for (let i=0; i<10; i++) {
  const arr1 = makeRandomArr();
  const arr2 = makeRandomArr();
  console.time('Time: ')
  console.log(xgetMedian(arr1, arr2));
  console.timeEnd('Time: ')
  console.time('Time: ')
  console.log(getMedian(arr1, arr2));
  console.timeEnd('Time: ')
  console.time('Time: ')
  console.log(findMedian(arr1, arr2));
  console.timeEnd('Time: ')
  console.log();
}

function findMedian(A, B) {
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
    if (i > 0) curr = Math.max(curr, A[i-1])
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