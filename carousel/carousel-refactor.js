const slideContainer = document.querySelector('.slideshow-container');
const currentSlide = document.querySelector('.mySlides');

console.log(slideContainer);

// slideContainer.addEventListener('click', function() {
//     currentSlide.closest(slideContainer).classList.remove('active');
//     currentSlide.closest(slideContainer).classList.add('active');

// })

const slides = document.querySelectorAll('.mySlides');
const allSlides = Array.from(slides);
console.log(allSlides);

// allSlides.forEach(slide => {
//     if(slide.classList.contains('active') {
//         slide.classList.remove('active');
//     } else {

//         slide.classList.add('active');
//     }
    
//     )
// })


// allSlides.forEach( slide => {
    // slide.addEventListener('click', function() {
        // if(slide.classList.contains('active')) {
        //     slide.classList.remove('active');
        // } else {
        //     slide.classList.add('active');
        // }
    // })
// });

const prevBtn = document.querySelector('.prev');
console.log(prevBtn);

prevBtn.addEventListener('click', function() {
     allSlides.forEach( slide => {
        // slide.addEventListener('click', function() {
            if(slide.classList.contains('active')) {
                slide.classList.remove('active');
            } else {
                slide.classList.add('active');
            }
        // })
    });

})


function findIndex(arr, callback) {
    const length = arr.length;
    const thisArg = arguments[1];
    for(let i = 0; i < length; i++) {
        if(callback.call(thisArg, arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
};


const activeSlide = findIndex(allSlides, function(slide) {
    return slide.classList.contains('active');
})


// function setActiveSlide (slideElem) {
//     document.querySelector('.mySlides').classList.remove('active');
//     slideElem.classList.add('active');
// }

const nextBtn = document.querySelector('.next');
// nextBtn.addEventListener('click', setActiveSlide);

function activeSlider() {
    for(var i = 0; i < allSlides.length; i ++) {
        console.log(allSlides.length);
        allSlides.forEach( function() {
            console.log('im working');
            const current = document.querySelector('.mySlides');
            console.log(current);
            current.className = current.className.replace(' active', '');
            // const nextOne = current +=;
            nextBtn.className.add(' active');
            // this.className += ' active';
        })
    }
}

nextBtn.addEventListener('click', activeSlider);



