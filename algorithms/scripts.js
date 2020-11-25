function spacifying(string) {
    let array = Array.from(string);
    const stringSpaced = array.map(c => c + ' ') ;
    return stringSpaced.join('');
}

const result = spacifying('monicadelcarmen');
console.log(result);


function spaceAntApproach(str) {
    const theArray = Array.from(str).map(c => c + '').join(' ');
    return theArray;
}

const antResult = spaceAntApproach('como lo sabes, resultara?');
console.log(antResult)

function maXChar(str) {
    const obj = {};
    for(let char of str) {
        obj[char] = obj[char] + 1 || 1;
    }
    console.log(obj);

}
maXChar('what the heck dudeeeeee');


function moreChar(str) {
    const obj = {};
    str.split('').forEach(char => obj[char] + 1 || 1);
    console.log(str.split(''));
}
moreChar('companeeeereeeee');

// function simplyMax(str) {

//     return Object.keys(str).reduce((prev, next) => str[a] >= str[b] ? a : b );
// }

// simplyMax('im th objectooo');


function isBalanced(str) {
    const theArr = Array.from(str);
    const firstPlace = str[0];
    const lastPlace = str[str.length - 1];
    const isEven = theArr.length % 2 === 0 ? true : false;
    const firstPair = isEven && firstPlace === lastPlace ? true : false;
        if (firstPair === true) {
            let nextLeft = str[firstPair + 1];
            let prevRight = str[firstPair - 1];
            console.log(nextLeft);
            console.log(prevRight);
        }
        return firstPair;
}


const myNexResult = isBalanced('monicalm');
console.log(myNexResult);


// function isBalancedSolved(str) {
//     const map = {
//         '(': ')',
//         '[': ']',
//         '{': '}',
//     };
//     const closing = Object.values(map);
//     const stack = [];

//     for (let char of str) {
//         if (map[char]) {
//             stack.push(char);
//         } else if (closing.includes(char) && char !== map[stack.pop()]) {
//             return false;
//         }
//     }
//     return !stack.length;
// }

// const isBalancedSolvedResult = isBalancedSolved('moniom');
// console.log(isBalancedSolvedResult);



// Calculate the tetrahedral numbers

const sequelNums = [1,2.3,4,5,6,7,8,9,10];

function findTetrahedral(arr) {
  let prevVal = 1;
  let currVal;
  let triangNum;
  for(arrEl of arr) {
      let newVal = arrEl+=prevVal;
      console.log({newVal});
      let triangNum = prevVal + newVal;
      currVal = triangNum;
      console.log({newVal});
      console.log({triangNum});
  }
  return currVal;
}

console.log(findTetrahedral(sequelNums));



