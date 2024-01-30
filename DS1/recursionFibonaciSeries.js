function fibnacci(n){
    if(n<2){
        return n
    }
    return fibnacci(n-1)+fibnacci(n-2)
}



console.log(fibnacci(6));