const cards = document.querySelectorAll('.card');
const cardContainer = document.querySelector('.container');

const observer = new IntersectionObserver( (entries) => {
    console.log(entries);
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
        // To stop observing once element is intersecting
        // if(entry.isIntersecting) observer.unobserve(entry.target);
    })  
}, {
    threshold: 1
    // root: 
    // rootMargin: "-100px",
})
cards.forEach(card => {
    observer.observe(card);
})


const lastCardObserver = new IntersectionObserver( (entries) => {
const lastCard = entries[0];
if(!lastCard.isIntersecting) return;
loadNewCards();
lastCardObserver.unobserve(lastCard.target);
lastCardObserver.observe(document.querySelector('.card:last-child'));
}, {
    rootMargin: "100px"
})

lastCardObserver.observe(document.querySelector(".card:last-child"));


function loadNewCards() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('div');
        card.textContent = "New Card";
        card.classList.add('card');
        observer.observe(card);
        cardContainer.append(card);
    }
}