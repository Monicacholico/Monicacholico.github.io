function isPalindrome(str) {
    str = str.toLowerCase();
    let charactersArray = str.split('');
    let validCharacters = 'abdcefghijklmnopqrstuvwxyz'.split('');

    let lettersArray = [];

    charactersArray.forEach(char => {
        if(validCharacters.indexOf(char) > -1){
            lettersArray.push(char);
            console.log(lettersArray);
        }
    });
    if(lettersArray.join('') === lettersArray.reverse().join('')){
        return true;
    } else {
        return false;
    }


}

console.log(isPalindrome("anna"));


function subsIsInString(array, target) {
    let arrofTarget = target.split('');
    console.log(arrofTarget);
    let arrOfStrings = [];

    array.forEach(word => {
        let arrOfWords = word.split('');
        return arrOfWords.filter( w => {
            if(arrofTarget.indexOf(w) !== -1) {
                    arrOfStrings.push(arrOfWords);
                    console.log(arrOfStrings);
            }
        })
    })



}

console.log(subsIsInString(['john', 'paul', 'laura', 'unico', 'ringo', 'george', 'david', 'divididf', 'don'], 'dvd'))



