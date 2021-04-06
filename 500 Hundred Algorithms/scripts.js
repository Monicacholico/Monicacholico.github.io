// Find a pair with the given sum in an array

const arrPairSum = [8, 7, 2, 5, 3, 1];

const sumOfPair = 10;


const sortarrPair = arrPairSum.sort((a, b) => a > b ? 1 : -1)

console.log(sortarrPair);

function findingPair(arr) {
    const theMax = arr.filter(i => Math.max(i));
    console.log(theMax);
}
//
console.log(findingPair(arrPairSum));