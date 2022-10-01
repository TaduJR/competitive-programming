const countingSort = function(arr) {
    let frequency = new Array(100).fill(0); //Note that 100 is taken from constraints of the problem 
    for(let i = 0; i < arr.length; i++) frequency[arr[i]] += 1
    return frequency;
}
