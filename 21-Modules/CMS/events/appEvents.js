// we load the events module part of the Node.js core
// same goes for util
var EventEmitter = require('events');
var util = require('util');

function Greeter() {
    this.greeting = 'hello there';
}

// using util method gives Greeter access to all properties in EventEmitter object
util.inherits(Greeter, EventEmitter);

// pass the constructor another method. the method will emit an event.
Greeter.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet');
};

// initializing the constructor
var greeter = new Greeter();

// listening for the greet event
greeter.on('greet', function() {
    console.log('Someone greeted');
});

// calling the greet function
greeter.greet();

// Passing data along with events

// var EventEmitter = require('events');
// var util = require('util');

// function Greeter() {
//     this.greeting = 'Hello there';
// }

// util.inherits(Greeter, EventEmitter);

// Greeter.prototype.greet = function(data) {
//     console.log(this.greeting + ' ' + data);
//     this.emit('greet', data);
// };

// var greeter = new Greeter();

// greeter.on('greet', function(data) {
//     console.log('Someone greeted '+ data);
// });

// greeter.greet('Ian');

Using ES6 syntax

// simpler code, don't need to rely on prototypes and util module
// instead of prototypes, used classes, which are extendable - EventEmitter was extended to Greeter class
const EventEmitter = require('events');

class Greeter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello there';
    }

    greet(data) {
        console.log(`${this.greeting} ${data}`);
        this.emit('greet', data);
    }
}

const greeter = new Greeter();

greeter.on('greet', function(data) {
    console.log('Someone greeted '+ data);
});

greeter.greet('Ian');