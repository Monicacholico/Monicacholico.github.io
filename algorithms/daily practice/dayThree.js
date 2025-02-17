

function twoSum (array, target) {
    let seen = new Set();
    return array.some(element => {
        let compliment = target - element;
        if(seen.has(compliment)) {
            if(element + compliment === target) {
                console.log(`found ${element} and ${compliment} sums ${target}`)
                return true;
            } else {
                return false;
            }
        }
        seen.add(element);
    })
}

console.log( twoSum([1,2,3,4,5], 8));


function isPalindromeEasy(string) {
    let lowered = string.toLowerCase();
    let stringInArray = lowered.split('');
    console.log(stringInArray)
    let reversed = stringInArray.reverse();
    console.log(reversed);
    console.log(reversed.join(''));
    console.log(stringInArray.join(''));
    if(lowered === reversed.join('')){
        return true;
    } else {
        return false;
    }


}

console.log(isPalindromeEasy('monica'));


function isPalindromeV2(string) {
    let arrayString = string.split(' ');
    let reversedWord = '';
    for(let i = arrayString.length -1; i >= 0; i--) {
        let current = arrayString[i];
        reversedWord += current;
        console.log(reversedWord);
    }

}

console.log(isPalindromeV2('monica'));



function substringInString(array, target) {
    target = target.split('');
    return array.filter(string => {
        return target.every(char => {
            return string.includes(char);
        })
    })
}

console.log(substringInString(['david', 'paula', 'davadf', 'laura', 'consntan', 'john', 'dvdffdg'], 'no'))