let canvas=document.getElementById('canvas');
console.log(canvas)
let rect=canvas.getClientRects();
console.log(rect)
const ctx=canvas.getContext('2d');
const size={
    width:rect[0].width,
    height:rect[0].height
}
canvas.width=size.width;
canvas.height=size.height;
const box={
    length:0
}
console.log(size)
info()
function info(){
    let width=Math.floor(size.width/4);
    let height=Math.floor(size.height/4);
    let length=Math.min(width,height);
    let padding_width=size.width/(length*4);
    let padding_height=size.height/(length*4);
    console.log(length)
    console.log(padding_width)
    console.log(padding_height)
    ctx.fillStyle='#eeffee';
    // ctx.fillRect(0, 0, 20, 20);
    ctx.fillRect(padding_width, padding_height, size.width-padding_width, size.height-padding_height);
    ctx.fillStyle='#00ffff';
    for (let index = 0; index < 3; index++) {
        ctx.fillRect(length+index*length, 0, 2, size.height);
        ctx.fillRect(0, length+index*length, size.width, 2);
    }
    
}