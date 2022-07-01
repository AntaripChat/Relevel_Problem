//Program to cyclically rotate an array by one

let arr = [1,2,3]
let n = arr.length;

let e = arr[n-1];

for(let i = n-1 ; i > 0 ; i--){
    arr[i] = arr[i-1];
}
arr[0] = e;
console.log(arr);