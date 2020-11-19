function spacifying(string) {
    let array = Array.from(string);
    const stringSpaced = array.map(c => c + ' ') ;
    return stringSpaced.join('');
}

const result = spacifying('monicadelcarmen');
console.log(result);

function maXChar(str) {
    const obj = {};
    for(let char of str) {
        obj[char] = obj[char] + 1 || 1;
    }
    console.log(obj)
}
maXChar('what the hell dudeeeeee');


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