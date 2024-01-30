function factorial(n){
    result = 1
    for(i=2;i<=n;i++){
        result = result*i
    }
    return result
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(5));