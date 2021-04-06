

// two users : one cross and one circle
//

class TicTacToe {
    constructor(cross, circle, turn) {
        // this.square
        const squares = document.querySelectorAll('.column');
        this.squares = squares;
        this.cross = cross;
        this.circle = circle;
        this.empty = false;
        this.turn = false;
        this.isEmpty();
        this.drawCircle();
        this.drawX();
    }

    drawCircle = () => {
        this.turn = true;
        this.squares.forEach( square => {
            square.addEventListener('click', () => {
                // if(this.turn) {
                    square.textContent = 0
                // }
            })
        })
    }

    drawX = () => {
        this.turn = true;
        this.squares.forEach( square => {
            square.addEventListener('click', () => {
                if(this.turn) {
                    square.textContent = 'X';
                } else {
                    alert('Is not your turn')
                }
            } )
        })
    }

    isEmpty = () => {
    this.squares.forEach(square => {
        square.textContent === '' ? true : false;
        //    if(square.textContent === '') {
        //        this.draw;

        //    } else {
        //        console.log('this is not empty');
        //    }
       });

    }

    startGame() {

    }
}

const myGame = new TicTacToe();