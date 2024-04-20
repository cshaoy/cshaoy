let canvasDom = document.getElementById("canvas");
console.log(canvasDom)
let ctx = canvasDom.getContext("2d");


// ctx.fillStyle = "#fff";
// ctx.fillRect(120, 120, 150, 100);
// ctx.fillStyle = "#000000";
// ctx.rect(119, 119, 151, 101);
// ctx.stroke();
// heart(100, 100); heart(300, 100)
// heart(100, 250); heart(300, 250)
// heart(100, 400); heart(300, 400)
// heart(100, 550); heart(300, 550)
function heart(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y - 60, x - 90, y - 60, x - 90, y);
    ctx.bezierCurveTo(x - 90, y + 50, x, y + 90, x, y + 90);
    ctx.bezierCurveTo(x - 10, y + 90, x + 90, y + 60, x + 90, y);
    ctx.bezierCurveTo(x + 90, y - 60, x, y - 60, x, y);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}
card(0,0,"A","#ff0")
card(10,0,"2","#ff1")
card(20,0,"3","#ff2")
card(30,0,"4","#ff3")
card(40,0,"5","#ff4")
card(50,0,"6","#ff5")
card(60,0,"7","#f66")
function card(x = 0, y = 0, text = "A",color="#fff") {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 240, 366);
    ctx.fillStyle = "#000000";
    ctx.rect(x, y, 240, 366);
    ctx.font = "60px Georgia";
    ctx.fillText(text, x + (240 - ctx.measureText(text).width) / 2, y + (366 - 30) / 2, 60);
    ctx.stroke();
}