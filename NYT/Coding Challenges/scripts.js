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

console.log(parenthesisQ('([])'))