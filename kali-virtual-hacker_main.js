function fact(k) {
//     base condition
    if(k<=1){
        return 1
    }
    else{
//         recursive call 
        return k*fact(k-1)
    }
}

console.log("Hello From kali hacker")
console.log(fact(5))
