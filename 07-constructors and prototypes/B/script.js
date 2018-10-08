class Player {
    constructor(option) {
        this.name = option.name;
        this.health = option.health;
    }

    attack(player) {
        player.health -= 10;
        console.log(this.name + " " + this.health + "HP attacks " + player.name + " " + player.health + "HP");
      
        if (player.health < 0) {
            console.log(player.name + " is dead");
        }
    }
}

const player1 = new Player({ name: "player1", health: 100 });
const player2 = new Player({ name: "player2", health: 100 });
 
// looping condition where they fight until the other is dead

while (player1.health > 0 && player2.health > 0) {

    // determining who attacks using RNG of 0 or 1
    let chance = Math.floor(Math.random()*2);

    if (chance == 0) {
        player1.attack(player2);
    } else {
        player2.attack(player1);
    }

    // console.log once a player dies
    if (player1.health == 0) {
        console.log(player1.name + " has been slain!");
    }
    if (player2.health == 0) {
        console.log(player2.name + " has been slain!");
    }
}