colorsMedium = ['mistyrose', 'cadetblue', 'floralwhite', 
'ivory', 'lightblue', 'antiquewhite', 'mintcream', 'darsalmon', 
'darkseagreen', 'lightcoral','lavender' ];

colorsLarge = ['crimson','darkcyan', 'darkorange', 
'darkturquoise', 'coral', 'cornflowerblue', 'hotpink', 'mediumaquamarine']

colorsSmall = [colorsMedium, colorsLarge];
console.log(`Arrays: ${colorsSmall}`);


let largeColors = Math.floor(Math.random() * colorsLarge.length);

let randomColorsLarge = colorsLarge[largeColors];

console.log(randomColorsLarge);
// console.log(`colors for large bubbles: ${largeColors}`)

// function largeColors(){
//     return Math.floor(Math.random() * colorsLarge.length);
// }

function setColors() {
   var bigBubble = document.getElementById('bubLarge');
   console.log(bigBubble);
   bigBubble.style.backgroundColor = randomColorsLarge;
}

setColors();

