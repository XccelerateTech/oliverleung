// Timer links to EventEmitter
let Timer = require('./counter');

// create a new instance
let timer = new Timer();

// event listener - parameter from emit function
timer.on('tick', function (remaining) {
    if (remaining == 0) {
        console.log(`Wipe yourself off. You dead.`);
    } else {
        console.log(`${remaining}s remaining`);
    }
})

timer.counter(5);