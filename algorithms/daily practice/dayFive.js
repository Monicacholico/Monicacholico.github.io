
// From two given arrays merge arrays without duplicates;

let arrayOne = [3, 4, 6, 9, 10, 11, 13, 13];
let arrayTwo = [3, 4, 5, 6, 4, 7, 3, 4];
let uniqueArray;

function findDuplicates(arr1, arr2) {

    uniqueArray = [...arr1, ...arr2];
    // console.log(uniqueArray);

    // set = [... new Set(uniqueArray)];
    // return set;
    // return [...new Set(uniqueArray)];

    let object = {}
    for(let element of uniqueArray) {
        if(!object[element]) {
            object[element] = 0;
        }
        object[element]++;
    }
    console.log(object);
    for(element in uniqueArray) {
        if(object[element] > 1) {
            object[element] = 1;
        }
        uniqueArray = Object.keys(object);
        return uniqueArray.map(element => Number(element));
    }
    return uniqueArray


}

console.log(findDuplicates(arrayOne, arrayTwo))



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