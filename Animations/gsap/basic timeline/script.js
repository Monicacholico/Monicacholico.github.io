 const counter = document.querySelector('.counter');
 
let start = 0; 
const time = setInterval(initCounter, 1)
function initCounter() {
    counter.textContent = start;
    start++;
    if(start === 60) {
        clearInterval(time);
    }
}






gsap.set('#demo', {scale: 0.7});

gsap.timeline()
    .from("#demo", { duration: 1, opacity: 0.25})
    .from("#title", {opacity: 0, scale: 0, ease: "back"})
    .from(".cake", {y:160, stagger: 0.1, duration: 0.8, ease: "back"})
    .from(".counter", {xPercent:100})