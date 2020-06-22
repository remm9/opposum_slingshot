

var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');

ctx.fillStyle = "lightgray";
const p0 = { x: 10, y: 10 }
const p1 = { x: 100, y: 20 }
const p2 = { x: 110, y: 110 }

ctx.fillStyle = "lightgray";

ctx.beginPath();
ctx.moveTo(p0.x, p0.y);
ctx.arcTo(p1.x, p1.y, p2.x, p2.y, 100);
ctx.lineTo(p2.x, p2.y);
ctx.lineTo(10, 110)
ctx.lineTo(10, 10)
ctx.fill();
ctx.stroke();


// .quadrant {
//     width: 100px;
//     height: 100px;
//     border - radius: 0 100 % 0 0;
//     background - color: #f00;
// }

