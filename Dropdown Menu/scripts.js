function toggleClass(elem, className) {
    console.log(elem);
    if (elem.className.indexOf(className) !== -1){
        elem.className = elem.className.replace(className, '');
    }
    else {
        elem.className = elem.className.replace(/\s+/g,'') + '' + className;
    }

    return elem;
}


function toggleDisplay(elem){
    const displayStyle = elem.style.display;

    if(displayStyle === 'none' || displayStyle === ''){
     elem.style.display = 'block';
    }
    else {
        elem.style.display = 'none';
    }
}

function toggleMenuDisplay(e) {
    const dropdown = e.currentTarget.parentNode;
    const menu = dropdown.querySelector('.menu');
    const icon = dropdown.querySelector('.fa-angle-right');

    toggleClass(menu, 'hide');
    toggleClass(icon, 'rotate-90');
}

function handleOptionSelected(e){
    toggleClass(e.target.parentNode, 'hide');

    const id = e.target.id;
    const newValue = e.target.textContent + '';
    const titleElem = document.querySelector('.dropdown .title');
    const icon = document.querySelector('.dropdown .title .fa')

    titleElem.textContent = newValue;
    // titleElem.appendChild(icon);

    document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));

    setTimeout(() => toggleClass(icon, 'rotate-90', 0));
}

function handleTitleChange(e){
    const result = document.getElementById('result');

    result.innerHTML = "The result is " + e.target.textContent;
}

const dropdownTitle = document.querySelector('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');


dropdownTitle.addEventListener('click', toggleMenuDisplay);
dropdownOptions.forEach(function(option){
option.addEventListener('click', handleOptionSelected)
});
document.querySelector('.dropdown .title').addEventListener('change', handleTitleChange);
