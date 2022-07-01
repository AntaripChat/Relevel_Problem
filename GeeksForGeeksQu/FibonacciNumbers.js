//Program to print first n Fibonacci Numbers 
function Fibonacci(n){
    let a = 0;
    let b = 1;
    let c = a + b;
    console.log(a);
    console.log(b);
    while(c < n){
        console.log(c)
        a = b;
        b = c;
        c = a + b;
    }
}

Fibonacci(20)