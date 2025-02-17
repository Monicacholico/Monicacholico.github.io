// Find a pair with the given sum in an array

const arrPairSum = [8, 7, 2, 5, 3, 1];

const sumOfPair = 10;


const sortarrPair = arrPairSum.sort((a, b) => a > b ? 1 : -1)

console.log(sortarrPair);

function findingPair(arr) {
    const theMax = (Math.max(...arr));
    return arr.filter(i => i !== theMax && theMax + i === sumOfPair);
}

console.log(findingPair(arrPairSum));


// Print all subarrays with 0 sum

const subArrayZero = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];
const theZero = 0;

const solsubArrZero = () => {
    for(n of subArrayZero) {
        // let theNums =
    }
}

console.log({solsubArrZero});