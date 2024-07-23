const slideContainer = document.querySelector('.slideshow-container');

const slides = document.querySelectorAll('.mySlides');
const allSlides = Array.from(slides);



const prevBtn = document.querySelector('.prev');

const nextBtn = document.querySelector('.next');

let current = 0;



const allDots = Array.from(document.querySelectorAll('.dot'));
allDots[0].classList.add('active');

let currentDot;

function currentSlide(num) {
        allSlides.forEach((slide, id) => {
                if(num === id + 1) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
        })
        allDots.forEach( (dot, idx) => {
            if(num === idx + 1) {
                dot.classList.add('active')
            } else {
                dot.classList.remove('active')
            }
        })

}

function activeDot() {
    allDots.forEach((dot, idx) => {
        if(current === idx) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    })
}
// clear all images
function reset() {
    allSlides.forEach( slide => {
        slide.classList.remove('active');
    })
}

// Init slider
function startSlide() {
    reset();
    allSlides[0].classList.add('active');
}

// Show prev
function slideLeft() {
    reset();
    allSlides[current - 1].classList.add('active');
    current--;
}

prevBtn.addEventListener('click', function() {
    if(current === 0) {
        current = allSlides.length;
    }
    slideLeft();
    activeDot();
} );





// Show next
function slideRight() {
    reset();
    allSlides[current + 1].classList.add('active');
    current++;
}

nextBtn.addEventListener('click', function() {
    if(current === allSlides.length -1) {
        current = -1;
    }
    slideRight();
    activeDot();
} );




startSlide();























