

const mainDiv = document.getElementById('myDiv');
const btns = mainDiv.querySelectorAll('.btn');
const footer = document.querySelector('.myfooter');
// console.log(footer);


// function activeOn() {
//    for (var i = 0; i < btns.length; i++){
//     btns[i].addEventListener('click', function (){
//         var current = document.getElementsByClassName('active');
//         // var target = event.target;
//         // console.log(target);
//         current[0].className = current[0].className.replace('active', ' ');
//         this.className += ' active';
//         // console.log(this.className);
//     })
// }
// footer.classList.remove('display-footer');
// }
function activeOn() {
//    for (var i = 0; i < btns.length; i++){
//     btns[i].addEventListener('click', function (){
//         if(btns[i].classList.contains('active')) {
//             btns[i].classList.remove('active');
//         }
//         btns[i].classList.add('active');
//     })
// }
    if(footer.classList.contains('notdisplay-footer')){
        footer.classList.remove('notdisplay-footer');
    } else {
        footer.classList.add('notdisplay-footer')
    }
// footer.classList.remove('notdisplay-footer');
}

function activeDisplayer() {
    btns.forEach( btn => {
        btn.addEventListener('click', activeOn);
    })
}

activeDisplayer();


const list = document.querySelector('.list');
const listWrapper = document.querySelector('.list-wrapper');
const listCards = document.querySelectorAll('.card');
// console.log(listCards);
const listCardIds = [];

listCards.forEach(card => listCardIds.push(card.id));
// const activeElementId = document.activeElement.id;
// console.log(activeElementId)
listCards.forEach(card => {
    card.addEventListener('click', function(){
        let target = event.target;
        // console.log(target.nextElementSibling);
        target.nextElementSibling.classList.toggle('active-card');
    })
})


function setActiveItem(e) {
    const activeElementId = document.activeElement.id;
}