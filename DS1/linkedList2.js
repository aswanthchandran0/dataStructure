// linked list prepend (Existing)

class Node{
    constructor(value){
      this.value = value
      this.next = null
    }
}


class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
     
    isEmpty(){
    return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(){
      const node = new Node(value)
      if(this.isEmpty()){
        this.head = node
      }else{
        node.next = this.head
        this.head = node
      }
      this.size++
    }

}

const list = new linkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)