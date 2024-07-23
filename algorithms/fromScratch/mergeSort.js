function mergeArr(array) {
    if(array.length < 2) return array;
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    return merge(mergeArr(left), mergeArr(right));
}


function merge(left, right) {
    const sorted = [];
    while(left.length && right.length) {
        if(left[0] <= right[0]){
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    let results = [...sorted,...left, ...right];
    return results;
}

console.log(mergeArr([4, 16, 1, 32, 8]));