window.onload = function() {

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.strokeStyle = 'crimson';
ctx.lineCap = 'butt';
ctx.lineWidth = 10;
ctx.moveTo(10, 50);
ctx.lineTo(300, 50);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.moveTo(100, 75);
ctx.lineTo(300, 75);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.lineCap = 'square';
ctx.lineWidth = 10;
ctx.moveTo(100, 100);
ctx.lineTo(300, 100);
ctx.stroke();

}