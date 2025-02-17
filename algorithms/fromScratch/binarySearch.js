//Search for a given value (key) inside of a list (numArray)
// Runs in O(log n) run time - very performant


// function func(numArray, key) {
//     if(/*base case */) {
//         return something;
//     }
//     else {
//         func()
//     }

// }


function factorial(num) {
    if( num === 1 ) {
        return num;
    } else {
        return ` ${num} * ${factorial(num -1)}`;
        // return num * factorial(num -1);
    }
}

console.log(factorial(4));



// function binarySearch(numArray, key) {
//     let middle = Math.floor(numArray.length / 2);
//     let middleElem = numArray[middle];
//     if(middleElem === key) {
//         console.log(`the key ${key} was found`);
//         return true;
//     } else if (middleElem < key && numArray.length > 1) {
//         return binarySearch(numArray.splice(middle, numArray.length), key);
//     } else if (middleElem > key && numArray.length > 1) {
//         return binarySearch(numArray.splice(0, middle), key);
//     } else{
//         console.log(`the key number ${key} was not found!`);
//         return false;
//     }
// }


function binarySearch(array, key) {
    let middle = Math.floor(array.length / 2);
    let middleIdx = array[middle];
    if(middleIdx === key) {
        console.log( `the key ${key} was found`);
        return true;
    } else if(middleIdx < key && array.length > 1) {
        return binarySearch(array.splice(middle, array.length), key);
    } else if(middleIdx > key && array.length > 1) {
        return binarySearch(array.splice(0, middle), key);
    } else {
        console.log( `the key ${key} was not found`);
        return false;
    }
}


console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 5))