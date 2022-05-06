
const time = document.getElementById('time');
let element;

let timeNow = new Date();

time.textContent = timeNow.toDateString();


gsap.set(".demo", {scale: 0.7, y: 200});
let firstScene = gsap.timeline()
.from('.demo', { duration:1, opacity: 0})
.from('.title', {duration:1, opacity: 0, scale: 0, ease: "circ"})
.from('.cakes img', {y: 160, stagger: 0.1, duration:0.4, ease: 'back'}, "+=1")
.from('#time', {xPercent: 100, duration:0.2});

firstScene.to(".demo2", {duration: 1, opacity: 0, scale: 0.5, ease: "slow",x:-300, y:500}, "<");



