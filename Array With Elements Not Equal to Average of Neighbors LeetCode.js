const rearrangeArray = function(nums) {
    const mid = Math.round(nums.length / 2);
    const result = new Array(nums.length);
    let i, j, k, l;
    nums.sort((a, b) => a - b);
    for (i = 0, j = 1, k = 0, l = mid; l < nums.length; i+=2, j+=2, k++, l++) {
        result[i] = nums[k];
        result[j] = nums[l];
    }
    if(!result[result.length - 1]) result[result.length - 1] = nums[mid - 1]
    return result;
};
