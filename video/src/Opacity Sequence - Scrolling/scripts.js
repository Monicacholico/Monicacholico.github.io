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
    if(opacity === lastOpacity) {
        return randomSquareOpacity(array);
    }
    lastOpacity = opacity;
    return opacity;
}



btn.addEventListener('click', function() {
    squareOpacity(arrayOfSquares);
});

// hacer la function de los squares ahora con los rows y para 
// los squares solo


let rowNumber = 0;
let currentRow = document.getElementById(`row-${rowNumber}`);
function animateRow() {

}



// randomSquareOpacity(opacities);

const squareOpacity = array => {
    for(let el of array) {
        // setInterval( () => {
            el.style.backgroundColor = `rgba(0, 0, 0, ${randomSquareOpacity(opacities)})`
        // }, 2000);
    }
}





// animationGrid.addEventListener('mouseover', () => {
    // squareOpacity(arrayOfSquares);
// })

let boxElement = document.querySelector('.grid-animation');


// squareOpacity(arrayOfSquares);

const map = (x, a, b, c, d) => {
    // returns value in range [c, d]
    return ((x - a) * (d - c)) / (b - a) + c;
  }

const startPosition = 0;
const endPosition = document.documentElement.offsetHeight - window.innerHeight;
console.log({endPosition});

let docScroll = window.pageYOffset || document.documentElement.scrollTop;
console.log({docScroll});

window.addEventListener("scroll", () => {
    docScroll = window.pageYOffset || document.documentElement.scrollTop;
  });

//   console.log(squares.length);
//   let rows = squares.length / 10;
  const animate2 = () => {
    //   for(let square of squares) {
        squareOpacity(arrayOfSquares);
    //   }
    const progressVal = map(docScroll, startPosition, endPosition, 0, 1);
    // const duration = video.duration || 0;
    // video.currentTime = progressVal * duration;
    requestAnimationFrame(animate);
  }

//   animate();



////////// WITH OBSERVER //////////


// function buildThresholdList() {
//     let thresholds = [];
//     let numSteps = 20;
//     for (let i=1.0; i<=numSteps; i++) {
//       let ratio = i/numSteps;
//       thresholds.push(ratio);
//     }
  
//     thresholds.push(0);
//     console.log(thresholds);
//     return thresholds;
//   }
  
//   function createObserver() {
//     let observer;
  
//     let options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: buildThresholdList()
//     };
  
//     observer = new IntersectionObserver(handleIntersect, options);
//     observer.observe(boxElement);
//   }

//   function handleIntersect(entries, observer) {
//   entries.forEach((entry) => {
//       prevRatio = entry.intersectionRatio;
//     if (entry.intersectionRatio > prevRatio) {
//       entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
//     } else {
//       entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
//     }
//     prevRatio = entry.intersectionRatio;
//   });
// }
  
  
//   createObserver ();