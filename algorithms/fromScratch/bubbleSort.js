

function bubbleSort(array) {
    for(let i = array.length; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }

        }
    }

    return array;

}


console.log(bubbleSort([5, 3, 8, 2, 1, 4]));


function bubbleSortDo(array) {
    let swapped = false;
    do {
        swapped = false;
        array.forEach((item, index) => {
            if(item > array[index + 1]) {
                let temp = item;
                array[index] = array[index + 1]
                array[index + 1] = temp;
                swapped = true;
            }
        })
    } while (swapped);
    return array;
}

console.log(bubbleSortDo([5, 3, 8, 2, 1, 4]));
console.log(bubbleSortDo([20, 20, 31, 56, 1, 12, 12]));