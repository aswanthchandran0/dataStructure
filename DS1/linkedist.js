class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size ===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
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
            this.tail = node
        }else{
           this.tail.next = node
           this.tail = node
        }

    }
     print(){
        let curr = this.head
        let listValue = ''
        while(curr){
            listValue += `${curr.value} `
            curr = curr.next
        }
        console.log(listValue);
     }
}


const list = new linkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.append(40)
list.append(50)
list.append(60)
list.print()