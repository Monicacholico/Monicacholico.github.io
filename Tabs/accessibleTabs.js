

const mainDiv = document.getElementById('myDiv');
const btns = mainDiv.querySelectorAll('.btn');
const footer = document.querySelector('.myfooter');
console.log(footer);


function activeOn() {
   for (var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function (){
        var current = document.getElementsByClassName('active');
        var target = event.target;
        console.log(target);
        current[0].className = current[0].className.replace('active', ' ');
        
        this.className += ' active';
        console.log(this.className);
    })
}
footer.classList.remove('display-footer');
}

function activeDisplayer() {
    btns.forEach( btn => {
        btn.addEventListener('click', activeOn);
    })
}

activeDisplayer();


