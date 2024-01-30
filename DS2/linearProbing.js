class linearProbing{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i =0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    insert(key,value){
       let index = this.hash(key)
       while(this.table[index] !==undefined){
        index = (index+1) % this.size
       }
       this.table[index] = {key,value}
    }

    find(key){
        let index = this.hash(key)
        while(this.table[index] !== undefined){
            if(this.table[index].key === key){
                return this.table[index].value
            }
            index = (index+1) % this.size
        }
        return undefined
    }
}

const table = new linearProbing(10)
table.insert(10,45)
console.log(table.find(10));
console.log(table);