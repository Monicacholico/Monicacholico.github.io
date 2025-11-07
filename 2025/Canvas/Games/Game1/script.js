const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//load images
const images = {};
images.player = new Image();
images.player.src = "cuphead.png";

const characterActions = ["up", "right", "jump", "down-right", "down", "up-right"];
const numberofCharacters = 30;
const characters = [];

class Character {
    constructor() {
        this.width = 103.0625;
        this.height = 113.125;
        this.frameX = 3;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 1.5 + 3.5;
        this.action =
            characterActions[
                Math.floor(Math.random() * characterActions.length)
            ];
        if (this.action === "up") {
            this.frameY = 0;
            this.minFrame = 4;
            this.maxFrame = 15;
            // this.frameY = 3;
        } else if (this.action === "right") {
            this.frameY = 3;
            this.minFrame = 3;
            this.maxFrame = 13;
        } else if (this.action === "jump") {
            this.frameY = 7;
            this.minFrame = 0;
            this.maxFrame = 9;
        } else if (this.action === "down-right") {
            this.frameY = 4;
            this.minFrame = 4;
            this.maxFrame = 15;
        } else if (this.action === 'down') {
            this.minFrame = 0;
            this.frameY = 6;
            this.maxFrame = 12;
        } else if (this.action === 'up-right') {
            this.frameY = 1;
            this.minFrame = 4;
            this.maxFrame = 14;
        }
        // if(this.action === 'right') this.frameY = 3;
        // else if(this.action === 'up') this.frameY = 0;
    }
    draw() {
        drawSprite(
            images.player,
            this.width * this.frameX,
            this.height * this.frameY,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
        // if(this.frameX < 13 ) this.frameX++;
        // else this.frameX = 3;
        if (this.frameX < this.maxFrame) this.frameX++;
        else this.frameX = this.minFrame;
    }
    update() {
        if (this.action === "right") {
            if (this.x > canvas.width + this.width) {
                this.x = 0 - this.width;
                this.y = Math.random() * (canvas.height - this.height);
            } else {
                this.x += this.speed;
            }
        } else if (this.action === "up") {
            if (this.y < 0 - this.height * 5) {
                this.y = canvas.height + this.height;
                this.x = Math.random() * canvas.width;
            } else {
                this.y -= this.speed;
            }
        } else if (this.action === "jump") {
            this.frameY = 7;
        } else if (this.action === "down-right") {
            if (this.y > canvas.height + this.height && this.x > canvas.width + this.width) {
                 this.y = 0 - this.height
                 this.x = Math.random() * canvas.width;
                 this.speed = (Math.random() * 2) + 3;
             } else {
                 this.y += this.speed; 
                 this.x += this.speed; 
             }
        } else if (this.action === "down") {
            if(this.y > canvas.height + this.height){
                this.y = 0 - this.height;
                this.x = Math.random() * canvas.width;
                this.speed = (Math.random() * 2) + 3;
            } else {
                this.y += this.speed;
            }
        } else if (this.action === "up-right") { 
              if (this.y < 0 - this.height && this.x > canvas.width + this.width) {
                 this.y = canvas.height + this.height
                 this.x = Math.random() * canvas.width;
                 this.speed = (Math.random() * 2) + 3;
             } else {
                 this.y -= this.speed; 
                 this.x += this.speed; 
             }
        }   
        // else if(this.action === 'up') {
        //     if(this.y < (0 - this.height)){
        //         this.y = canvas.height + this.height;
        //         this.x = Math.random() * canvas.width
        //     } else {
        //         this.y -= this.speed;
        //     }

        // }
    }
}

for (let i = 0; i < numberofCharacters; i++) {
    characters.push(new Character());
}

const drawSprite = (img, sx, sy, sw, sh, dx, dy, dw, dh) => {
    // ctx.drawImage(images, dx, dy);
    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
};

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < characters.length; i++) {
        characters[i].draw();
        characters[i].update();
    }
};

window.onload = setInterval(animate, 1000 / 30);
window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});
