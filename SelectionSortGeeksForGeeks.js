class Solution
{
  select(arr,i){
     // code here such that selectionSort() sorts arr[]
     selectionSort(arr, i);
  }

  //Function to sort the array using selection sort algorithm.
  selectionSort(arr,n){
    let temp;
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            if(arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
  }
}
