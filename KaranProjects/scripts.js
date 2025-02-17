// 1.

// function getPi(){
//     let sum = 0;
//     for(let n = 0; n < 1000; n++){
//         let mult = (n%2 === 0) ? 1 : -1; // -1^n
//         console.log(mult);
//         sum += mult * (1 / (2*n+1));
//     }
//     console.log(sum * 4);  // to get pi
// }
// getPi();

// 2.

function oneFindMultiple(m) {
    for(let i = 0; i < 50; i ++) {
        if (i%m == 0) {
            console.log('Pi');
        } else {
            console.log(i);
        }
    }
}
oneFindMultiple(5);