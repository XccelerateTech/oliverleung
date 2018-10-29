var intervalTimer = setInterval(function() {
    console.log("I'm still alive");
}, 1000);

// instantly stops timer
clearInterval(intervalTimer);

// using setTimeout to schedule timer to stop
setTimeout(() => { clearInterval(intervalTimer); alert('stop'); }, 5000);