function rotationalCipher(input, rotationFactor) {
    // Write your code here
    let arrayOfInput = input.split('');
    console.log(arrayOfInput)
    let validChars = 'abcdefghijklmnopqrstuvwxyz';
    let validNums = '0123456789';
    let encripted = [];
    let object = {};

    for(let i of arrayOfInput) {
      object[i] = object[i] + 1 || 1;
    }
    console.log(object);

  }
  let string = 'zebra-493';

  console.log(rotationalCipher(string))




  function mergeArrays2(arr1, arr2) {

    let merged = arr1.concat(arr2);

    let object = {};

    for(let element of merged) {
        object[element] = object[element] + 1 || 1;
    }
    for(let element of merged) {
        if(object[merged[element]] > 1) {
            object[merged[element]] = 1;
        }
    }

    let uniqueArray = Object.keys(object).map(element => Number(element));
    return uniqueArray;
}

console.log(mergeArrays2([1,2,3,4,4], [3,2,3,4,5,6,6,7,8]))