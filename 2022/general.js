/// Pointe Shoes Spinner ////

const imgWrap = document.querySelector('.pointe-shoes-wrapper');
const img = document.querySelector('.pointe-shoes');


document.addEventListener('scroll', () => {
    console.log('im working');
    // imgWrap.classList.add('spinner');
    imgWrap.style.transform = "rotate("+window.pageYOffset+"deg)"
    // console.log(window.pageYOffset);
    // imgWrap.style.border = '1px solid gray';
    // img.style.transform = 'rotate(90deg)';
})