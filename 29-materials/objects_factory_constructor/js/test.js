// ----------  OBJECT  -------------------

const farm = {
    name1: "Bre Farms",
    animals: ["Cat", "Horse", "Goat"],
    age: 10,
    describe: function () {
        return console.log(`${this.name1} has ${this.animals} and is ${this.age} years old.`)
    }
}

farm.describe()
console.log(farm.animals)

// ----------  FACTORY FUNCTION  -------------------
// When a function creates and returns a new object, it is called a factory function.

function createFarm(farmName, farmAnimals, profit) {
    return {
        farmName: farmName,
        farmAnimals: farmAnimals,
        profit: profit,
        getFarm() {
            return (`${this.farmName} has ${this.farmAnimals} and makes ${this.profit} dollars a month.`)
        },
    };
}

let farm1 = createFarm('Heiser Farm', ['chickens', 'pigs', 'goats'], 10000);
let farm2 = createFarm('Jane Farm', ['goats', 'horses', 'cows'], 2000);

console.log(farm1.getFarm());
console.log(farm2.getFarm());

// ----------  CONSTRUCTOR  -------------------


// ----------  CLASS CONSTRUCTOR  -------------------