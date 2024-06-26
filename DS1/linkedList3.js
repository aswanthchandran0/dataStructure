//  linkedList print
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

    isempty(){
      return this.size ===0
    }

    getSize(){
        return this.size
    }

     prepend(value){
      const node = new Node(value)
       if(this.isempty()){
        this.head = node
       }else{
          node.next = this.head
          this.head =node
       }
       this.size++
     }

     print(){
        if(this.isempty()){
            console.log('list is empty');
        }else{
            let curr = this.head 
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
     }
}

const list = new linkedList()
list.print()
list.prepend(10)
list.print()
list.prepend(20)
list.prepend(30)
list.print()