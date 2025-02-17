// From a given array find a pair that sums target number;
// If there is a pair return true, if not just return false;

const pairSumArray = [1, 2, 3, 4, 5];
const targetSum = 8;

let set = new Set();

function findingSumPair(array) {
  for (let number of array) {
    let pairSum = targetSum - number;
    if (set.has(pairSum)) {
      if (pairSum + number === targetSum) {
        return true;
      }
      break;
    }
    set.add(number);
    return false;
  }
}

console.log(findingSumPair(pairSumArray));

function findPair(inputs, target) {
  const seen = new Set();
  return inputs.some((element) => {
    const compliment = target - element;
    if (seen.has(compliment)) {
      console.log("Found", compliment);
      return true;
    }
    seen.add(element);
    return false;
  });
}

console.log(findPair(pairSumArray, targetSum));


// Find the character most used in a given string




function mostChar(str) {
    const obj = {};
    let checkNum = 0;
    let letter = '';

    for(let char of str) {
        obj[char] = obj[char] + 1 || 1;
    }

    for(let i = 0; i < str.length; i++ ) {
        if(obj[str[i]] > checkNum) {
            letter = str[i];
            checkNum = obj[str[i]];
        }
    }

    return letter;
}

console.log(mostChar('most used charachterc'));


// From a given array of strings and a given target word
// Return the strings that include the given target word
// It doesn't matter the order of the target word in the string

const arrayOfStrings = ['paul', 'laura', 'john', 'david', 'dvrgd', 'dividid', 'gaol', 'don']
const targetWord = 'ul';

function findTargetWord(arr, target) {
    const arrOfTargetWord = target.split('');
    return arr.filter(word => {
        for(let i = 0; i < arrOfTargetWord.length; i++) {
            if(word.includes(arrOfTargetWord[i])) {
                return word;
            }
        }
    })
}

console.log(findTargetWord(arrayOfStrings, targetWord));


// Find subarrays within an array that sum up to zero

const inputsFindSumZero = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];



function findSumZero(array) {
    const seen = new Set();
    seen.add(0);
    let sum = 0;
    for(let element of array) {
        sum += element;
        console.log(sum += element);
        if(seen.has(sum)){
          console.log(sum + " " + element);
          console.log(seen);
          if(sum === 0) {
            console.log(`${sum} and ${element}`);
          }
            return true;
        }
    }
    seen.add(sum);
    console.log(seen);
    return false;

}

console.log(findSumZero(inputsFindSumZero));


const subarraySumMap = (nums, k) => {
  const insert = (hashMap, key, value) =>
  hashMap.set(key, (hashMap.get(key) || []).concat(value));
  const results = [], hashMap = new Map();
  let sum = 0;
  insert(hashMap, 0, -1);
  for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
    if(hashMap.has(sum - k)) {
      let list = hashMap.get(sum - k);
      console.log(list);
      list.forEach(value => {
        results.push(nums.slice(value + 1, index + 1));
      });
    }
    insert(hashMap, sum, index);
  }
  return results;
}

const main = () => {
  const input = [ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2], target = 0;
  console.log(subarraySumMap(input, target));
}

main();



function sumingNumbers(array) {
    let theSum = 0;
    for(item of array) {
        theSum += item;
    }
    return theSum;
}

console.log(sumingNumbers(pairSumArray));



const wordToLook = 'david';
const wordTofound = 'dvd';

const found = wordToLook.includes(wordTofound.split(' '));
console.log(found);


function harmlessRansomNote(aWord, theWords){
  let wordinArray = aWord.split('');
  // console.log(arrayWords)
  // let arrayWords = theWords.split('');
  let objHolder = {};
  theWords.forEach( w => {
    if(!objHolder[w]) {
      objHolder[w] = 0;
    }
    objHolder[w]++
  });
  // console.log(objHolder)
  let subsinString = true;
  wordinArray.forEach(wo => {
    if(objHolder[wo]){
      objHolder[wo]--;
      if(objHolder[wo] < 0) subsinString = false;
    }
    else subsinString = false;
  })
  return subsinString;
}

console.log(harmlessRansomNote(targetWord, arrayOfStrings));
function findingSubs(array, targ) {
  let arrOfTarg = targ.split('');
  console.log(arrOfTarg);
  let letterinSub = '';
  let checkNum = 0;
  let holdObj = {};
  for(str of array) {
    const newStr = Array.from(str);
    if(!holdObj[newStr]) {
      holdObj[newStr] = 0;
    }
    holdObj[newStr]++;
  }
  console.log(holdObj);
  for(let i = 0; i < array.length; i++) {
    let strArr = Array.from(array[i]);
    if(strArr.includes(arrOfTarg[i])){ // is taking the i of the array not of the targetWord
      console.log(strArr);
      // return strArr;
    } else {
      console.log('not found');
    }
    // if(holdObj[array[i]] === i.indexOf());
  }
for (let i = 0; i < arrOfTarg.length; i ++) {
  for(element in holdObj) {
    // console.log(element);
    if(element.includes(arrOfTarg[i])){
      // console.log(arrOfTarg[i]);
      console.log(element);
    }
  }
}

  for(let str of array) {
    const regTarget = new RegExp(targetWord);
    console.log(regTarget);
    console.log(str);
    const theSearch = str.search(regTarget);
    console.log(theSearch);
  }
}

console.log(findingSubs(arrayOfStrings, targetWord));
