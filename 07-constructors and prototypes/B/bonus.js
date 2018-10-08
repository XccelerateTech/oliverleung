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

    heal() {
        // if attacker strikes 3 times, he heals himself
        this.health += 5;

        console.log(this.name + " " + this.health + "HP just healed themselves!");
    }
}

const player1 = new Player({ name: "player1", health: 100 });
const player2 = new Player({ name: "player2", health: 100 });

let lastAttacker; // null value references nothing in particular
let attackCount = 0; // consecutive attacks counter

// create undefined roles that will be used in the loop
var aggressor;
var defender;

// looping condition where they fight until the other is dead

while (player1.health > 0 && player2.health > 0) {

    // determining who attacks using RNG of 0 or 1
    let chance = Math.floor(Math.random() * 2);

    if (chance == 0) {
        aggressor = player1;
        defender = player2;
        //     player1.attack(player2);
    } else {
        defender = player1;
        aggressor = player2;
        //     player2.attack(player1);
    }

    // attack and count relationship once aggressor/defender is determined each loop
    aggressor.attack(defender);
    // lastAttacker is null for first attack
    if (aggressor === lastAttacker) {
        attackCount++;
        console.log(attackCount);
        
        // condition if count reaches 3 consecutive
        if (attackCount % 3 == 0) {
            aggressor.heal();
        }
    } else {
        // initiate first attacker and count
        lastAttacker = aggressor;
        attackCount = 1;
        console.log(attackCount);
    }


    // console.log once a player dies
    if (player1.health == 0) {
        console.log(player1.name + " has been slain!");
    }
    if (player2.health == 0) {
        console.log(player2.name + " has been slain!");
    }
}