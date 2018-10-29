let text = document.getElementById('text');

text.addEventListener('click', function(e) {
    console.log("I have been clicked");

    // var canvasReal = document.getElementById('canvasReal-real');
    // var contextReal = canvasReal.getContext('2d');

    var sketch = document.querySelector('#sketch');
    // The window.getComputedStyle() method returns an object that reports the values of all CSS properties
    var sketch_style = getComputedStyle(sketch);

    // using the draft canvas to draw on
    // var canvasDraft = document.getElementById('canvas-draft');
	// var contextDraft = canvasDraft.getContext('2d');
	canvasDraft.id = 'canvasDraft';
	// canvasDraft.width = canvasReal.width;
	// canvasDraft.height = canvasReal.height;

    sketch.appendChild(canvasDraft);

    var mouse = { x: 0, y: 0 };
    var start_mouse = { x: 0, y: 0 };
    var last_mouse = { x: 0, y: 0 };

    var sprayIntervalID;

    var textarea = document.createElement('textarea');
    textarea.id = 'text_tool';
    sketch.appendChild(textarea);

    // Text tool's text container for calculating
    // lines/chars
    var tmp_txt_ctn = document.createElement('div');
    tmp_txt_ctn.style.display = 'none';
    sketch.appendChild(tmp_txt_ctn);

    textarea.addEventListener('mouseup', function (e) {
        canvasDraft.removeEventListener('mousemove', onPaint, false);
    }, false);


    /* Mouse Capturing Work */
    canvasDraft.addEventListener('mousemove', function (e) {
        mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
        mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
    }, false);


    /* Drawing on Paint App */
    contextDraft.lineWidth = 5;
    contextDraft.lineJoin = 'round';
    contextDraft.lineCap = 'round';
    contextDraft.strokeStyle = 'blue';
    contextDraft.fillStyle = 'blue';

    canvasDraft.addEventListener('mousedown', function (e) {
        canvasDraft.addEventListener('mousemove', onPaint, false);

        mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
        mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;

        start_mouse.x = mouse.x;
        start_mouse.y = mouse.y;

        // onPaint();
        // sprayIntervalID = setInterval(onPaint, 50);
    }, false);

    canvasDraft.addEventListener('mouseup', function () {
        canvasDraft.removeEventListener('mousemove', onPaint, false);

        var lines = textarea.value.split('\n');
        var processed_lines = [];

        for (var i = 0; i < lines.length; i++) {
            var chars = lines[i].length;

            for (var j = 0; j < chars; j++) {
                var text_node = document.createTextNode(lines[i][j]);
                tmp_txt_ctn.appendChild(text_node);

                // Since tmp_txt_ctn is not taking any space
                // in layout due to display: none, we gotta
                // make it take some space, while keeping it
                // hidden/invisible and then get dimensions
                tmp_txt_ctn.style.position = 'absolute';
                tmp_txt_ctn.style.visibility = 'hidden';
                tmp_txt_ctn.style.display = 'block';

                var width = tmp_txt_ctn.offsetWidth;
                var height = tmp_txt_ctn.offsetHeight;

                tmp_txt_ctn.style.position = '';
                tmp_txt_ctn.style.visibility = '';
                tmp_txt_ctn.style.display = 'none';

                // Logix
                // console.log(width, parseInt(textarea.style.width);
                if (width > parseInt(textarea.style.width)) {
                    break;
                }
            }

            processed_lines.push(tmp_txt_ctn.textContent);
            tmp_txt_ctn.innerHTML = '';
        }

        var ta_comp_style = getComputedStyle(textarea);
        var fs = ta_comp_style.getPropertyValue('font-size');
        var ff = ta_comp_style.getPropertyValue('font-family');

        contextDraft.font = fs + ' ' + ff;
        contextDraft.textBaseline = 'top';

        for (var n = 0; n < processed_lines.length; n++) {
            var processed_line = processed_lines[n];

            contextDraft.fillText(
                processed_line,
                parseInt(textarea.style.left),
                parseInt(textarea.style.top) + n * parseInt(fs)
            );
        }

        // Writing down to real canvas now
        contextReal.drawImage(canvasDraft, 0, 0);
        // Clearing tmp canvas
        contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

        // clearInterval(sprayIntervalID);
        textarea.style.display = 'none';
        textarea.value = '';
    }, false);

    var onPaint = function () {

        // Tmp canvas is always cleared up before drawing.
        contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

        var x = Math.min(mouse.x, start_mouse.x);
        var y = Math.min(mouse.y, start_mouse.y);
        var width = Math.abs(mouse.x - start_mouse.x);
        var height = Math.abs(mouse.y - start_mouse.y);

        textarea.style.left = x + 'px';
        textarea.style.top = y + 'px';
        textarea.style.width = width + 'px';
        textarea.style.height = height + 'px';

        textarea.style.display = 'block';
    };
})


/*

capture where the mouse down event happens
using jquery append a styled input - border-dotted
user input on a specific keydown (ie 'enter') then you remove the input, but take the value
of the input $('input[name=word]').val
canvas 

*/