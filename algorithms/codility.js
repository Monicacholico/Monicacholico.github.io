function sumNumbers(number) {
    const myString = number.toString();
    const arrmyString = Array.from(myString);
    console.log(arrmyString);
    let sum = 0;

    // let parsed = arrmyString.map(el => parseInt(el));
    // console.log(parsed);


    const mySum = arrmyString.reduce((acc, cur) => {
        let parsed = parseInt(cur);
        return acc + parsed;
    }, 0);

    return mySum;


}

console.log(sumNumbers(123));



var numbers = [10, 20, 30, 40] // sums to 100

var sum = 0;
function theSumNumbers(arr) {
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // console.log(arr[i])
    console.log(sum);
    return sum;
}

console.log(theSumNumbers(numbers));

// var numbers = [10, 20, 30, 40] // sums to 100
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }

// console.log(sum)



//function that returns an array of the original values summed with the previous value

function summingNumbers (nums) {
    const stringNums = nums.toString();
    let arrOfNums = Array.from(stringNums);
    console.log(arrOfNums);
    let sum = 0;
    const mySum = arrOfNums.map(num => {
        num = parseInt(num);
        // console.log(parsed);
         return sum += num;
    } );
    console.log(mySum);
    return mySum;

}

summingNumbers(5678);

// Black Jack

var count = 0;

function cc(card) {
//   Only change code below this line
  if (card > 1 && card <= 6) {
    count =+ 1;
    // const current = card + count;
    return `${count} BET`;
    }
    if (card > 6 || card < 10) {
        // console.log(card);
        // console.log(count);
        count = 0;
    return `Your current count is ${count}, HOLD`;
    }
    else {
        count =-1;
        // const current = card + count;
        return `Your current count is ${count}, HOLD`;
    }




//   return "Change Me";
//   Only change code above this line
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));