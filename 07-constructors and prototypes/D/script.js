class Monster {

    constructor(option) {
        this.name = option;
        this.health = 100;
    }

    wound(damage) {
        while (this.health > 0) {
            this.health -= damage;
            console.log(this.health);
        }
        console.log("monster dead");
    }
}

const monster = new Monster("Roger"); 

function hero() {
  let damage =  Math.floor(Math.random() * (20 - 5 + 1)) + 5;
  
  return monster.wound(damage);
}

hero();