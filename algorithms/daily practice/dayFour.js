
    let cache = {};
const fibonacciMemo = num => {
    if(cache[num]) return cache[num];
    else if( num <= 1) {
            return 1;
        } else {
            cache[num] = fibonacciMemo(num - 1) + fibonacciMemo(num - 2);
            console.log(cache[num]);
        }
        console.log(Object.values(cache));
        return cache[num];
    }


console.log(fibonacciMemo(5));

const mostUsedChar = string => {
string = [...string];
let holderLetter = '';
let checker = 0;
const obj = {};
for(let char of string) {
    if(!obj[char]) {
        obj[char] = 0;
    }
    console.log(obj)
    obj[char] ++
}

for(let char in string) {
    if(obj[string[char]] > checker) {
        holderLetter = string[char];
        checker = obj[string[char]];
        console.log(holderLetter)
    }
    // return result;
}

// for(let i = 0; i < string.length; i++) {
//     if(obj[string[i]] > checker) {
//         holderLetter = string[i];
//         checker = obj[string[i]];

//         console.log(checker)
//         console.log(holderLetter)
//     }
// }
console.log(Object.values(obj))
return holderLetter;


}

console.log(mostUsedChar('murcielagooooo'))