function fibonacci(val) {
   return fibTailRecursive(val, 0, 1)
}

function fibTailRecursive(n, a, b) {
    if (n === 0) {
       return(a);
    } 
    else if (n === 1) {
        return(b);
    }
    else {
        fibTailRecursive(n - 1, b, a + b);
    }
}


const result = fibonacci(10);