class Bird {
    constructor() {
        this.fly = "fly";
        this.eggs = "lays eggs";
    }
    can () {
        return `Bird can ${this.fly} and ${this.eggs}`;
    }
}

// inherits fly
class Bat extends Bird {
    constructor() {
        super();
        this.feed = "feeds milk";
        delete this.eggs;
    }
    can () {
        return `Bat can ${this.fly} and ${this.feed}`;
    }
}

class Whale {
    constructor() {
        this.swim = "swim";
        this.feed = "feeds milk";
    }
    can () {
        return `Whale can ${this.swim} and ${this.feed}`;    
    }
}

// inherits swim
class Fish extends Whale {
    constructor() {
        super();
        this.eggs = "lays eggs";
        delete this.feed;
    }
    can () {
        return `Fish can ${this.swim} and ${this.eggs}`;
    }
}

// create instances

const bat = new Bat;

const bird = new Bird;

const whale = new Whale;

const fish = new Fish;

console.log(whale.feed)

bird.can();