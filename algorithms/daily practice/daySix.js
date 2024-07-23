function findSmallMissed(array) {

    let n = array.length;
    // let present = new Array(n+1);

    // for(let i = 0; i < n + 1; i++) {
    //     present[i] = false;
    // }


    let present = new Array(n + 1).fill().map((v, i) => i = false);

    console.log(present);
    console.log(n);

    for(let i = 0; i < n; i++) {
        if(array[i] > 0 && array[i] <= n){
            console.log(present[array[i]]);
            present[array[i]] = true;
        }
    }
    console.log(present);
    console.log(array);

    for(let i = 1; i <= n; i++){
        if(!present[i]) {
            return i;
        }
    }
    console.log(n + 1);
    return n + 1;
}


// console.log(findSmallMissed([1, 3, 6, 4, 1, 2]));
// console.log(findSmallMissed([1, 3, 1, 2]));
console.log(findSmallMissed([1, 2, 3]));



function solution(A)
{
    let n = A.length;
    // To mark the occurrence of elements
    let present = new Array(n+1);


    for(let i=0;i<n+1;i++)
    {
        present[i]=false;
    }
    // Mark the occurrences
    for (let i = 0; i < n; i++)
    {
        // Only mark the required elements
        // All non-positive elements and
        // the elements greater n + 1 will never
        // be the answer
        // For example, the array will be {1, 2, 3}
        // in the worst case and the result
        // will be 4 which is n + 1
        console.log(A[i]);
        if (A[i] > 0 && A[i] <= n)
        {
            present[A[i]] = true;
        }
        console.log(present)
    }
    // Find the first element which didn't
    // appear in the original array

    for (let i = 1; i <= n; i++)
    {
        if (!present[i])
        {
            return i;
        }
    }
    // If the original array was of the
    // type {1, 2, 3} in its sorted form
    return n + 1;
}

let A=[1, 2, 3]
console.log(solution(A));





function findMissingInConsecutive(array) {

    let current = new Array(array.length).fill().map((v, i) => i);
    let nonPresent = [];

    for(let i =0; i < array.length; i++) {
        console.log(current[array[i] + 1])
        console.log(current[array[i + 1]])
        if((current[array[i]+ 1]) === (current[array[i + 1]])) {
            current[array[i]] = true;
        }
    }
    console.log(current);

    // for(let i = 0; i < array.length; i++) {
    // //   if(current[array[i]] === undefined) {
    // //       nonPresent.push(current[array[i]])
    // //   }
    // console.log()
    // console.log(Object.values(current[array[i]]));
    // }
    return nonPresent;


}

console.log(findMissingInConsecutive([1,2,3,5]));



function findMissingConsec(array) {

    let actualSum = 0;

    for(let input in array) {
        actualSum += array[input];
        console.log(actualSum)
    }

    let n = array.length + 1;
    console.log(Math.floor(n * (n +1)) / 2);
    let sumOfN = Math.floor((n * (n + 1)) / 2);
    return sumOfN - actualSum;

}

console.log(findMissingConsec([1,2,3,4,5,6,7,29,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23, 24, 25, 26, 30, 28, 27]));