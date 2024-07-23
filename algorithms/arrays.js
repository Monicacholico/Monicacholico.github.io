// Remove Duplicates from Sorted Array

// 1.
// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

// Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

const arrayOfNums = [3,4,5,6,6,7,4,5,2,3];
const list = arrayOfNums.filter((e, i, a) => {
    console.log(a.indexOf(e));
    console.log(i);
    console.log(a);
    a.indexOf(e) === i;
});

console.log({list});

for(let arEl in arrayOfNums) {
    console.log({arEl});
}

function uniqueArray(arr) {
    return [...new Set(arr)]
}

console.log(uniqueArray(arrayOfNums));


// 2. Best time to Buy and Sell Stock

// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
// Example 1
// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
            //  Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

//Example 2
// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
// engaging multiple transactions at the same time. You must sell before buying again.

//Example 3
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.


const weekPrices = [6,5,4,3,7];
function bestProfit(arr) {
    let fromLeft = 0;
    let fromRight = 0;
    let currentIndex = '';
    const lowestPrice = arr.findIndex( arEl => arEl === Math.min(...arr));
    const bestPrice = arr.findIndex( arEl => arEl === Math.max(...arr));
    console.log({lowestPrice});
    console.log({bestPrice});
    for(price of arr) {
        console.log(arr[arr.length -1]);
        if(lowestPrice !== arr[arr.length - 1]){
            console.log('Buy: ' + lowestPrice);
            console.log('Sell: ' + bestPrice);
            console.log(arr[arr.length - 1]);
            const gain = bestPrice - lowestPrice;
            console.log('And this will be your gain: ' + gain);
        }
        return lowestPrice;
    }
    // for(price in arr) {
    //     if(lowestPrice !== arr[arr.length - 1]) {
    //         return this.price;
    //     }
    // }
}

const solutionStock = bestProfit(weekPrices)
console.log({solutionStock});


function maxProfit(prices, start, end) {
    if(end <= start) {
        return 0;
    }
    let profit = 0;

    for(var i = start; i < end; i++) {
        for(var j = i + 1; j <= end; j++) {
            if(prices[j] > prices[i]){
                var currProfit = prices[j] - prices[i];
                + maxProfit(prices, start, i - 1)
                + maxProfit(price, j +1, end);
                profit = Math.max(profit, currProfit);
            }
        }
    }
    return profit;
}


const solmaxProfit = maxProfit(weekPrices, weekPrices[0], weekPrices[weekPrices.length - 1]);
console.log({solmaxProfit});


// 3. Rotate Array
// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

// Example 1
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]


// Rotate numbers in an Array

let arrayRotate = [37, 5, 45, 98, 23, 5, 12, 40];

function rotateElems(arr, k) {
    let i = 0;
    while(i < k) {
        arr.unshift(arr.pop());
        i++;
    }
    return arr;
}

console.log(rotateElems(arrayRotate, 6));



// Find Pivot Index in an array
let pivotArray = [1,7,3,6,5,6];
console.log({pivotArray});

function findPivot(a) {
    let leftSum = 0;
    let rightSum = 0;
    for(arrEl of a) {
        let plusright = rightSum+=arrEl;
        console.log({plusright});
    }
    for( arrEl of a) {
        let lessRight= rightSum-=arrEl;
        console.log({lessRight});
        if(leftSum === rightSum){
            return arrEl;
        }
        leftSum+=arrEl
    }
}
console.log(findPivot(pivotArray));

// Make a new array with commoun numbers in two arrays

let firstArray = [ 3,4,5,6,7,78,8,9];
let secondArray = [ 6,7,8,9,10,11,12,13];

function findNumbers (arr1, arr2) {
   const newArray = arr1.filter( arr1El => arr2.includes(arr1El));
   return newArray;
}

const solvFindNumbers = findNumbers(firstArray, secondArray);
console.log({solvFindNumbers});

// reverse it
const reversing = firstArray.reverse();
console.log({reversing});


let myNums = [3, 6, 1, 0, 78];
// let myNums = [1, 2, 3, 4];


