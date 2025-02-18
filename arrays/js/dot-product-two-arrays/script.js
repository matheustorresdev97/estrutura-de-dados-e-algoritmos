const dotProduct = (nums1, nums2) => {
    let product = 0;
    for (let i = 0; i < nums1.length; i++) {
        product += nums1[i] * nums2[i];
    }
    return product;
}