function print(n){
    if(n == 5){
        console.log(n);
        return
    }
    console.log(n);
    // recurcive call
    //  if you are calling same fuction again and again you can treat it as seperate call in the stack
    print(n+1)
}

print(1)