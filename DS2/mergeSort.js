function mergeSort(arr){
    if(arr.length<2){
       return arr
    }
    let mid = Math.floor(arr.length/2)
    let  leftarray = arr.slice(0,mid)
    let rightarray = arr.slice(mid)
    return merge(mergeSort(leftarray),mergeSort(rightarray))
}

function merge(left,right){
   let sortedArray =[]
   while (left.length && right.length) {
        if(left[0]<right[0]){
           sortedArray.push(left.shift())
        }else{
           sortedArray.push(right.shift())
        }
   }
   return [...sortedArray,...left,...right]
}

let arr = [10,-5,20,50,40,70]

console.log(mergeSort(arr));