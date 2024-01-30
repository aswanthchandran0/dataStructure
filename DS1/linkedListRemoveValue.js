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
    return this.size ===0
   }
   getSize(){
    this.size
   }
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
   append(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
    }else{
        let prev = this.head
        while (prev.next) {
           prev = prev.next 
        }
        prev.next = node
    }
    this.size++
   }

   insert(value,index){
    if(index<0 || index>=this.size){
        return null
    }
    if(index ===0){
        this.prepend(value)
    }else{
        const node = new Node(value)
        let prev = this.head
        for(let i=0;i<index-1;i++){
            prev = prev.next
        }
        node.next = prev.next
        prev.next = node
        this.size++
    }
   }
   removeFrom(index){
    if(index<0 || index>= this.size){
        return null
    }
    let removeNode
    if(index ===0){
        removeNode = this.head
        this.head = this.head.next
    }else{
        let prev = this.head
        for(let i=0;i<index-1;i++){
            prev = prev.next
        }
        removeNode = prev.next
        prev.next = removeNode.next
    }
    this.size--
    return removeNode.value
   }
   removeValue(value){
    if(this.isEmpty()){
        return null
    }
    if(value === this.head.value){
        this.head = this.head.next
        this.size--
        return value
    }else{
        let prev = this.head
        while(prev.next && prev.next.value !== value){
            prev = prev.next
        }
        if(prev.next){
         let   removeNode = prev.next
            prev.next = removeNode.next
            this.size--
        }
     return null
       
    }

}

search(value){
    if(this.isEmpty()){
        return -1
    }
    let i =0
    let curr = this.head
    while(curr){
        if(value === curr.value){
            return i
        }
         curr = curr.next
         i++
    }
    return -1
}

reverse(){
    let prev = null
    let curr = this.head
    while(curr){
        let next = curr.next
        curr.next = prev
        prev= curr
        curr=next
    }
    this.head = prev
}
   print(){
    let curr = this.head
    let listValues = ''
    while(curr){
         listValues += `${curr.value} `
         curr = curr.next
    }
    console.log(listValues);
   }

}

const list = new linkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.insert(60,1)
list.removeValue(60)
list.print()
list.reverse()
list.print()
console.log(list.search(30));