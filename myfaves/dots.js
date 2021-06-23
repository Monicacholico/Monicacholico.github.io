const dots = document.querySelectorAll('.dot');
// const allDots = Array.prototype.slice.call(dots);
// const allDots = Array.from(dots);
const allDots = [...dots];
console.log(allDots);


allDots.forEach( dot => {
    dot.addEventListener('mousemove', (e) => {
        console.log(e.target);
        dot.style.backgroundColor = 'red';
        dot.style.transform = 'translateY(1050%)';
        dot.style.transform = 'translateX(-1050%)';
    })
})