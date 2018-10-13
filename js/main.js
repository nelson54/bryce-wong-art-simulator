let size = 1000;

let imgData = null;
let imgHeight = 369;
let imgWidth = 400;


let imgCenterPos = (imgWidth/2);

let imgStartData = null;
let imgCenterData = null;
let imgEndData = null;

let canvas = document.createElement('canvas');
let context = canvas.getContext('2d');

canvas.height = canvas.width = size;
document.body.appendChild(canvas);
let reverse = document.getElementById('reverse');

reverse.onclick = flip;

let mouse = new Image();
mouse.src = './img/mickey.png';

let arr = [];



canvas.onmousemove = function( event ) {
    arr.unshift({x:event.x, y:event.y});

    context.fillStyle = 'white';
    context.fillRect(0, 0, size, size);

    if(!imgStartData) {
        context.drawImage(mouse, 0, 0);
        imgStartData = context.getImageData(0, 0, imgCenterPos, imgHeight);
        imgCenterData = context.getImageData(imgCenterPos, 0, 1, imgHeight);
        imgEndData = context.getImageData(imgCenterPos, 0, imgCenterPos, imgHeight);
        context.fillRect(0, 0, size, size);
    }


    arr.forEach((pos)=>{
        context.putImageData(imgCenterData, pos.x, pos.y);
    });

    let first = arr[0],
        last = arr[arr.length-1];

    context.putImageData(imgStartData, last.x, last.y);
    context.putImageData(imgEndData,first.x, first.y);



}



function flip() {
    arr.reverse();

    context.fillStyle = 'white';
    context.fillRect(0, 0, size, size);


    arr.forEach((pos)=>{
        context.drawImage(mouse, pos.x, pos.y);
    });
}


