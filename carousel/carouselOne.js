var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slides = Array.from(document.getElementsByClassName("mySlides"));
  var dots = document.querySelectorAll(".dot");
const SPACEBAR_KEY_CODE = [0,32];
  const ENTER_KEY_CODE = 13;
  const DOWN_ARROW_KEY_CODE = 40;
  const UP_ARROW_KEY_CODE = 38;
  const ESCAPE_KEY_CODE = 27;

  const listSlidesIds = [];

  slides.forEach(function (slide) {
      listSlidesIds.push(slide.id)
  });

  dots.forEach(function (dot){
      dot.addEventListener('keyDown', function(e){
          switch (e.keyCode) {
              case ENTER_KEY_CODE:
                  showSlideDown();
                  return;
          }
      });
  });

//  document.addEventListener('keydown', function(event){
//      console.log(event.keyCode);
//  })

function slideVisibility(e) {
    let showSlideDown = SPACEBAR_KEY_CODE.includes(e.keyCode) ||
    e.keyCode === ENTER_KEY_CODE;
    if(e.keycode === ESCAPE_KEY_CODE) {
        showSlides(1);
    }
}

 