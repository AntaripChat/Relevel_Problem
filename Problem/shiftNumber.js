function rearrange(arr, n)
{
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            if (i != j){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
    }
}
function printArray(arr, n)
{
    for (let i = 0; i < n; i++)
        console.log(arr[i] + " ");
}
 
 
 

let arr = [ -5,3,-4,88,-9,-10,21,5,6];
let n = arr.length;
rearrange(arr, n);
printArray(arr, n);
//console.log(arr);

//it's not work--------------------------------------------------
 
//_---
