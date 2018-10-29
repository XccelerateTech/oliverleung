// 6.

var car = {
    brands: {
        BMW: {
            "6-series": {
                sold: 1805
	            }
	        },
        Tesla: {
            "Model-S": {
                sold: 200
            },
            "Model-A": {
                sold: 14
            },
        }
	}
}


car.brands.BMW["6-series"].sold;

car.brands.Tesla["Model-A"].sold;

// 7.

var restaurants = [
    {name: "Ollies", group: "Castelo Concepts"},
    {name: "Wagyu", group: "Castelo Concepts"},
    {name: "Zaks", group: "Castelo Concepts"},
    {name: "Black Salt", group: "Black Sheep"},
    {name: "Salt and Barrel", group: "Black Sheep"}
]

var casteloConcepts = restaurants.filter(function(restaurant) {
    return restaurant.group == "Castelo Concepts";
})

console.log(casteloConcepts);

// var casteloConcepts = restaurants.filter((restaurant) => {
//     return restaurant.group == "Castelo Concepts";
// })

var names = restaurants.map(function(restaurant){
    return restaurant.name;
})

console.log(names);

// 8.

class Pet {
    constructor(option) {
        this.name = option.name;
        this.age = option.age;
    }

    get Age() {
        return `I am ${this.age} years old.`
    }

    set Age(age) {
        this.age = age;
    }
    // The get syntax binds an object property to a function that will be called when that property is looked up
    get info() {
        return `My name is ${this.name}, ${this.Age}`;
    }
}

const pet = new Pet({name: "Bubba", age: "5"});