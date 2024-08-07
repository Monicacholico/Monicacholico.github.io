console.log('r/place');

var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(300, 300, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(600, 600, 100, 100);

console.log(canvas);

// Line

// c.beginPath();
// c.moveTo(50, 400);
// c.lineTo(273, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#eeff00";
// c.lineWidth = 5;
// c.stroke();
//
// c.beginPath();
// c.moveTo(600, 600);
// c.lineTo(200, 200);
// c.strokeStyle = "#998877";
// c.lineWidth = 15;
// c.stroke();
//
// c.beginPath();
// c.moveTo(300, 600);
// c.lineTo(600, 600);
// c.strokeStyle = "#a659bc";
// c.lineWidth = 10;
// c.stroke();
//
//
// c.beginPath();
// c.moveTo(300, 300);
// c.lineTo(300, 600);
// c.lineWidth = 5;
// c.stroke();

// Arc

// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.lineWidth = 1;
// c.strokeStyle = "blue";
// c.stroke();

// for(var i = 0; i < 20; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.lineWidth = 1;
//     c.strokeStyle = "blue";
//     c.stroke();
// }
var mouse = {
    x: undefined,
    y: undefined
};

var maxRadius = 40;
// var minRadius = 2;

var colorArray = [
    '#d95560',
    '#f2949c',
    '#03738c',
    '#04c4d9',
    '#0396a6',
    "crimson",
    "hotpink",
    "papayawhip",
    "darkblue"
];

window.addEventListener("mousemove",
    function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
    });

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
    });

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        // c.strokeStyle = "#dd3e49";
        // c.stroke();
        c.fill();
    };

    this.update = function(){
        if ( this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if ( this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
        mouse.y - this.y < 50 && mouse.y - this.y > -50
        ){
            if(this.radius < maxRadius){
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius){
            this.radius -= 1;
        }
        this.draw();
    }
}

var circleArray = [];

function init(){

    circleArray = [];

    for (var i = 0; i < 800; i++ ){
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }

    console.log(circleArray);

}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
    // init();
}

init();
animate();


