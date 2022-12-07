//Create an espresso machine class constructor that makes machines with 4 properties and 3 methods


class EspressoMaker {
    constructor(makerName, tankCapacity, strengthOptions, frother) {
        this.makerName = makerName
        this.tankCapacity = tankCapacity
        this.strengthOptions = strengthOptions
        this.frother = frother
        this.ratings = function (makerName = 1, tankCapacity = 1, strengthOptions = 1, frother = 1) {
            return Math.floor((makerName + tankCapacity + strengthOptions + frother + 1) / 5)
        }
    }
    turnOn() {
        return console.log('On')
    }
    steam() {
        return console.log('Steaming')
    }
    brew() {
        return console.log('good stuff')
    }


}


const machine1 = new EspressoMaker(5, 1, 2, 2)



console.log(machine1.makerName)
console.log(machine1.ratings())
