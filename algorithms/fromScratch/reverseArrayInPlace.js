// Reverse Array in Place

function reverseArrayInPlace(array) {
    let temporary = '';
    array.forEach( element => {
        console.log(element.length)
        for(let i =0; i < array.lenght; i++) {
           console.log(element[i]);
        }
    })

}
console.log(reverseArrayInPlace(['this', 'is', 'the', 'array', 'we', 'will', 'use']))