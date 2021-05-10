const sumArray = [ 1 , 6, 4, 5, 3, 3];
const myNum = 7;


function twoSum(array, num) {
    let arrofSumNums = [];
    let seen = new Set();
    return array.some(element => {
        let compliment = num - element;
        if(seen.has(compliment)) {
            if(compliment + element === num){
                console.log('found' + ' ' + compliment);
                return true;
            }
        }
        seen.add(element);
        return false;
    })
}

console.log(twoSum(sumArray, myNum));

function pairsSum(array, num) {
    let pairs = [];
    let hashMap = [];

    for(let i = 0; i < array.length; i++) {
        let currNum = array[i];
        let counterPart = num - currNum;
        if(hashMap.indexOf(counterPart) !== -1) {
            pairs.push([currNum, counterPart]);
        }
        hashMap.push(currNum);
    }
    return pairs;
}

console.log(pairsSum(sumArray, myNum));