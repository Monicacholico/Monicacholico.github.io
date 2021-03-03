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




const arrone = ['paul', 'laura', 'john', 'david', 'dvrgd', 'dividid', 'singapore', 'murcielago', 'mariposa', 'gaol'];

const targetWord = 'ul';
const arrTargetWord = targetWord.split('');
console.log(arrTargetWord);
function findTargetWord(arr1) {
   return arr1.filter(word => {
       let char = '';
       for(var i = 0; i < arrTargetWord.length; i++) {
        if(word.includes(arrTargetWord[i])){
            return word;
        }
       }
    // if(word.includes(arrTargetWord[0])
    //     && word.includes(arrTargetWord[1]) 
    //     && word.includes(arrTargetWord[2])){
    //         console.log(word);
    //         return word
    //     }
    })
}

console.log(findTargetWord(arrone));

console.log(Object.values(arrone));

function findTargetWord2(target, array ) {
     array.indexOf(target) !== -1;
}

// console.log(findTargetWord2(targetWord, arrone));


let randomNumber = Array.from({ length: 5}, () => Math.floor(Math.random() *  39));
console.log(randomNumber);

