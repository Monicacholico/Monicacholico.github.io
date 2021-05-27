function caesarCipher(str, num) {
    str = str.toLowerCase();

    let result = '';
    let charcode = 0;

    for(let i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }

    return result;
}

console.log(caesarCipher('zebra-456', 2));