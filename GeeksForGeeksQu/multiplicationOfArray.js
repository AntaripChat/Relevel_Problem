//Program for multiplication of array elements

function multiplication(Arr,n){
    let mul = 1;
    for(let i = 0; i < n; i++){
        mul = mul * Arr[i];
    }
    return mul;
}

let Arr = [1,2,3];
let n = Arr.length;

console.log(multiplication(Arr,n));