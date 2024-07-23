
let cache = {};

function fibonacci(index) {
    if(cache[index]) return cache[index]
    else {
        if( index < 2) {
            return 1;
        } else {
            cache[index] = fibonacci(index - 1) + fibonacci(index -2);
        }
        console.log(cache[index]);
        return cache[index]
    }

}

console.log(fibonacci(5));


function twoSum(array, number) {
    let set = new Set();
    return array.some(element => {
        let compliment = number - element;
        if(set.has(compliment)) {
            if(compliment + element === number) {
                console.log( `found numbers ${compliment} ${element}`);
                return true;
            } else  {
                console.log('not found');
                return false;
            }
        }
        set.add(element);
    })
}

console.log(twoSum([1,2,3,4,4], 8));


function mergeArrays(arr1, arr2) {

    const mergeArrays = [...arr1, ...arr2];

    return [...new Set(mergeArrays)];
}

console.log(mergeArrays([1,2,3,4,4], [3,2,3,4,5,6,6,7,8]));


function mergeArrays2(arr1, arr2) {

    let merged = arr1.concat(arr2);

    let object = {};

    for(let element of merged) {
        object[element] = object[element] + 1 || 1;
    }
    for(let element of merged) {
        if(object[merged[element]] > 1) {
            object[merged[element]] = 1;
        }
    }

    let uniqueArray = Object.keys(object).map(element => Number(element));
    return uniqueArray;
}

console.log(mergeArrays2([1,2,3,4,4], [3,2,3,4,5,6,6,7,8]))



// isBalanced


function isBalanced(string) {
    let stack = [];

    for(let i = 0; i < string.length; i++) {
        let char = stack[stack.length - 1];
        if(string[i] == '(' || string[i] == '{' || string[i] == '[') {
            stack.push(string[i]);
        } else if ((char == '(' && string[i] == ')') ||
        ( char == '{' && string[i] == '}') ||
        (char == '[' && string[i] == ']')){
            stack.pop();
        } else {
            return false;
        }
        console.log(stack);
    }

    return stack.length ? false : true;

}

console.log(isBalanced('(({}))'));



function isBalanced2(string) {

    let stack = [];
    for(let i = 0; i < string.length; i++) {
        let char = stack[stack.length - 1];
        if(string[i] == '(' || string[i] == '{' ||
        string[i] == '[') {
            stack.push(string[i]);
        } else if((char == '(' && string[i] == ')') ||
        (char == '{' && string[i] == '}') ||
        (char == '[' && string[i] == ']')) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length ? false : true;

}

console.log(isBalanced2('(({}))'));