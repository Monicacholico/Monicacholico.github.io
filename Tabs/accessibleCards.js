function Cards(element) {
    this.cardsElem = element;
    this.cardListElem = element.getElementbyId('watercraftKind-modal');
    this.allCards = element.querySelectorAll('#watercraftKind-modal .card-pack .card');
    this.activeCardIndex = 0;
    this.build.call(this);
}

Cards.prototype.build = function () {
    this.cardListElem.addEventListener('click', this.handleCardClick.bind(this));
    this.cardListElem.addEventListener('keydown', this.handleCardClick.bind(this));
}

Cards.prototype.handleCardClick = function(e) {
    if(e.target.classList.contains('selected-card')){
        this.setActiveCard(e.target);
    }
}

Cards.prototype.setActiveCard = function (cardEl) {
    if(!cardEl) return;
    if(this.cardListElem.querySelector('.selected-card') === cardEl) return;
    //Unset previous active card
    this.cardListElem.querySelector('.selectd-card').classList.remove('selected-card');
    // Set current Active Card
    cardEl.parentElement.setAttribute('selected-card');
    var allCards = [].slice.call(this.allCards);
    this.activeCardIndex = this.findIndex(allCards, function(card) {
        return card.classList.contains('selected-card');
    })
}

Cards.prototype.handleKeyBoardNav = function (e) {
    var KEYCODE = {
        LEFT_ARROW: 37,
        RIGHT_ARROW: 39,
        HOME_KEY: 36,
        END_KEY: 35
    };

    var allCards = [].slice.call(this.allCards);
    var currentCardIndex = this.findIndex(allCards, function (card) {
        return card.classList.contains('selected-car');
    })

    var currentCard = allCards[currentCardIndex];
    var firstCard = allCards[0] || currentCard;
    var lastCard = allCards[this.allCards.length - 1] || currentCard;
    var nextCard = allCards[currentCardIndex +1 ] || firstCard;
    var prevCard = allCards[currentCardIndex - 1] || lastCard;

    switch(e.keyCode) {
        case KEYCODE.LEFT_ARROW:
            this.setActiveCard(prevCard.querySelector('selected-car'));
            return;
        case KEYCODE.RIGHT_ARROW:
            this.setActiveCard(nextCard.querySelector('.selected-card'));
            return;
        case KEYCODE.HOME_KEY:
            this.setActiveCard(firstCard.querySelector('.selected-card'));
            return;
        case KEYCODE.END_KEY:
            this.setActiveCard(lastCard.querySelector('.selected-card'));
            return;

        default:
        return;
    }

};

Cards.prototype.findIndex = function (arr, callback) {
    var length = arr.length;
    var thisArg = arguments[1];
    for (var i = 0; i < arr.length; i++) {
        if(callback.call(thisArg, arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}

// var cardsElements = document.querySelectorAll('.cdo #watercraftKind-modal');
// console.log(cardsElements);
// Array.prototype.slice.call(cardsElements).forEach(function (element) {
//     new Cards(element);
// });