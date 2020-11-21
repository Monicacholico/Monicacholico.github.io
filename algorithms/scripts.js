function spacifying(string) {
    let array = Array.from(string);
    const stringSpaced = array.map(c => c + ' ') ;
    return stringSpaced.join('');
}

const result = spacifying('monicadelcarmen');
console.log(result);


function spaceAntApproach(str) {
    const theArray = Array.from(str).map(c => c + '').join(' ');
    return theArray;
}

const antResult = spaceAntApproach('como lo sabes, resultara?');
console.log(antResult)

function maXChar(str) {
    const obj = {};
    for(let char of str) {
        obj[char] = obj[char] + 1 || 1;
    }
    console.log(obj);

}
maXChar('what the heck dudeeeeee');


function moreChar(str) {
    const obj = {};
    str.split('').forEach(char => obj[char] + 1 || 1);
    console.log(str.split(''));
}
moreChar('companeeeereeeee');

function simplyMax(str) {

    return Object.keys(str).reduce((prev, next) => str[a] >= str[b] ? a : b );
}

simplyMax('im th objectooo');


function isBalanced(str) {
    const max = 2;
    const myvar = Array.from(str).map( c => c * max);
    return myvar;
}

const myNexResult = isBalanced('oy');
