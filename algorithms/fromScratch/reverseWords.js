
function reversingWords (string) {
    let arrOfString = string.split('');
    console.log(arrOfString.length);
    let newArray = [];
    let firstLetter = arrOfString[0];
    let lastLetter = arrOfString[arrOfString.length - 1];

    let i = 0;
    while( i < arrOfString.length) {
        newArray.unshift(arrOfString.pop());
        i++;
        console.log(newArray);
        return newArray;

    }

    // for(let i = 0; i < arrOfString.length; i++) {
    // }

    // const arrOfWord = word.split('');
    // const reversedWord = arrOfWord.reverse().join('');
    // console.log(reversedWord);
    // return reversedWord;

}

console.log(reversingWords('Monica'));