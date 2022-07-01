function Sum(Arr,n){
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum = sum + Arr[i];
    }
    return sum;
}

let Arr = [2,3,4,5];
let n = Arr.length;

console.log(Sum(Arr,n));