class Node {
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
        return this.size ===0
    }

    getSize(){
        return this.size
    }

    // O(1)T
   prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
    }else{
          node.next = this.head
          this.head = node
    }
    this.size++
   }

//    O(n)T
   append(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
    }else{
        let prev = this.head
        while(prev.next){
         prev = prev.next
        }
        prev.next = node
    }
    this.size++
   }
   print(){
    if(this.isEmpty()){
        console.log('list is empty');
    }else{
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues +=  `${curr.value} `
            curr = curr.next
        }
        console.log(listValues);
       }
    }
   
}

const list =  new linkedList()
list.append(10)
list.print()
list.append(20)
list.append(30)
list.print()