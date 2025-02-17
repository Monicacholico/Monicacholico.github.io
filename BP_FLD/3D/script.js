const playPointeShoe = gsap.timeline({paused: true});
const pointe = document.querySelector('.pointe');



// playPointeShoe.to(pointe, {
//     duration: 2,
//     backgroundPosition: '-6000px 0px',
//     ease: 'SteppedEase(-10)'
//     // ease: 'SteppedEase(10)'

// })

playPointeShoe.play();


playPointeShoe.to(pointe, {
    duration: 1,
    backgroundPosition: '-9000px 0px',
    ease: 'SteppedEase(15)'
})

