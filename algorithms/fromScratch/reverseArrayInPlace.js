// Reverse words of Array in Place

function reverseArrayInPlace(array) {
    let temporary = '';
    let blankSpace = ' ';

    array.forEach(word => {
        let wordWSpace = blankSpace + word ;
        for(let i = wordWSpace.length - 1; i >= 0; i--) {
           temporary += wordWSpace[i];
           console.log(temporary.split(' '));
           let transformedArray = temporary.split(' ');
           array = transformedArray;
        }
        array.pop();
    })
    return array;
}
// console.log(reverseArrayInPlace(['this', 'is', 'the', 'array', 'we', 'will', 'use']))
console.log(reverseArrayInPlace(['paul', 'john', 'ringo', 'george', 'david', 'disfda', 'monica']))



// Rotate elements of array in place until is reversed;


function rotateTilReverse(arr, num) {
    let i = 0;
    while(i < num) {
        arr.unshift(arr.pop());
            i++;
    }
    return arr;
}

console.log(rotateTilReverse(['paul', 'john', 'ringo', 'george', 'david', 'disfda', 'monica'], 3))



function finalReverse(array) {
    console.log(array)
    let temporaryVar = '';
    for(let i = 0; i < array.length / 2; i++) {
        temporaryVar = array[i];
        array[i] = array[array.length -1 -i];
        array[array.length -1 -i] = temporaryVar;
    }
    return array;
}

console.log(finalReverse(['paul', 'john', 'ringo', 'george', 'david', 'disfda', 'monica']));