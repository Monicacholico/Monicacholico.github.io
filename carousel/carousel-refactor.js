const slideContainer = document.querySelector('.slideshow-container');

console.log(slideContainer);



const slides = document.querySelectorAll('.mySlides');
const allSlides = Array.from(slides);
console.log(allSlides);


function setActiveSlide () {
    let current = document.querySelector('.mySlides.active');
    console.log(current);
    allSlides.forEach( slide => {
        if(slide === current) {
            slide.classList.remove('active')
        }
   let nextCurrent = current.nextElementSibling.classList.add('active');
        nextCurrent = current;
    });
}






const prevBtn = document.querySelector('.prev');
console.log(prevBtn);

const nextBtn = document.querySelector('.next');
nextBtn.addEventListener('click', setActiveSlide);






