const smallerNumbersThanCurrent = function(nums) {
    const result = [];
    let counter = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(nums[i] > nums[j]) ++counter;
        }
        result.push(counter);
        counter = 0;
    }
    return result;
};
