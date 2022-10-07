const targetIndices = function(nums, target) {
    const result = [];
    nums.sort().forEach((item, index) => {
        if(item == target) result.push(index);
    });
    return result;
};
