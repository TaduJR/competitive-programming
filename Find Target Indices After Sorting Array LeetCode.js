const targetIndices = function(nums, target) {
    const result = [];
    nums.sort((a, b) => a - b).forEach((item, index) => {
        if(item == target) result.push(index);
    });
    return result;
};
