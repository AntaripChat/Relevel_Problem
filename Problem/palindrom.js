function isPalin(N){
    let revers = 0;
    let copy = N;
    while(copy){
        let d = copy % 10;
        revers = revers * 10 + d;
        copy = Math.floor(copy/10); 
    }
    console.log(N===revers);
}

//isPalin(121)
isPalin(123)