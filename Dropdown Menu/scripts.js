function toggleClass(elem,className){
    if (elem.className.indexOf(className) !== -1){
        elem.className = elem.className.replace(className,'');
    }
    else{
        elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
    }

    return elem;
}

function toggleDisplay(elem){
    const curDisplayStyle = elem.style.display;

    if (curDisplayStyle === 'none' || curDisplayStyle === ''){
        elem.style.display = 'block';
    }
    else{
        elem.style.display = 'none';
    }

}

function toggleMenuDisplay(e){
    const dropdown = e.currentTarget.parentNode;
    const menu = dropdown.querySelector('.menu');
    const icon = dropdown.querySelector('.fa-angle-right');

    toggleClass(menu,'hide');
    toggleClass(icon,'rotate-90');
}
//
function handleOptionSelected(e){
    toggleClass(e.target.parentNode, 'hide');

    const id = e.target.id;
    const newValue = e.target.textContent + ' ';
    const titleElem = document.querySelector('.dropdown .title');
    const icon = document.querySelector('.dropdown .title .fa');


    titleElem.textContent = newValue;
    titleElem.appendChild(icon);

    //trigger custom event
    document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
    //setTimeout is used so transition is properly shown
    setTimeout(() => toggleClass(icon,'rotate-90',0));
}
//
function handleTitleChange(e){
    const result = document.getElementById('result');

    result.innerText = 'The result is: ' + e.target.textContent;
}
//
//get elements
const dropdownTitle = document.querySelector('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');

//bind listeners to these elements
dropdownTitle.addEventListener('click', toggleMenuDisplay);

dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));

document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);
//
// /////////////// Second Dropdown ///////////////////////
//
// function myFunction(){
//     document.getElementById("myDropdown").classList.toggle('show');
// }
//
// window.onclick = function(e){
//     // var arrow = document.querySelector('span');
//     if(!e.target.matches('.dropbtn')){
//         var dropdowns = document.getElementsByClassName('dropdown-content');
//         dropdowns.forEach(function(dropdown){
//             if(dropdown.classList.contains('show')){
//                 dropdown.classList.remove('show')
//             }
//         })
//     }
//     if(arrow.classList.contains('down')){
//         console.log(arrow);
//         arrow.classList.remove('down');
//         arrow.classList.add('up')
//     }
// };
//
//
// var dropDownMenu = Array.from(document.getElementsByClassName('theOptions'));
//
//
//
// function toggleDisplayOptions(e){
//     const dropit = e.currentTarget.parentNode;
//
//         dropDownMenu.forEach(function(el){
//         el.remove.classList('hide');
//         el.add.classList('unhide');
//         })
// toggleDisplayOptions(e);
// }
// const clickMeButton = document.getElementById('butt3');
// clickMeButton.addEventListener('click', toggleDisplayOptions);
//
// function toggleDisplayOptions(event){
//     const thisElement = event.target;
//     if(!thisElement.matches('.butt3')){
//         console.log('this is working');
//         console.log(thisElement);
//     }
//     const dropit = e.currentTarget.parentNode;
//     const menu = dropdown.querySelector('.drop3');
//     toggleClass(menu,'hide');
//     console.log(dropit);
//     console.log(event.target.childNodes);
// }


function changeColor(){

// document.querySelector(".drop3").setAttribute("class", "changeColor");
document.querySelector(".drop3").classList.toggle("changeColor");
}
// var btnDrop  = document.querySelector('.drop3');
// btnDrop.addEventListener('click',changeColor );

document.getElementById('myBtn').addEventListener('click', function(){
    document.getElementById('demo').innerHTML = "Hello World";
});


// form
// $(document).ready(function(){

// function myDonation() {
//     $('.donate-btn').click(function(event){
//        var donation = prompt('How much do you want to donate?');
//        var donator = $('#name').val() +  ' ' + $('#lastName').val();
//        console.log(donator);
//        if(donation !== '') {
//            event.preventDefault();
//            msg = $('.results').html();
//            var name = $('#donator-name').html();
//            msg = msg + donation;
//            name = name + donator;
//         //    event.preventDefault();
//         $('#donator-name').html(name);
//         $('.results').html(msg);
//            console.log(msg);
//            console.log(name);
//        } else {
//            alert('You have to enter a value');
//        }
//     }

//   )
// }
// myDonation();
// });
