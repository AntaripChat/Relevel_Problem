//Reverse Array
function Reverse(Arr,S,E){
    //let re = 0;
    while(S < E){
      let re = Arr[S];
      Arr[S] = Arr[E];
      Arr[E] = re;
      S ++;
      E --;  
    }
}
function printArr(Arr,n){
    for(let i = 0;i < n;i++){
        console.log(Arr[i]);
    }
}
let Arr = [1,2,3]
let n = Arr.length;
console.log(`Array ${Arr}`);
Reverse(Arr,0,n-1);
//printArr(Arr,n);
console.log(`Revers Array ${Arr}`);