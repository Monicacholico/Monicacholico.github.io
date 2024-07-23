// ////// CANVAS //////

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 450;


const image1 = new Image();
image1.src = '12.jpg';

image1.addEventListener('load', () => {
    ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
    const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(scannedImage);

    const scannedData = scannedImage.data;
    for(let i = 0; i < scannedData.length; i +=4 ) {
        const total = scannedData[i] + scannedData[i+1] + scannedData[i+2];
        const averageColorValue = total/3;
        scannedData[i] = averageColorValue;
        scannedData[i + 1] = averageColorValue;
        scannedData[i + 2] = averageColorValue;
    }
    scannedImage.data = scannedData;
    ctx.putImageData(scannedImage, 0, 0);

})


///// CANVAS ONE //////


const myImage = new Image();
myImage.src = 'background.png';



myImage.addEventListener('load', () => {
    const canvas1 = document.getElementById('canvas1');
    const ctx1 = canvas.getContext('2d');
    canvas1.width = 500;
    canvas1.height = 700;
    
    ctx1.drawImage(myImage, 0, 0, canvas1.width, canvas.height);

    let particlesArray = [];
    const numberOfParticles = 5000;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 0.5;
            this.size = Math.random() * 1.5 + 1;
        }

        update() {
            this.y += this.velocity;
            if(this.y >= canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            ctx1.beginPath();
            ctx1.fillstyle = 'white';
            ctx1.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx1.fill();
        }
    }

    function init() {
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle);
        }
    }
    init();

    function animate() {
        ctx1.globallAlpha = 0.05;
        ctx1.fillStyle = 'rgb(0, 0, 0)';
        ctx1.fillRect(0, 0, canvas.width, canvas.height );
        for(let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();

})