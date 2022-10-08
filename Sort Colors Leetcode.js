const sortColors = function(nums) {
    let j, temp;
    for(let i = 0; i < nums.length; i++) {
        j = i;
        while(j > 0 && nums[j - 1] > nums[j]) {
            temp = nums[j - 1];
            nums[j - 1] = nums[j];
            nums[j] = temp;
            j = j - 1;
        }
    }
    return nums;
};
