const largestNumber = function(nums) {
    nums.sort((a, b) => {
        let num1 = String(a), num2 = String(b);
        if(num1 + num2 > num2 + num1) return -1;
        else return 1;
    });
    
    let result = nums.join("");
    return String(result)[0] === "0" ? "0" : result;
};
