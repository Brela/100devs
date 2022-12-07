//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(height, weight, strength, speed) {
    this.height = height
    this.weight = weight
    this.strength = strength
    this.speed = speed
    this.taunt = function () {
        console.log(`you can't handle my ${this.specialMove}`)
    }
    this.winning = function () {
        console.log(`Haha! ${this.catchPhrase}`)
    }
    this.dash = function () {
        console.log(`Whooop, missed me!`)
    }
}

let FighterMario = new StreetFighter('6ft', '175', '80', '80')
FighterMario.catchPhrase = `Let's goo!`
console.table(FighterMario)