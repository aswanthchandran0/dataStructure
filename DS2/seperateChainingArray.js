class seperateChainingArray{
    constructor(size){
        this.table = new Array(size).fill(null).map(()=>[])
        this.size = size
    }
     hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
       return total % this.size
     }

     insert(key,value){
        const index = this.hash(key)
        this.table[index].push({key,value})
     }

     find(key){
        const index = this.hash(key)
        let list = this.table[index]
          for(const pair of list){
            if(pair.key === key){
                return pair.value
            }
          }
          return undefined
     }
    
}

const table = new seperateChainingArray(10)
table.insert("name","afsfs")
table.insert("place","sdfsf")
table.insert("fsfsf", "fsfewrewr")
console.log(table.find("place"));