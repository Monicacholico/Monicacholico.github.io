const slideContainer = document.querySelector('.slideshow-container');

const slides = document.querySelectorAll('.mySlides');
const allSlides = Array.from(slides);

const prevBtn = document.querySelector('.prev');

const nextBtn = document.querySelector('.next');

let current = 0;

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
} );




startSlide();























