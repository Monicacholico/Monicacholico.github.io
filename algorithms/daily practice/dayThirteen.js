function duplicateEncode(word){
    // ...
  word = word.split('');
  word = word.map(char => char.toLowerCase());
  console.log(word);
  let object = {};

  for(char of word) {
  object[char] = object[char] + 1 || 1;
  }

  for(let i = 0; i < word.length; i++) {
      let temp = '';
    console.log(object[word[i]]);
    if(object[word[i]] === 1) {

        object[word[i]] = '('
    } else {
       object[word[i]] = ')'
    }
  }

  let newArray = Object.values(object).join('');
  return newArray;
}

console.log(duplicateEncode('success'))
