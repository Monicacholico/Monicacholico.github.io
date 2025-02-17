const arrText = ['START NOW', 'SEE MORE', 'BEGINS HERE', 'SHOP NOW', 'SHOW NOW'];
let currentIdx = 0;

// for(let i = 0; i < arrText.length; i++) {
//     console.log(arrText[i]);
// }

const rightBtn = document.querySelector('.right-btn');
const leftBtn = document.querySelector('.left-btn');

let cta = document.querySelector('.cta');


let idx = 0;
rightBtn.addEventListener('click', () => {
    idx++;
    console.log(idx);
    if(idx == arrText.length) {
        idx = 0;
    }
    console.log(arrText[idx]);
    cta.textContent = arrText[idx];


})

// function makingText() {
//     while(currentIdx < arrText.length) {
//         // let idx = 0;
//         currentIdx++;
//         console.log(currentIdx);
//         arrText.forEach((text, idx) => {
//             console.log(text);
//             if(idx === currentIdx) {
//                 let currentText = text;
//                 console.log(currentText);
//                 cta.innerHTML = currentText;
//             }
//         })
//     }
// }