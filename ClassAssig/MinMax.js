//Minimum and Maximum Element

function MinMax(Arr,n){
    let Min = Arr[0], Max = Arr[0];
    for(let i = 1 ; i <= n-1; i++){
        if(Min > Arr[i]) Min = Arr[i];
        if(Max < Arr[i]) Max = Arr[i];
    }
    
    return [Min,Max];
}

let Arr = [20,50,47,70];
let n = Arr.length;

console.log(MinMax(Arr,n));

//-------------------------------------------------///
