function fibonacci (position) {
    let initialArray = [1, 1];
    let initial = 0;
    let i = 0;
    let next = null;
    while(initialArray.length < position) {
        next = initialArray[i] + initial;
        initialArray.push(next + 1);
        console.log(next);
        initialArray[i] = initialArray[i] +1
        initial = initialArray[i] -1 ;
        i++
    }
    return initialArray;

}


// function fibonacci (position) {
//     if(position < 3) return 1;
//     else {
//         return fibonacci(position - 1) + fibonacci(position - 2);
//     }
// }

console.log(fibonacci(6));