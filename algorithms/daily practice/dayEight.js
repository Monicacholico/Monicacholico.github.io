

function uniqueArray(arr1, arr2) {

    const mergeArrs = arr1.concat(arr2);

    let object = {};

    for(element of mergeArrs) {
        object[element] = object[element] + 1 || 1;
    }

    for(element of mergeArrs) {
        if(object[mergeArrs[element]] > 1) {
            object[mergeArrs[element]] = 1;
        }
        const uniqueArray = Object.keys(object).map( element => Number(element));
        return uniqueArray;
    }

}


function uniqueArraySet (arr1, arr2) {

    let mergeArrays = [...arr1, ...arr2];

    return [...new Set(mergeArrays)];

}

console.log(uniqueArraySet(['monica', 'george', 'john', 'paul', 'john', 'ringo', 'david', 'yoli', 'monica'], ['george', 'john', 'paul', 'john', 'ringo', 'david', 'yoli',]))


console.log(uniqueArray([1,2,3,4,5,7,6,4,4], [54,3,4,6,3,34,6,7,5]));



