function bubbleSort(arr){
    let swapped
    do{
        swapped = false
        let arrLength = arr.length-1
        for(i=0;i<arrLength;i++){
            if(arr[i]>arr[i+1]){
              let temp = arr[i]
              arr[i] = arr[i+1] 
              arr[i+1] = temp
              swapped = true
              arrLength = arrLength-1
            }
        }
    }while(swapped)

}

let arr = [8,20,-2,4,-6]

bubbleSort(arr)
console.log(arr);
// big O notation  = O(n^2)