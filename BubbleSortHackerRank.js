const countSwaps = function (arr) {
    let swapCounter = 0, temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapCounter++;
            }
        }
    }
    console.log(`Array is sorted in ${swapCounter} swaps.`);  
    console.log(`First Element: ${arr[0]}`);  
    console.log(`Last Element: ${arr[arr.length - 1]}`); 
}
