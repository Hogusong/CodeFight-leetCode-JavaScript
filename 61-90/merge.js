/*
  Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array(in-place).

  The number of elements initialized in nums1 and nums2 are m and n respectively.
  You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

  Input:
  nums1 = [1,2,3,0,0,0], m = 3
  nums2 = [2,5,6],       n = 3

  Output: [1,2,2,3,5,6]
*/

function merge(nums1, m, nums2, n) {
  if (nums1.length < m + n) return [];
  let i = m - 1, j = n - 1, index = m + n - 1, count = 0 ; 
  while (i >= 0 || j >= 0) {
    if (i < 0 || nums1[i] < nums2[j]) nums1[index - count] = nums2[j--];
    else {
      const temp = nums1[index - count];
      nums1[index - count] = nums1[i];
      nums1[i--] = temp; 
    }
    count++;
  }
}

nums1 = [1,2,3,0,0,0];
nums2 = [2,5,6]
console.log(merge(nums1, 3, nums2, 3));
