let insertionSort1 = function(n, arr) {
    let i, temp, numToBeSorted = arr[n - 1];
    for(i = n - 1; i > 0; i--) {
        if(arr[i - 1] > arr[i]) {
            temp = arr[i - 1];
            arr[i - 1] = arr[i];
            arr[i] = temp;
        } else break;
        let testArr = [...arr];
        testArr[i - 1] = testArr[i]
        console.log(testArr.join(" "));
    } 
    console.log(arr.join(" "));
}
