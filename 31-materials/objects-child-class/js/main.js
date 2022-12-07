//Create an a class and extend it - Can be anything you would like it to be! 

class Farm {
    constructor(name) {
        name
    }
    plow() {
        console.log(`plowing to begin at ${this.name}`)
    }
}

class Garden extends Farm {
    constructor(name, acres) {
        super(name)
        acres
    }
    super(plow)
}

let brela = new Garden('Brela', 70)
console.log(brela.plow())