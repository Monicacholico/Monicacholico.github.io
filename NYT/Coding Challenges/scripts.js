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