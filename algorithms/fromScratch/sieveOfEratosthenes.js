function sieveOf(num) {
    let array = new Array(num).fill().map((v,num) => num <= 1 ? false : true);
    for(let i = 2; i <= Math.sqrt(num); i++ ){
        for(let j = 2; j * i <= num; j++ ) {
            array[i * j] = false;
        }
    }

    var result = [];
    for(var i = 0; i < array.length; i++) {
        if(array[i]) {
            result.push(i);
        }
    }
    return result;


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
    if(set.has(element)) {
        console.log(`element ${element} is already in set`);
    }
    set.add(element);

}
return set;
}


console.log(mergeArrs(arr1, arr2));

const findMissingNum = (array, num) => {
    let completeArray = new Array(13 + 1).fill().map( (v, i) => i > 0 ? i : v );
    console.log(completeArray)
    let mergeArrays = [...array, ...completeArray];
    console.log(mergeArrays);
    return [...new Set(mergeArrays)];
}

let incompleteArray = [1,2,3,4,5,6,7,8,9,10,12,13];
//
console.log(findMissingNum(incompleteArray))