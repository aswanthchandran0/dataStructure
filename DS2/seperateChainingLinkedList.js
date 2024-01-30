class Node{
    constructor(key,value){
        this.key = key
        this.value = value
        this.next = null
    }
}


class HashTable{
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i = 0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    insert(key,value){
        let index =  this.hash(key)
        let node =  new Node(key,value)
        if(!this.table[index]){
            this.table[index] = node
        }else{
            let current = this.table[index]
            while(current.next){
                current = current.next
            }
            current.next = node
        }
    }

    find(key){
        const index = this.hash(key)
        let current = this.table[index]
        while(current){
            if(current.key === key){
                return current.value
            }
            current = current.next
        }
        return undefined
    }

    display(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){

                console.log(this.table[i]);
            }
        }
    }

   
}

const table = new HashTable(10)
table.insert(1,1)
table.insert(2,2)
table.insert(2,2)
table.display()


