let cache = {};
function fibonacci(number) {
    if(cache[number]) return cache[number]
    else {
        if(number < 2 ){
            return 1;
        } else {
            cache[number] = fibonacci(number - 1 ) + fibonacci(number - 2);
        }
        console.log(cache[number]);
        return cache[number];
    }
}

console.log(fibonacci(5));

function sumOfTwo(array, target) {
    let set = new Set();
    return array.some( index => {
        let complement = target - index;
        if(set.has(complement)) {
            if(complement + index === target) {
                console.log('found' + " " + complement + ' and ' +  index)
                return true;
            } else {
                return false
            }
        }
        set.add(index)
    })
}

console.log(sumOfTwo([1, 2, 3, 4, 5], 8));

function caesarCipher(str, num) {
    str = str.toLowerCase();

    let result = '';
    let charcode = 0;

    for(let i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }

    return result;
}

console.log(caesarCipher('zebra-456', 2));
