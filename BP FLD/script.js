const allSpots = [...document.querySelectorAll('.spot')];
const mainContainer = document.querySelector('.zoom-container');

allSpots.forEach( (spot, id) => {
    spot.setAttribute('data-index', id);
    mainContainer.setAttribute('index', allSpots[0].dataset.index);
    spot.addEventListener('click', () => {
        
    })
});


