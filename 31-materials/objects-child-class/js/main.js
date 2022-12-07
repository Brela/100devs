//Create an a class and extend it - Can be anything you would like it to be! 

class Farm {
    constructor(name) {
        this.name = name
    }
    plow() {
        console.log(`plowing to begin at ${this.name}`)
    }
}

class Garden extends Farm {
    constructor(name) {
        super(name)
    }
    plow() {
        super.plow()
    }
}

let brela = new Farm('Brela')
brela.plow()


let farm1 = new Garden('farm1')
console.log(farm1.name)
farm1.plow()
