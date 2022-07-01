function isPrime(N) {
    if(N===1){
        return false
    }
    for(let i = 2; i < N;i++){
        if(N%i===0){
            return false
        }
    }
    return true
}

console.log(isPrime(17));
console.log(isPrime(14));