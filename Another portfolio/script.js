function onTabClick(e){
    let activeTabs = document.querySelectorAll('.active');

    activeTabs.forEach(function(tab){
        tab.className = tab.className.replace('active', '');
    });

    e.target.parentElement.className += ' active';
    document.getElementById(event.target.href.split("#")[1]).className += ' active';
}

const element = document.getElementById('nav-tab');

element.addEventListener('click', onTabClick, false);

// For Drag and Drop //

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);



for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}


function dragStart(){
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd(){
    this.className = 'fill';
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(){
    this.className = 'empty';
}

function dragDrop(){
    this.className = 'empty';
    this.append(fill);

}

///      input ///////////

var input = document.getElementById('my-input');

    input.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("my-button").click();
        }
    });


function myToDoList() {
    var li = document.createElement('li');
    var input = document.getElementById('my-input').value;
    var t = document.createTextNode(input);
    li.appendChild(t);
    if(input === ''){
        alert("You must write something")
    } else {
        document.getElementById("my-list").appendChild(li);
    }
    document.getElementById("my-input").value = '';

}


//////////        Large To Do List ////////////

var myNodelist = document.getElementsByTagName('li');
var i;
for(i = 0; i < myNodelist.length; i++) {
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}




