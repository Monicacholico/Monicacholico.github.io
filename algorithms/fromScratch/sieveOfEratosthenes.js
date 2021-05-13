function sieveOf(num) {
    let array = new Array(num).fill().map((v,num) => {
       if(num <= 1) {
           return false;
       } else {
           return true;
       }
    //    return num;
    });
    // .filter(num => {
    //     if(num % 3 === 0) {
    //         return num;
    //     }
    // })
    return array;

}


console.log(sieveOf(20));


function findingRoot(num) {
    let square = Math.sqrt(num);
    return square;
}

console.log(findingRoot(25));


let arr1 = [1,2,4,5,6,7,8,8,8,9 ];
let arr2 = [6,7,7,8,8,9,10,12,13];

function mergeArrs(arr1, arr2) {
let set = new Set();
let newArray = [...arr1, ...arr2];
console.log( newArray);
for(element of newArray) {
    // if(set.has(element)) {
    //     console.log(`element ${element} is already in set`);
    // }
    set.add(element);
}
// for(let i = 0; i < newArray.length; i++){
//     let current = newArray[i];
//     if(set.has(current)) {
//         console.log(`current ${current} is already in set`);
//     }
//     set.add(current);

//     }
    return set;



}



console.log(mergeArrs(arr1, arr2))