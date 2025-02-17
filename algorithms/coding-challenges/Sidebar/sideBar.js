const showBtn = document.getElementById('show-menu');
const header = document.querySelector('header');
const closeBtn = document.querySelector('.close');

showBtn.addEventListener('click', function () {
    !header.classList.contains('header') ? 
    header.classList.add('header') : header.classList.remove('header');
    showBtn.textContent === 'Show Menu' ? showBtn.textContent = 'Hide Menu' : showBtn.textContent = 'Show Menu';
});

closeBtn.addEventListener('click', function () {
    header.classList.add('header');
    showBtn.textContent = 'Show Menu';
})
