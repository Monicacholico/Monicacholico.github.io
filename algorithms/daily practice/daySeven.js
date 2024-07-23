function mergeArrays(array1, array2){

    let oneArray = [...array1, ...array2];
    console.log(oneArray);
    return oneArray.sort((a, b) => a - b);

}

console.log(mergeArrays([4,8,15,19], [7,9,10,16]));



const words = ['paul', 'laura', 'john', 'johnito', 'jonny', 'jonson', 'david', 'dvrgd', 'dividid', 'gaol', 'don'];

let searchBar = document.getElementById('wordInput');
let holder = document.getElementById('resultWord');
console.log(searchBar);

function getValue() {
    const wordSearched = searchBar.value;
    return words.filter(word => {
        let option =  word.match(wordSearched);
        // console.log(options.input);
        // options.forEach(option => {
        //     const li = document.createElement('li');
        //     li.textContent = option;
        //     holder.appendChild(li);
        // })
        if(option) {
            holder.textContent = word.replace(option, word)
        }
    })
}

searchBar.addEventListener('keyup', getValue);

