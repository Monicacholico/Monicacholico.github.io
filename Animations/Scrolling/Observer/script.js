const terms = document.querySelector('.terms-and-conditions');
const paragraph = document.querySelector('.terms-and-conditions p');
// console.log(paragraph);
const watch = document.querySelector('.watch');
const btn = document.querySelector('.accept');


// terms.addEventListener('scroll', e => {
//     console.log(e.currentTarget.scrollTop);
//     console.log(e.currentTarget.scrollHeight);
// });

function obCallback(payload){
    console.log({payload});
    console.log(payload[0].intersectionRatio);
    console.log(IntersectionObserverEntry);
    if(payload[0].intersectionRatio === 1) {
        btn.disabled = false;
        observer.unobserve(terms.lastElementChild);
    }
    //  else {
    // }
//    const targetEl = payload[0];
//     targetEl.intersectionRatio === 1 ? btn.disabled = false : btn.disabled = true;
}

const observer = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1
});

observer.observe(terms.lastElementChild);
