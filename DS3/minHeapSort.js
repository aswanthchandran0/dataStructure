class minHeap{
    constructor(array){
       this.heap = []
       if(array){
         this.heapfyBuild(array)
       }
    }
     parentIndex(index){
       return Math.floor((index +1)/2)
     }
     leftChildIndex(index){
       return 2 * index +1
     }
     righChildIndex(index){
       return 2 * index +2
     }
     swap(i,j){
       let temp = this.heap[i]
       this.heap[i] = this.heap[j]
       this.heap[j] = temp
     }
 
     heapfyup(index){
       while(index >=0 && this.heap[index] < this.heap[this.parentIndex(index)]){
          this.swap(index,this.parentIndex(index))
          index = this.parentIndex(index)
       }
     }
     heapfydown(index){
       let parentIndex = this.parentIndex(index)
       let leftChildIndex = this.leftChildIndex(index)
       let righChildIndex = this.righChildIndex(index)
       let smallest = index
       if(this.heap[leftChildIndex] < this.heap[parentIndex]){
          smallest = leftChildIndex
       }
 
       if(this.heap[righChildIndex] < this.heap[parentIndex]){
           smallest = righChildIndex
       }
       if(smallest !== index){
          this.swap(smallest,parentIndex)
          this.heapfydown(smallest)
       }
 
     }
 
     heapfyBuild(array){
       this.heap = [...array]
       for(let i= Math.floor((array.length)/2); i >=0;i-- ){
        this.heapfydown(i)
       }
     }
     insert(value){
       this.heap.push(value)
       this.heapfyup(this.heap.length-1)
     }
       extractMin(){
         if(this.heap.length == 0){
          return null
         }
        const min = this.heap[0]
         this.heap[0] = this.heap.pop()
         this.heapfydown(0)
         return min
       }
 }
 
 const arrayToSort = [10, 5, 20, 8];
 const MinHeap = new minHeap(arrayToSort);
 
 console.log(MinHeap.heap); // Output: [5, 8, 20, 10]
 