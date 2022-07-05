let arr = [[1,2,3],[3,4,5]]
let sum = 0;          
for(let i = 0; i < arr.length;i++){
    for(let j = 0 ; j < arr[i].length; j ++){
        //console.log(arr[i],[j]);
        sum = sum + arr[i][j];
    }
}
console.log(sum);


// let arr = [[1,2,3],[3,4,5]];

// arr.forEach((Element,i)=>{
//   Element.forEach((element)=>{
//     console.log(element);
//   })
// })
