// clear button

let clear = document.getElementById('clear');

clear.addEventListener('click', function (e) {

    contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    // canvas needs a background colour!
    contextReal.fillStyle = '#fff';
    contextReal.fillRect(0, 0, canvasDraft.width, canvasDraft.height);

    canvasArray.push(canvasReal.toDataURL());

    canvasArray = new Array();
    canvasStep = -1;

    console.log(canvasArray)
    console.log(canvasStep)

    // canvasArray[canvasStep] = new Image();
    // canvasArray[canvasStep].src = canvasReal.toDataURL();
    // canvasStep ++

    canvasPush();
})

// color picker

$('#color-pallette').on('input', function () {
    brush.color = this.value;
});

$('#color-fill').on('input', function () {
    brush.fill = this.value;
});

// brush size

$('#brush-size').on('input', function () {
    brush.size = this.value;
});

// Undo button implementation ** CURRENTLY NOT WORKING PROPERLY **
// last item does not undo. onMouseLeave issues.



let canvasArray = new Array();
let canvasStep = -1;

function canvasPush() {
    canvasStep++;
    if (canvasStep < canvasArray.length) {
        canvasArray.length = canvasStep;
    }
    canvasArray.push(canvasReal.toDataURL());
}

// undo portion

let undo = document.getElementById('undo');

undo.addEventListener('click', function () {
    console.log("I have been clicked");
    if (canvasStep > 0) {
        canvasStep--;
        // It is functionally equivalent to document.createElement('img')
        let canvasImage = new Image();
        canvasImage.src = canvasArray[canvasStep];
        canvasImage.onload = function () {
            contextReal.drawImage(canvasImage, 0, 0);
        }
    }
})

let redo = document.getElementById('redo');

redo.addEventListener('click', function () {
    if (canvasStep < canvasArray.length - 1) {
        canvasStep++;
        var canvasImage = new Image();
        canvasImage.src = canvasArray[canvasStep];
        canvasImage.onload = function () {
            contextReal.drawImage(canvasImage, 0, 0);
        }
    }
})


// The function which saves the restoration points
// function saveRestorePoint() {
// 	// Get the current canvas drawing as a base64 encoded value
// 	var oCanvas = document.getElementById("canvasReal");
// 	var imgSrc = oCanvas.toDataURL("image/png");

// 	// and store this value as a 'restoration point', to which we can later revert
//     restorePoints.push(imgSrc);
//     console.log(restorePoints);
// }

// // Function to restore the canvas from a restoration point
// function undoDrawOnCanvas() {
// 	// If we have some restore points
// 	if (restorePoints.length > 0) {
// 		// Create a new Image object
// 		var oImg = new Image();
// 		// When the image object is fully loaded in the memory...
// 		oImg.onload = function() {
// 			// Get the canvas context
// 			// var canvasContext = document.getElementById("drawingCanvas").getContext("2d");		
// 			// and draw the image (restore point) on the canvas. That would overwrite anything
// 			// already drawn on the canvas, which will basically restore it to a previous point.
// 			contextReal.drawImage(oImg, 0, 0);
// 		}
// 		// The source of the image, is the last restoration point
// 		oImg.src = restorePoints.pop();
// 	}
// }