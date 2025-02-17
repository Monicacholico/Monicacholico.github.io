function fibonacci (position) {
    let initialArray = [1, 1];
    let initial = 0;
    let i = 0;
    let next = null;
    while(initialArray.length < position) {
        next = initialArray[i] + initial;
        initialArray.push(next + 1);
        console.log(next);
        // initialArray[i] = initialArray[i] +1
        // initial = initialArray[i] -1 ;
        i++
    }
    return initialArray;

}


function fibo(k) {
    array = [0,1];
    for(let i = 2; i < k + 1; i++) {
        array.push(array[i - 2] + array[i -1]);
    }
    return array;
}

console.log(fibo(5));


// function fibonacci (position) {
//     if(position < 3) return 1;
//     else {
//         return fibonacci(position - 1) + fibonacci(position - 2);
//     }
// }

console.log(fibonacci(7));