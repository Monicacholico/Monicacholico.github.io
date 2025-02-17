
var pointeShoes = [
    {
        name: 'Alpha',
        brand: 'Bloch',
        characteristics: [
            {
                level: 'Advanced'
            },
            {   toeLengths: 'Long'

            },
            {
                strength: 'Medium'
            },
            {
                profile : 'High'
            },
            {
                width: 'Narrow'
            },
            {
                footType: 'Egyptian'
            }

        ]
    },
    {
        name: 'Elite',
        brand: 'Grishko',
        characteristics: [
            {
                level: 'Medium'
            },
            {   toeLengths: 'Short'

            },
            {
                strength: 'Medium'
            },
            {
                profile : 'Low'
            },
            {
                width: 'Wide'
            },
            {
                footType: 'Giselle'
            }

        ]
    }
];


let filterPointeShoes = pointeShoes.filter(pointeShoe => pointeShoe.characteristics[0].level.includes('Med'));

console.log(filterPointeShoes);

let pointe = document.querySelector('.result');
console.log(pointe);

let pointeString = JSON.stringify(filterPointeShoes[0].name).replace(/\"/g, "" );

// pointe.innerHTML = pointeShoes.brand + ' ' + pointeShoes.name + " " + pointeShoes.characteristics;

pointe.innerHTML = pointeString;


for(var i = 0; i < pointeShoes.length; i++){
    console.log(pointeShoes[i]);
}