let opacities = [0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95, 1];
let lastOpacity;

const squares = document.querySelectorAll('.grid-square');
const arrayOfSquares = [...squares];
const animationGrid = document.querySelector('.animation-container');
const btn = document.querySelector('button');
console.log(animationGrid);



function randomSquareOpacity (array) {
    const idx = Math.floor(Math.random() * array.length);
    const opacity = array[idx];
    console.log(opacity);
    if(opacity === lastOpacity) {
        return randomSquareOpacity(array);
    }
    lastSquare = opacity;
    return opacity;
}

// randomSquareOpacity(opacities);

const squareOpacity = (array) => {
    for(let el of array) {
        el.style.backgroundColor = `rgba(0, 0, 0, ${randomSquareOpacity(opacities)})`
        setTimeout(function(){
            el.style.backgroundColor = 'transparent';
        }, 2000);
    }
}



animationGrid.addEventListener('mouseover', () => {
    squareOpacity(arrayOfSquares);
})


// animationGrid.addEventListener('click', squareOpacity(arrayOfSquares));

// squareOpacity(arrayOfSquares);


// let observer = new IntersectionObserver(function(entries) {
// 	// isIntersecting is true when element and viewport are overlapping
// 	// isIntersecting is false when element and viewport don't overlap
// 	if(entries[0].isIntersecting === false)
// 		console.log('Element has just become visible in screen');
//         squareOpacity(arrayOfSquares);
// }, { threshold: [0] });

// observer.observe(animationGrid);