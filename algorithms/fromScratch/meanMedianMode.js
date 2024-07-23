
const arrayOne = [3, 4, 6, 9, 10, 11, 13, 13];
const arrayTwo = [1, 2, 3, 4, 5, 5];
const arrayThree = [3, 4, 5, 6, 4, 7, 3, 4];


function getMean(array) {
    let sum = array.reduce((acc, cur) => acc + cur, 0);
    console.log(sum)
     sum = sum / array.length;
     return Math.floor(sum);
}
const resultMean = getMean(arrayTwo);
console.log(resultMean);

function getMedian(array) {
    let mid = Math.floor(array.length / 2);
    let sorted = array.sort((a, b) => a > b ? 1 : -1 );
    console.log(sorted);
   return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
// console.log(getMedian(arrayTwo))
const resultMedian = getMedian(arrayTwo);
console.log(resultMedian);

function getMode(array) {
    let num = '';
    let tempNum = '';
    const obj = {};
    // array.forEach(element => {
    //     if(!obj[element]) {
    //         obj[element] = 0;
    //     }
    //     obj[element]++;
    // });
    for(let el of array) {
        obj[el] = obj[el] + 1 || 1;
    }
    // for(let i = 0; i < array.length; i++) {
    //     if(obj[array[i]] > tempNum) {
    //         num = array[i];
    //         tempNum = obj[array[i]];
    //     }
    //     console.log(num);
    //     console.log(tempNum);
    //     console.log(obj[array[i]]);
    // }
    let maxFrequency = 0;
    let modes = [];
    for(let num in obj) {
        if(obj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = obj[num];
        }
        else if (obj[num] === maxFrequency) {
            modes.push(num);
            if(modes.lenght === Object.keys(obj).length) {
                modes = [];
            }
        }
    }
    return modes;

}

const resultMode = getMode(arrayTwo);
console.log(resultMode);

function getMeanMedianMode(array) {
    let newObj = {array};
    newObj.array.mean = `the mean value is ${resultMean}`;
    newObj.array.median = `the median value is ${resultMedian}`;
    newObj.array.mode = `the mode value is ${resultMode}`;
    console.log(newObj);
    return newObj;
}

console.log(getMeanMedianMode(arrayTwo));


