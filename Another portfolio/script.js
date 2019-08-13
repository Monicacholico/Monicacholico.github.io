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

//Create a close button and append it to each list item.

var myNodelist = document.getElementsByTagName('li');
var i;
for(i = 0; i < myNodelist.length; i++) {
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//Click on a close button to hide the current list item

var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++){
close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = 'none';
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.getElementById('myUl');
list.addEventListener('click', function(e){
    if(e.target.tagName === "li") {
        e.target.classList.toggle('checked');
    }

}, false);


// Create a new list item when clicking on the "Add" button

function newElement(){
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ""){
        alert("You must add something to your list")
    } else {
        document.getElementById('myUl').appendChild(li);
    }
    document.getElementById('myInput').value = "";

    var span = document.createElement('span');
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }
}

var input = document.getElementById('myInput');

input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("myButton").click();
    }
});