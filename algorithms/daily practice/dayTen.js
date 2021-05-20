


function isBalanced(string) {
let stack = [];
for(let i = 0; i < string.length; i ++) {
    let char = stack[stack.length - 1];
    if(string[i] == '(' || string[i] == '{' || string[i] == '['){
        stack.push(string[i]);
    } else if ((char == '(' && string[i] == ')') ||
                (char == '{' && string[i] == '}') ||
                (char =='[' && string[i] == ']')
    ) {
        stack.pop()
    } else {
        return false;
    }
}
    return stack.length ? false : true;
}


console.log(isBalanced('{[(])]}'));



function isAnagram(strs){
    // let checking = word1.split('').sort().join('') === word2.split('').sort().join('');
    // console.log(checking)
    // return checking;

    let result = {};
    for(let word of strs) {
        let cleansed = word.split('').sort().join('');
        if(result[cleansed]) {
            result[cleansed].push(word);
        } else {
            result[cleansed] = [word];
        }
    }
    console.log(Object.keys(result));
    console.log(Object.values(result));

    return 'the result for ' +  Object.keys(result)  + ' are: ' + Object.values(result);
}

console.log(isAnagram(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));


function kLargest(arr, k) {
    arr.sort((a, b) => b - a);
    n = arr.length;


    for(let i = 0; i < k; i++) {
        console.log(arr[i] + ' ') ;
        // return arr[i];
    }
}
let arr = [1,23, 12, 9, 30, 2, 50];
let n = arr.length;
let k = 3;

console.log(kLargest(arr, k));

let arrayMax = [-10, -3, 5, 6, -2];




function maxProduct(array) {
    let sorted = array.sort((a, b) => b - a);
    console.log(sorted);
    let maxValue = Math.max(...sorted);
    let product = maxValue * sorted[1];
    console.log(product);
}


console.log(maxProduct(arrayMax));