function reverse(text,total,lastIndex){
     if(lastIndex<0){
        return total
     }
     total +=`${text[lastIndex]}`
   return  reverse(text,total,lastIndex-1)
}
  let text = 'hello world'
  let total = ''
console.log(reverse(text,total,text.length-1));
