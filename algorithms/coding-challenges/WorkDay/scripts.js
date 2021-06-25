const slides = document.querySelectorAll('.Slides__block');
const allSlides = [...slides];

let i = 0;
const slideShow = () => {
    // allSlides[i].style.display = 'block';
    allSlides[i].style.display = 'none';
    if(i < allSlides.length - 1) {
        console.log(allSlides[i]);
        // allSlides[i].style.display = 'block';
        // console.log(allSlides[i])
        i++;
        allSlides[i].style.display = 'block';
    } else {
        i = 0;
    }
}
setInterval(slideShow, 2000);




