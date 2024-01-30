function sum(n,total){
    if(n==0){
        return total
    }
    return sum(n-1,total+n)
}

console.log(sum(10,0));