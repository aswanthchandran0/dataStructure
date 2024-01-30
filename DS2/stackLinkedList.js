class Node{
    constructor(value){
        this.value = value 
        this.next = null
    }
}

class stack{
    constructor(){
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
         if(this.isEmpty){
            this.top = node
         }else{
            node.next = this.top
            this.top = node
         }
         this.size++
      }
}

const mystack = new stack()
mystack.push(11)
mystack.push(23)
mystack.push(3)
console.log(mystack);