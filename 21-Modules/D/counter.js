const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
    }

    // here we are calling a method
    counter(number) {
        let i = 0
        const that = this;
        let countdown = setInterval(function () {
            let remaining = number - i;

            // create condition for when timer stops
            if (remaining == 0) {
                clearInterval(countdown);
                // console.log('BOOM')
            }
            // this should be logged in our app.js
            // console.log(`${number-i}s remain`);
            
            // create listener
            that.emit('tick', remaining);
            i++;
        }, 1000);
    }
}

// export the class
module.exports = Timer;

// let counter = new Counter;

// timer.on('tick')

// timer.counter(5);