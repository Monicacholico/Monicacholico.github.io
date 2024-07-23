function isBalanced(string) {
    let stack = [];
    for(let i = 0; i < string.length; i++) {
        let char = stack[stack.length - 1];
        if(string[i] === '(' || string[i] === '[' || string[i] === '{'){
            stack.push(string[i]);
        } else if ((char === '(' && string[i] === ')') ||
        (char === '[' && string[i] === ']') ||
        (char === '{' && string[i]=== '}')
        ){
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length ? false : true;
}

console.log(isBalanced('({[]})'))

function removeDuplicates(array) {

    const noDup = [...new Set(array)];
    return noDup;

}

function removeDuplicates2(array) {
    const object = {};
    for(let element of array) {
        object[element] = object[element] + 1 || 1;

    }

    for(let element of array) {
        if(object[array[element]] > 1) {
            object[array[element]] = 1;
        }
    }
    const newArray = Object.keys(object).map( element => Number(element));

    console.log(object);
    return newArray;
}

console.log(removeDuplicates([1,2,3,4,3,3,4,5,5,6,7,8]))
console.log(removeDuplicates2([1,2,3,4,3,3,4,5,5,6,7,8]));


function parenthesisQ(string) {
    let stack = [];
    for(let i = 0; i < string.length; i++) {
        let char = stack[stack.length - 1];
        if(string[i] === '(' || string[i] === '[' || string[i] === '{'){
            stack.push(string[i]);
        } else if((char === '(' && string[i] === ')') ||
            (char === '[' && string[i] === ']') ||
            (char === '{' && string[i] === '}')
        ) {
            stack.pop();
        } else {
            return false;
        }
        console.log(stack);
    }
    return stack.length ? false : true;
}

console.log(parenthesisQ('([])'));


function twoSum (array, target) {
    let set = new Set();

    return array.some(element => {
        let complement = target - element;
        if(set.has(complement)) {
            if( complement + element === target) {
                console.log( ` found ${complement} +  ${element}`)
                return true;
            } else {
                return false;
            }
        }
        set.add(element);
    })
    // for(let element of array) {
    //     const complement = target -element;
    //     if(set.has(complement)) {
    //         if(element === complement) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    //     set.add(element);
    // }
}

console.log(twoSum([1,2, 3, 4, 4 ], 8));


function findKeyWords (array, word) {
    word = word.split('');
    return array.filter(element => {
        return word.every( char => {
            return element.includes(char);
        })
    })
}

console.log(findKeyWords(['david', 'john', 'paul', 'oliver', 'davdhr', 'ultra'], 'dvd'))



const mat = [
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],//0
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],//1
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],//2
    [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],//3
    [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],//4
    [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],//5
    [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],//6
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],//7
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],//8
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],//9
    [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],//10
    [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],//11
    [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],//12
    [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],//13
    [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],//14
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],//15
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],//16
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0] //17
  ];

  const W = mat[0].length;
const H = mat.length;

// get the area covered by rectangles
let totalRectArea = 0;
for (let i = 0; i < W; ++i) {
  for (let j = 0; j < H; ++j) {
    totalRectArea += mat[j][i] > 0 ? 1 : 0;
  }
}

const rects = [];
let rectArea = 0;


// find all rectangle until their area matches the total
while (rectArea < totalRectArea) {
    const rect = findNextRect();
    rects.push(rect);
    markRect(rect);
    rectArea += (rect.x2 - rect.x1 + 1) * (rect.y2 - rect.y1 + 1);
  }

  console.log(rects);

  function findNextRect() {
    // find top left corner
    let foundCorner = false;
    const rect = { x1: 0, x2: W-1, y1: 0, y2: H-1 };
    for (let i = 0; i < W; ++i) {
      for (let j = 0; j < H; ++j) {
        if (mat[j][i] === 1) {
          rect.x1 = i;
          rect.y1 = j;
          foundCorner = true;
          break;
        }
      }
      if (foundCorner) break;
    }
    // find bottom right corner
    for (let i = rect.x1; i <= rect.x2; ++i) {
      if (mat[rect.y1][i] !== 1) {
        rect.x2 = i-1;
        return rect;
      }
      for (let j = rect.y1; j <= rect.y2; ++j) {
        if (mat[j][i] !== 1) {
          rect.y2 = j-1;
          break;
        }
      }
    }
    return rect;
  }

  // mark rectangle so won't be counted again
  function markRect({ x1, y1, x2, y2 }) {
    for (let i = x1; i <= x2; ++i) {
      for (let j = y1; j <= y2; ++j) {
        mat[j][i] = 2;
      }
    }
  }