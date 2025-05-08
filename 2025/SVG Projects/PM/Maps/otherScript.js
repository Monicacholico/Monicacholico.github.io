const slider = document.querySelector('.slider');
console.log(slider);
const sections = gsap.utils.toArray('.slider section');
const hearts = gsap.utils.toArray('.img-container img');

let tl = gsap.timeline({
    defaults: {
        ease: "none"
    },
    scrollTrigger: {
        trigger: slider,
        pin: true,
        scrub: 2,
        end: () => "+=" + slider.offsetWidth
    }

   
});

tl.to(slider, {
    xPercent: -66,
})