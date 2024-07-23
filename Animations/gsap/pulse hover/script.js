const cta = document.querySelector('.button');
const stopBtn = document.querySelector('.button-stop');
const birds = document.querySelectorAll('.img-container img');
const allBirds = Array.from(birds);
const container = document.querySelector('.img-container');
const birdsLeft = document.querySelectorAll('.img-container img.left');
const birdsRight = document.querySelectorAll('.img-container img.right');

const allBirdsLeft = Array.from(birdsLeft);
const allBirdsRight = Array.from(birdsRight);
let leftBirds;
let rightBirds;


const randomHeightsTop = [container.clientHeight, container.clientHeight / 2, container.clientHeight - Math.random() ];
const randomHeightsBottom = [-container.clientHeight, -container.clientHeight / 2, -container.clientHeight - Math.random() ];
const randomWidthsRight = [-container.clientWidth, -container.clientWidth / 2, -container.clientWidth - Math.random() ];
const randomWidthsLeft = [container.clientWidth * 2, container.clientWidth * 3 ];


const randomNum = [1,2,3,4,5,6,7,8,9];
const idx = Math.floor(Math.random() * randomNum.length);

const scaleNumbers = [0.2, 0.5, 0.8, 0.3];
const scalePositions = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600]
const scaleRandom = Math.random() * (2.5 - 1.5);


function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort( () => 0.5 - Math.random());
    return shuffled.slice(0, idx);
}

function randomSizes() {
    allBirds.forEach( bird => {
        gsap.to(bird, {scale: getMultipleRandom(scaleNumbers, idx), y: getMultipleRandom(scalePositions, idx), x:getMultipleRandom(scalePositions, idx) });
    })
    // allBirdsLeft.forEach( birdLeft => {
    //     gsap.to(birdLeft, {scale: getMultipleRandom(scaleNumbers, idx), y: getMultipleRandom(randomWidthsLeft, idx), x:getMultipleRandom(randomWidthsLeft, idx) })
    // })
}
randomSizes();

// Split left and right birds

leftBirds = allBirds.map(bird => bird.classList.contains('left'));
rightBirds = allBirds.map(bird => bird.classList.contains('right'));

        const tl = gsap.timeline({paused: true});
        tl.to(allBirdsRight, {
            x: getMultipleRandom(randomWidthsRight, idx), 
            ease: `steps(${idx})`,  
            duration: 2, 
            repeat: -1, 
            // stagger: 0.5 
        })
        tl.to(allBirdsLeft, {
            x: getMultipleRandom(randomWidthsLeft, idx), 
            ease: `steps(${idx})`,  
            duration: 2, 
            repeat: -1, 
            // stagger: 0.5 
        })


cta.addEventListener('click', () => {
    tl.play();
});


window.addEventListener('click', e => {
    if(!e.target.matches('.button')) {
        console.log(e.target);
       tl.pause();

    }
});


/* PULSE BUTTON ON HOVER */

const scaleTween = gsap.to(cta, {scale: 1, paused: true, repeat: 15, yoyo:true});

stopBtn.addEventListener('click', () => {
    tl.pause();
})

cta.addEventListener('mouseenter', () => {
    scaleTween.restart();
})

cta.addEventListener('mouseleave', ( ) => {
    scaleTween.pause();
    gsap.to(cta, {scale:0.8, });
})






