const merge = (nums1, m, nums2, n) => {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
};

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1);
