


function harmlessRansomNote(noteText, magazineText) {
    let noteArr = noteText.split(' ');
    let magazineArr = magazineText.split(' ');
    let magazineObj = {};

    magazineArr.forEach(word => {
        if(!magazineObj[word]) {
            magazineObj[word] = 0;
        }
        magazineObj[word]++;
    })
    // console.log(magazineObj);
    let noteIsPossible = true;
    noteArr.forEach(word => {
        if(magazineObj[word]) {
            magazineObj[word]--;
            console.log(magazineObj);
    //         if(magazineObj[word] < 0 ) {
    //             noteIsPossible = false;
            }
    //     } else noteIsPossible = false;
    })
    // return noteIsPossible;
    console.log(magazineObj)
}

console.log(harmlessRansomNote('this is a secret note for you from a secret', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am and' +
'admirer of you must hike quiete a distances to find the secret places as they are far from populated areas bu ti is worth the effor\n a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking\n boots this is one of the best places I have ever visited'));

// Constant Time

// function log(array) {
//     console.log(array[0]);
//     console.log(array[1]);
// }

// log([1,2,3,4]);
// log([1,2,34,5,6,78,9,10]);

// Linear Time


// Exponential Time


//Logarithmic time