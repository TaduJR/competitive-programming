const kthLargestNumber = function(nums, k) {
    nums.sort((a, b) => Number(BigInt(a) - BigInt(b)));
    return nums.slice(nums.length - k, nums.length - (k - 1))[0];
};
