let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');

let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');

canvasDraft.width = canvasReal.width //= window.innerWidth;
canvasDraft.height = canvasReal.height //= window.innerHeight*.6;

// contextReal.save();
contextReal.fillStyle = '#fff';
contextReal.fillRect(0, 0, contextReal.canvas.width, contextReal.canvas.height);
// contextReal.restore();

let brush = {
    color: "#40e0d0",
    fill: "#ff00ff",
    size: 5,
}

var restorePoints = [];

let currentFunction; // undefined
let dragging = false;

// defining the listener events

$('#canvas-draft').mousedown(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    console.log(`${mouseX}, ${mouseY}`);
    // javascript method used versus JQuery syntax above
    currentFunction.onMouseDown([mouseX, mouseY], e);
    dragging = true;
});

$('#canvas-draft').mousemove(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if (dragging) {
        currentFunction.onDragging([mouseX, mouseY], e);
    }
    currentFunction.onMouseMove([mouseX, mouseY], e);
});

$('#canvas-draft').mouseup(function (e) {
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX, mouseY], e);
    // canvasPush();
});

$('#canvas-draft').mouseleave(function (e) {
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX, mouseY], e);

    // canvasPush();
});

$('#canvas-draft').mouseenter(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter([mouseX, mouseY], e);
});

// Acts as a super class, providing basic framework for all our functionalities
class PaintFunction {
    constructor() { }
    onMouseDown() { }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }
} 