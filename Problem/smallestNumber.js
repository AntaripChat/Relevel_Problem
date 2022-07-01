//Given 3 numbers. You need to find the smallest of three numbers without using comparison
function small(a,b,c){
    let d = 0;
    while(a && b && c){
        a--;
        b--;
        c--;
        d++;
    }
    return d;
}
console.log(small(22,46,8));