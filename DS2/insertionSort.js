function insertionSort(arr){
  for(i=1;i<arr.length;i++){
    let insertionNumber = arr[i]
    let j = i-1
    while(j>=0 && arr[j]>insertionNumber){
        arr[j+1] = arr[j]
    j--
    }
    arr[j+1] = insertionNumber
  }
}

let arr = [8,20,-2,4,-6]
insertionSort(arr)
console.log(arr);

//  O(n^2)t