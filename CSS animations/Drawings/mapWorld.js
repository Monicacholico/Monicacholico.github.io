colorsMedium = ['mistyrose', 'cadetblue', 'floralwhite', 
'ivory', 'lightblue', 'antiquewhite', 'mintcream', 'darksalmon', 
'darkseagreen', 'lightcoral','lavender' ];

colorsLarge = ['crimson','darkcyan', 'darkorange', 
'darkturquoise', 'coral', 'cornflowerblue', 'hotpink', 'mediumaquamarine']

colorsSmall = colorsLarge.concat(colorsLarge);
console.log(`Arrays: ${colorsSmall}`);


let largeColors = Math.floor(Math.random() * colorsLarge.length);

let randomColorsLarge = colorsLarge[largeColors];

let mediumColors = Math.floor(Math.random() * colorsMedium.length)
let randomColorsMedium = colorsMedium[mediumColors];

let smallColors = Math.floor(Math.random() * colorsSmall.length);
let randomColorsSmall = colorsSmall[smallColors];

// console.log(`colors for large bubbles: ${largeColors}`)
console.log(randomColorsLarge);
console.log(randomColorsMedium);
console.log(randomColorsSmall);

// function largeColors(){
//     return Math.floor(Math.random() * colorsLarge.length);
// }

function setColors() {
   let bigBubbles = document.querySelectorAll('.bubble-large');
   let mediumBubbles = document.querySelectorAll('.bubble-medium');
   let smallBubbles = document.querySelectorAll('.bubble-small');
   // console.log(smallBubble);
   bigBubbles.forEach(bubbleB => {
      bubbleB.style.backgroundColor = randomColorsLarge;
   })
   mediumBubbles.forEach( bubbleM => {
      bubbleM.style.backgroundColor = randomColorsMedium;
   })
   smallBubbles.forEach( bubbleS => {
      bubbleS.style.backgroundColor = randomColorsSmall;
   })
   // bigBubble.style.backgroundColor = randomColorsLarge;
   // mediumBubble.style.backgroundColor = randomColorsMedium;
   // smallBubble.style.backgroundColor = randomColorsSmall;
}

setColors();

let divs = document.querySelectorAll('div');

function coordinates() {
   let coordsY = ['10px', '15px', '20px', '25px', '30px', '35px'];
   let coordforY = Math.floor(Math.random() * coordsY.length);
   let randomcordY = coordsY[coordforY];
   console.log(randomcordY)
   let coordsX = ['-55px','-35px','-25px','-15px','-5px', '5px'];

   divs.forEach( div => {
      div.style.transform = translate()
   })

}

function setCoord() {
   divs.forEach( div => {
      div.addEventListener('mouseEnter', )
   })

}

