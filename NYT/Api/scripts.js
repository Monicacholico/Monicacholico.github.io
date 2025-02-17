const cardTemplate = document.getElementById('card');
const cardDisplayer = document.getElementById('cards');
const userSearch = document.getElementById('Searchbar__input');
let cardContent = [];

const API_N = 'UbsMbKtd9JKyBhGjMGGnrcMHjJFctMKw';

function executeApi() {

    const url =`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${API_N}`;
    const options = {
        method: "GET",
        header: {
            "accept": "application/json"
        }
    }

    return fetch(url, options).then(
        response => {
          return response.json();
        }).then(data => {
            console.log(data.results);
            cardContent = data.results;
            searching(cardContent);
        })
}

const searching = (cards) => {
    console.log(cards);
    const theCard = cards.map( card => {
        console.log(card);
        const cardEl = document.importNode(cardTemplate.content, true);
        console.log(cardEl);
        cardEl.querySelector('h2').textContent = card.title;
        cardEl.querySelector('p').textContent = card.description;
        cardEl.querySelector('small').textContent = card.contributor;
        cardDisplayer.append(cardEl);
    })
    return theCard;

}

userSearch.addEventListener('keyup', e => {
    const searchString = e.target.value;
    const filteredCards = cardContent.filter( cardEl => {
        console.log(cardEl);
        return (
            cardEl.title.toLowerCase().includes(searchString));
    });

    searching(filteredCards);
})



executeApi();