class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class stack{
    constructor() {
        this.top = null
        this.size = 0
    }

    isEmpty(){
        return this.size ===0
    }
    getSize(){
        return this.size
    }
    push(value){
        const node = new Node(value)
        if(this.isEmpty()){
         this.top = node
        }else{
            node.next = this.top
            this.top = node
        }
        this.size++
    }
    pop(){
     if(this.isEmpty()){
        return undefined
     }else{
        let removeNode = this.top
        this.top = this.top.next
        removeNode.next = null
        this.size--
        return removeNode
     }
    
    }
}

const mystack = new stack()

mystack.push(50)
mystack.push(30)
mystack.push(20)
mystack.pop()
console.log(mystack);