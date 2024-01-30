class Node{
    constructor(value){
         this.value = value
         this.next = null
    }
}


class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    isEmpty(){
        return this.size ===0
    }
    getSize(){
        return this.size
    }
    enqueue(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.first = node
            this.last = node
        }else{
            this.last.next = node
            this.last = node
        }
        this.size++
    }
}

const myQueue = new Queue()
myQueue.enqueue(11)
myQueue.enqueue(3)
myQueue.enqueue(23)

console.log(myQueue);