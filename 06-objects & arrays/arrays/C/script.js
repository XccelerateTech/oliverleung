var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Cristiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

//1.

var barca = players.filter(function(player) {
    return player.club === "FC Barcelona";
})

barca

//2.

var names = players.map(function(element) {
    return element.name;
})

names

