const filteredLevel = document.getElementById('filter-level').value;
const filteredType = document.getElementById('filter-type').value;

// document.getElementById('filter-level').value = filter.type;
// console.log(filteredLevel);

let filter = {
    type: filteredType,
    level: filteredLevel
}

let pointeShoes = [
    {
        name: 'Alpha',
        brand: 'Bloch',
        type: 'Egyptian',
        level: 'Advanced'
    },
    {
        name: 'Elite',
        brand: 'Grishko',
        type: 'Giselle',
        level: 'Intermediate'
    },
    {
        name: 'Balance',
        brand: 'Bloch',
        type: 'Giselle',
        level: 'Beginner'
    },
    {
        name: 'Contempora',
        brand: 'Capezio',
        type: 'Greek',
        level: 'Beginner'
    },
    {
        name: 'Recital',
        brand: 'Sansha',
        type: 'Giselle',
        level: 'Intermediate'
    },
    {
        name: 'Juliet',
        brand: 'Capulet',
        type: 'Giselle',
        level: 'Advanced'
    }
]

function pointeShoesResult(){
    pointeShoes = pointeShoes.filter( item => {
        for(const key in filter) {
            // let myValue = filter[key].toLowerCase();
            // console.log(myValue);
            if(item[key] === undefined || item[key] != filter[key])
                return false;
            }
            return true;
        });
        console.log(pointeShoes);
    }


// function pointeShoesResult() {
//     pointeShoes.filter(function(item){
//         for(const key in filter) {
//             if(item[key] === undefined || item[key] != filter[key])
//             return false
//         }
//         return true;
    
//     });
//     console.log(pointeShoesResult);
// }
searchBtn.addEventListener('click', pointeShoesResult);
