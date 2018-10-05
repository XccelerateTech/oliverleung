// create a base class etc - with a method printing the condition

class BaseFlying {
    constructor(option) {
        this.flying = option;
    }
    //return a method stating the option's action
    fly() {
        console.log(this.flying + " is a flyer");
    }
}

class BaseSwimming {
    constructor(option) {
        this.swimming = option;
    }
    swim() {
        console.log(this.swimming + " is a swimmer");
    }
}

class BaseLayEgg {
    constructor(option) {
        this.layEgg = option;
    }
    egg() {
        console.log(this.layEgg + " lays eggs");
    }
}

class BaseFeedMilk {
    constructor(option) {
        this.feedMilk = option;
    }
    milk() {
        console.log(this.feedMilk + " feeds milk");
    }
}

// create class constructors for animals using the base components we made

class Bird {
    constructor() {
        this.flyer = new BaseFlying("Bird");
        this.eggs = new BaseLayEgg("Bird");
    }
    get fly() {
        this.flyer.fly();
    }
    get egg() {
        this.eggs.egg();
    }
}

class Bat {
    constructor() {
        this.flyer = new BaseFlying("Bat");
        this.milks = new BaseFeedMilk("Bat");
    }
    get fly() {
        this.flyer.fly();
    }
    get milk() {
        this.milks.milk();
    }
}

class Whale {
    constructor() {
        this.swimmer = new BaseSwimming("Whale");
        this.milks = new BaseFeedMilk("Whale");
    }
    get swim() {
        this.swimmer.swim();
    }
    get milk() {
        this.milks.milk();
    }
}

class Fish {
    constructor() {
        this.swimmer = new BaseSwimming("Fish");
        this.eggs = new BaseLayEgg("Fish");
    }
    get swim() {
        this.swimmer.swim();
    }
    get egg() {
        this.eggs.egg();
    }
}

// Instantiation

const bird = new Bird();

bird.fly;
bird.egg;

const bat = new Bat();

bat.fly;
bat.milk;

const whale = new Whale();

whale.swim;
whale.milk;

const fish = new Fish();

fish.swim;
fish.egg;