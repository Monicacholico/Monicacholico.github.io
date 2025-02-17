
function reversingWords (string) {
    let arrOfString = string.split(' ');
    console.log(arrOfString);
    console.log(arrOfString.length);
    let newArray = [];
    let firstLetter = arrOfString[0];
    let lastLetter = arrOfString[arrOfString.length - 1];

    arrOfString.forEach(word => {
        let reversedWord = ''
        for(let i = word.length - 1; i >=0; i--) {
            reversedWord += word[i];
        }
        newArray.push(reversedWord);
    })
    return newArray.join(' ');
}

console.log(reversingWords('My name is Monica'));