const targetNumber = 3456;

function sumOfDigits(number) {
    const stringOfNumbers = String(number);
    const arrOfNumbers = Array.from(stringOfNumbers);
    const sumOfNumbers = arrOfNumbers.reduce((acc, cur) => {
        let parsedInt = parseInt(cur);
        return acc + parsedInt;
    },0);
    return sumOfNumbers;
}

console.log(sumOfDigits(targetNumber));