// know the max value in an array and its index
// new Array with rest of elements multiply each by two
// Max value in new Array
// Compare max value in new Array with max Value of first Array


function restByTwo(nums) {
    let maxNum = Math.max(...nums);
    let idxmaxNum = nums.indexOf(maxNum);
    console.log({idxmaxNum});
    let restOfEls = nums.filter(num => num < maxNum)
    .map(num => num * 2);
    console.log({restOfEls});
    let maxrestOfEls = Math.max(...restOfEls);
    console.log({maxrestOfEls});
    return maxNum >= maxrestOfEls ? idxmaxNum : -1;
}

const answer = restByTwo(myNums);
console.log(answer);
answer % 2 === 0 ? console.log('It is even') : console.log('It is odd');

Math.sign(answer) === 1 ? console.log('It is a positive number') : console.log('It is a negative number');


// Merge elements from two arrays in one array

arrNone = [ 2,3,4,5,6,7,8,9];
arrTwo = [10,11,21, 23, 34,56, 67,];

const arrOneTwo = [ ...arrNone, ...arrTwo];
console.log({arrOneTwo});


let theNumber = 365;

// return 14 (3 + 6 + 5);

function sumofNumbers() {
    let strNum = theNumber.toString();
    console.log(strNum);
    let arrofNums = Array.from(strNum);
    console.log(arrofNums);

    const theSum = arrofNums.reduce( (acc, cur) => {
        let numTosum = parseInt(cur);
        return  acc + numTosum;
    },5)

    return theSum;
}

console.log(sumofNumbers());






const arrone = ['paul', 'laura', 'john', 'david', 'dvrgd', 'dividid', 'singapore', 'murcielago', 'mariposa', 'gaol'];

const targetWord = 'og';
const arrTargetWord = targetWord.split('');
function findTargetWord(arr1) {
   return arr1.filter(word => {
       return arrTargetWord.every(char => {
          return word.includes(char)
       })
    })
}

console.log(findTargetWord(arrone));

console.log(Object.values(arrone));

// function findTargetWord2(target, array ) {
//      array.indexOf(target) !== -1;
//      return target;
// }

// console.log(findTargetWord2('holanda', arrone));


let randomNumber = Array.from({ length: 5}, () => Math.floor(Math.random() *  39));
console.log(randomNumber);




function sumDigits(number) {
    let strNumber = String(number);
    let myNumbers = Array.from(strNumber);
    console.log(myNumbers);
    const myResult = myNumbers.reduce((acc, cur) => {
        let parsed = parseInt(cur);
        return acc + parsed;
    }, 0)
    return myResult;
}

console.log(sumDigits(1345));


// Find the mammals. Return a new array containing only the animals which are mammals.

animals = [
    {
        type: 'Dog',
        mammal: true,
    },
    {
        type: 'Snake',
        mammal: false
    },
    {
        type: 'Cheetah',
        mammal: true
    }
]

const mammals = animals.filter(animal => animal.mammal === true);
console.log(mammals);

const arrofWords = ['david', 'dvgdfd', 'dancing', 'random', 'route'];
const targetWord1 = 'dvd';

const arrofArrWords = arrofWords.map( word => {
    const wordasArray = Array.from(word);
    return wordasArray;
})

console.log(arrofArrWords);

function findSubs() {
    const arrofTarget = Array.from(targetWord1);
    console.log(arrofTarget);
    for(arr of arrofArrWords) {
        console.log(arr);
        if(arr.includes(arrofTarget)) {
            return arr;
        };
    }

    const set4Subs = new Set();

    function findingTheW(arr, value) {
      const arrOfValue = Array.from(value);
      const mapOfarrOfValue = arrOfValue.map(i => i);
      const solveSubstring = arr.filter(a => a.includes(mapOfarrOfValue));
    //   const arrOfArray = arr.map(i => Array.from(i));
        return solveSubstring;

    }
    //  return arr.map( i => new RegExp(value.join('|')).test(i));
    };

    // console.log(findingTheW(arrofWords, targetWord1));

    // const allWords = arrofArrWords.filter( arr => {
    //     if(arr.includes(arrofTarget)) {
    //         return arr;
    //     }
    // })
    // return allWords
