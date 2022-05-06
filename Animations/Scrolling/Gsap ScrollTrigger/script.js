
const time = document.getElementById('time');

let timeNow = new Date();

time.textContent = timeNow.toDateString();


gsap.set(".demo", {scale: 0.7});
gsap.timeline()
.from('.demo', {duration:1, opacity: 0})
.from('.title', {duration:1, opacity: 0, scale: 0, ease: "back"})
.from('.cakes img', {y: 160, stagger: 0.1, duration:0.8, ease: 'back'})
.from('#time', {xPercent: 100, duration:0.2})



