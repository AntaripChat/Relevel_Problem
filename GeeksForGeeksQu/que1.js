//find largest element in an array

let arr = [10,20,5];
let lar = arr[0];
for(let i = 0; i<= arr.length-1;i++){
    if(lar < arr[i]){
        lar = arr[i]; 
    }
}
console.log(lar);