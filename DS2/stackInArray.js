class stack{
    constructor(){
        this.items = []
        this.size = 0
    }
    isEmpty(){
        return this.size ===0
    }
    getSize(){
        return this.size
    }
    push(value){
    this.items.push(value)
    this.size++
    }
    pop(){
        if(this.isEmpty()){
            return undefined
        }else{

            let removeditem = this.items.pop()
            this.size--
            return removeditem
        }
    }
}

const mystack = new stack()
mystack.push(10)
mystack.push(20)
mystack.push(30)
mystack.pop()
console.log(mystack);
