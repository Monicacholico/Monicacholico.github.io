// Sort binary array in linear time


// Given a binary array, sort it in linear time and constant space

// Input:  { 1, 0, 1, 0, 1, 0, 0, 1 }

// Output: { 0, 0, 0, 0, 1, 1, 1, 1 }

let input = [ 1, 0, 1, 0, 1, 0, 0, 1];


function sortBinaryArray (array) {
    return array.sort((a, b) => a - b);
}

console.log(sortBinaryArray(input));