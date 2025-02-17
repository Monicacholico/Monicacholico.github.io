const sumArray = [ 1 , 6, 4, 5, 3, 3];
const myNum = 7;


function twoSum(array, num) {
    let seen = new Set();
    // return array.findIndex(element => {
    return array.some(element => {
        let compliment = num - element;
        if(seen.has(compliment)) {
            if(compliment + element === num){
                console.log('found' + ' ' + [element, compliment]);
                return true;
            }
        }
        seen.add(element);
        return false;
    })
}

console.log(twoSum(sumArray, myNum));


// To find the pair of values


function pairsSum(array, num) {
    let pairs = [];
    let hashMap = [];

    for(let i = 0; i < array.length; i++) {
        let currNum = array[i];
        let counterPart = num - currNum;
        if(hashMap.indexOf(counterPart) !== -1) {
        // if(hashMap.includes(counterPart)) {
            pairs.push([currNum, counterPart]);
        }
        hashMap.push(currNum);
    }
    return pairs;
}

console.log(pairsSum(sumArray, myNum));

// To find the par of indexes of the values that sum the target

function pairsSumIndexes(array, num) {
    let numIndexes = {};

    for(let i = 0; i < array.length; i++) {
        let currNum = array[i];
        let counterPart = num - currNum;
        if(numIndexes[counterPart] !== undefined && numIndexes[counterPart] !== i) {
            // console.log([i, numIndexes[counterPart]]);
            return [i, numIndexes[counterPart]];
        } else {
            numIndexes[array[i]] = i;
        }

    }
}

console.log(pairsSumIndexes(sumArray, myNum));