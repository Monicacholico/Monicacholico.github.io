// spriteAnimations = [
//     "idle" = {
//         loc: [
//             {x: 0, y: 0},
//             {x: 575, y: 0},
//             {x: 1150, y: 0},
//             {x: 1725, y: 0},
//             {x: 2300, y: 0},
//             {x: 2875, y: 0},
//             {x: 3450, y: 0},
//         ]
//     },
//     "jump" = {
//         loc: []
//     },
//     "run" = {
//         loc: []
//     }
// ]

let playerState = "fall";
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', (e) => {
    playerState = e.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'assets/shadow_dog.png';
// let x = 0;
const spriteWidth = 575;
const spriteHeight = 523;

let gameFrame = 0;
const staggerFrame = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames : 7,
    },
    {
        name: 'jump',
        frames : 7,
    },
    {
        name: 'fall',
        frames : 9,
    },
    {
        name: 'run',
        frames : 9,
    },
    {
        name: 'dizzy',
        frames : 11,
    },
    {
        name: 'sit',
        frames : 5,
    },
    {
        name: 'roll',
        frames : 7,
    },
    {
        name: 'bite',
        frames : 7,
    },
    {
        name: 'ko',
        frames : 12,
    },
    {
        name: 'getHit',
        frames : 4,
    },
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({ x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
// console.log(spriteAnimations); 

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrame) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    // ctx.fillRect(50, 50, 100, 100);
    // below meaning of argumentsctx.drawImage(image, sx, sy, sw, sh, dx, dy, dh);
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    // if(gameFrame % staggerFrame == 0) {
    //     if(frameX < 4) frameX++;
    //     else frameX = 0;
    // }
    // x++;
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();