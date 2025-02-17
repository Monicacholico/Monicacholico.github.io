const spans = document.querySelectorAll('.mammal-value');
const arraySpans = Array.prototype.slice.call(spans);

function lookingMammals() {
    const newList = document.createElement('section');
    newList.classList.add('only-mammals');
    const body = document.querySelector('body');
    body.appendChild(newList);
    arraySpans.filter(span => {
        if(span.textContent === 'Mammal') {
            newList.appendChild(span.parentNode.parentElement);
        }

    })
}
console.log(lookingMammals());

