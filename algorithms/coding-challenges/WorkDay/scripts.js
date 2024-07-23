const slides = document.querySelectorAll('.Slides__block');
const allSlides = [...slides];

let i = 0;
const slideShow = () => {
    allSlides[i].style.display = 'none';
    if(i < allSlides.length - 1) {
        i++;
        allSlides[i].style.display = 'block';

    } else {
        allSlides[0].style.display = 'block';
        i = 0;
    }
}
setInterval(slideShow, 3000);




