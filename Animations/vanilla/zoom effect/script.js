// const {body} = document;

let zoomActivated = false;
let goBack = document.querySelector('.return')
goBack.addEventListener('click', () => {
    zoomActivated = !zoomActivated;
    image.style.transform = 'none';
});

const image = document.querySelector('.content-wrapper');
console.log(image.clientWidth);
console.log(image.clientHeight);
// window.addEventListener('keydown', e => {
//     if(e.key === 'z') {
//         zoomActivated = !zoomActivated;
//     }
// });

// window.addEventListener('mousemove', e => {
//     const { clientX: x, clientY: y} = e;
//     if(zoomActivated) {
//         body.style.transform = 'scale(2)';
//         body.style.transformOrigin = `${x}px ${y}px`;
//     } else {
//         body.style.transform = 'none';
//     }

// })

const point1 = document.getElementById('point-1');
console.log(point1);

point1.addEventListener('click', () => {
    // image.clientHeight
    zoomActivated = true;
    console.log('youre clicking here');
    if(zoomActivated) {
        image.style.transform = 'scale(1.5)';
        image.style.transformOrigin = `${image.clientWidth}px - 250px ${image.clientHeight}px`;
    } else {
        image.style.transform = 'none';
    }
})