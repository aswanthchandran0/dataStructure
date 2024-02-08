class MinHeap{
    constructor(){
        this.heap = []
    }
    parentIndex(index){
        return Math.floor((index -1)/2)
    }
    leftChildIndex(index){
        return 2 * index +1
    }
    rightChildIndex(index){
        return 2 * index +2
    }

    swap(i,j){
        let temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = temp
    }

    heapifyup(index){
        while( index >=0 && this.heap[index] < this.heap[this.parentIndex(index)]){
            this.swap(index,this.parentIndex(index))
            index = this.parentIndex(index)
        }
        
    }

    heapifydown(index){
        let leftChildIndex = this.leftChildIndex(index)
        let rightChildIndex = this.rightChildIndex(index)
        let smallest = index
        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[index]){
            smallest = leftChildIndex
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex]<this.heap[index]){
            smallest = rightChildIndex
        }
        if(smallest !== index){
            this.swap(index,smallest)
            this.heapifydown(smallest)
        }
    }
    insert(value){
        this.heap.push(value)
        this.heapifyup(this.heap.length -1)
    }

    extractMin(){
        if(this.heap.length ===0){
            return null
        }
        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifydown(0)
        return min
    }
}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(8);

console.log(minHeap.heap); // Output: [5, 8, 20, 10]
console.log(minHeap.extractMin()); // Output: 5
console.log(minHeap.heap); // Output: [8, 10, 20]