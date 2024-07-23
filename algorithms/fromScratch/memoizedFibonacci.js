function fibMemo(index, cache) {
    cache = cache || [];
    if(cache[index]) {
        return cache[index];
    }
    else {
        if(index < 2) {
            return 1;
        }
        else {
            console.log(index - 1);
            console.log(index - 2);
            cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
            console.log(cache[index]);
            console.log(cache);
        }
    }
    console.log(cache);
    return cache[index];
}

console.log(fibMemo(12))


let memo = {};
function fibo(n) {
    if(n <= 1) return 1;
    else if( memo[n]) {
        return memo[n];
    } else {
        memo[n] = fibo(n -1) + fibo(n-2);

    }
    console.log(memo);
    return memo[n]
    // return Object.keys(memo[n]);

}


console.log(fibo(12));

