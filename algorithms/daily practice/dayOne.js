const pairSumArray = [1, 2, 3, 4, 5];
const targetNum = 8;

function findingPairToSum(array, targetNumber) {
    let seen = new Set();
    array.some(element => {
        let compliment = targetNumber - element;
        if(seen.has(compliment)) {
            console.log('Found', compliment);
            return true;
        }
        seen.add(element);
        return false;
    })
}

console.log(findingPairToSum(pairSumArray, targetNum));


function sumOfNumbers(number) {
    const stringNumber = number.toString();
    const arrayOfNumbers = stringNumber.split('');
    console.log(arrayOfNumbers);
    return arrayOfNumbers.reduce((acc, cur) => {
        let parsed = parseInt(cur);
        return acc + parsed;
    }, 0)
}

console.log(sumOfNumbers(234))


const arrayOfStrings = ['paul', 'laura', 'john', 'david', 'dvrgd', 'dividid', 'gaol', 'don']
const targetWord = 'dvd';

function findSubInStrings(array, targetW) {
    let arrOfTarget = targetW.split('');
    return array.filter( str => {
        return arrOfTarget.every( char => {
            return str.includes(char)
        })
    })
}

console.log(findSubInStrings(arrayOfStrings, targetWord));


function isPalindrome(string) {
    string = string.toLowerCase();
    const arrayfromString = string.split('');
    console.log(arrayfromString.join(''));
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // const charArrays = [];
    // arrayfromString.forEach(char => {
    //     if(alphabet.indexOf(char) > -1){
    //         charArrays.push(char);
    //     }
    // });
    if(arrayfromString.join('') === arrayfromString.reverse().join('')){
        return true;
    } else {
        return false;
    }

}
console.log(isPalindrome('jaime'));


// const form = document.getElementsByTagName('form');
const inputs = document.querySelectorAll('input');
const arrOfInputs = Array.from(inputs);


function sortingInputValues() {
    let newValues = [];
    arrOfInputs.forEach(input => {
        let value = Number(input.value);
        // input.setAttribute('value', value);
        // let inputByValue = input.getAttribute('value');
        // console.log(inputByValue)
        newValues.push(value);
        console.log(newValues);
        const theValues = newValues.sort((a,b) => {
            if(a > b) {
                // value = a;
                return 1;
            } else {
                return -1;
            }
        });


        // return theValues;

    })
}


// input


// const btn = document.querySelector('button');
// btn.addEventListener('click', sortingInputValues);


const form = document.querySelector('form');
const userInputs = document.querySelectorAll('input');


function anotherTrytoSort() {

    const inputsArray = [].slice.call(userInputs);
    // const inputsArray = Array.prototype.slice.call(userInputs); Alternative
    inputsArray.sort(( a, b) => {
        return Number(a.value) > Number(b.value) ? 1 : -1;
    })

    inputsArray.forEach(function(i) {
        form.appendChild(i);
    })
}
const btn = document.querySelector('button');
btn.addEventListener('click', anotherTrytoSort);



function calculateSumOdd () {
    let sum = 0;
    let total;
    // const arrOfOddNumbers = Array.from({length: 30}, (v,i) => i );
    // const arrOfOddNums = Array.from({length: 31}, n => n );
    const oddNumbers = new Array(30).fill().map( (v, i) => {
        if(i > 9 && i % 2 === 1) {
            total = sum += i;
            console.log(total);
        }
    } );
    return total;
    // console.log(arrOfOddNumbers)
    // console.log(arrOfOddNums)
    console.log(oddNumbers)


}

console.log(calculateSumOdd())