// }
// if (new RegExp(substrings.join("|")).test(string)) {
    // At least one match
// }


console.log(findSubs());

let str = 'david';
let index = str.search(targetWord1);

console.log(targetWord1.charAt());



// Function that finds two integers that sums the target

const arrSum = [1, 2, 3, 9];
const arr2 = [ 1, 2, 4, 4];
const target = 8;
console.log(target);

function findSumofTwo(anArray) {
    let index = 0;
    let next = 0;
    for(let i = 0; i < anArray.length; i++) {
        if(!i > target) {
            index = annArray[0];
            if(!(index + next) === target) {
                next = index;

            }
        }
    }

}

const unArray = [ 1, 2, 3, 4, 5];

function sumofNumbers(numbers) {
    const numToString = String(numbers);
    const arrOfNumbers = numToString.split('');
    let index = 0;
    let accum = 0;
    for (let i = 0; i < arrOfNumbers.length; i++) {
        index =  parseInt(arrOfNumbers[0]);
        const newNumber = accum += index;
        console.log(newNumber);

    }
}

console.log(sumofNumbers(unArray));


const miNumero = 5782;

let numToArr = miNumero.toString();
let splitNum = numToArr.split('');
let addNum = 0;
let tempNum = 0;
for(let i = 0; i < splitNum.length; i++) {
    tempNum = parseInt(splitNum[i]);
    addNum += tempNum;
}
console.log(addNum);


const anotherArray = [1,2,3,4,5];
const sumTarget = 8;


let input = [1,2,4,4];
let dSum = 8;
let set = new Set();
console.log({set});
function findingI() {
    for( let item of input) {
        let num = dSum - item;
        console.log({num});
        if(set.has(num)) {
            console.log(num + " " + item);
            if(num + item === dSum){
                console.log( num + item)
                return true;
            }
            break;
        }

        set.add(item);
    }
}
console.log(findingI());


const inputs = [3, 5, 7, 9, 4, 8, 5, 12, 4, 9, 16, 5];
const theSum = 28;
let theSet = new Set();

function findPair() {
    for (input of inputs) {
        let theNum = theSum - input;
        console.log({theNum})
        if(theSet.has(theNum)) {
            console.log(`${theNum},  ${input}`);
            // break;
            if(theNum + input === theSum) {
                console.log(theNum + theSum);
                return true;
            }
        }
        theSet.add(input);
    }
    // theNum === 28 ? true : false;
    // return theSet;
}

console.log(findPair());

const anotherInput = [1,2,4,9]

function findPairWMax() {
    const theMax = Math.max(...anotherArray);
    console.log(theMax);
    // return theMax;
    return anotherArray.filter(i => (i !== theMax) && (i + theMax === dSum));
}

console.log(findPairWMax());

const smallestArray = [5,3,4,6,7,2,10];

function findSmallest(arr) {
    if(arr.length < 2) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    console.log(left);
    const right = arr.slice(middle);
    console.log(right);
}

// Merge Sort



function merge( left, right) {
    const sorted = [];
    while (left.length & right.length) {
        if(left[0] <= right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift())
        }
    }
    let results = [...sorted, ...left, ...right];
    return results;
}


function mergeSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

mergeSort(inputs);


const arrayOfNumbers = [1, 2, 4, 5, ];

function summingArrayofNums(array) {
    let total = 0;
    let indexNum = 0;
    for(let i = 0; i < array.length; i++) {
        indexNum = array[i];
        // console.log(array[i]);
        total += indexNum;
        console.log(total)
        // return total;
    }
    return total;
}

console.log(summingArrayofNums(arrayOfNumbers));

function trySum() {
    let sum = 0;
    for(let i of arrayOfNumbers) {
        sum += i;
        return sum;
    }
}

console.log(trySum());



