

const mainDiv = document.getElementById('myDiv');
const btns = mainDiv.querySelectorAll('.btn');
const footer = document.querySelector('.myfooter');

const KEYCODE = {
    SPACE_BAR_KEY_CODE = [0, 32],
    ENTER_KEY_CODE = 13,
    DOWN_ARROW = 40,
    UP_ARROW_KEY_CODE = 38,
    ESCAPE_KEY_CODE = 27
}


function activeOn() {
        btns.forEach( btn => {
            btn.addEventListener('click', function(){
                var current = document.getElementsByClassName('active');
                current[0].className = current[0].className.replace('active', ' ');
                current.className += ' active';
                console.log(this.className);
            })
        })
footer.classList.remove('display-footer');
}



function activeDisplayer() {
    btns.forEach( btn => {
        btn.addEventListener('click', activeOn);
        btn.addEventListener('keydown', activeOn);
    })
}

activeDisplayer();





