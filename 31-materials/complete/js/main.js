
class Animal {
    constructor(name) {
        this._name = name // the parameter 'name' is assigned to _name
    }
    get name() {  // returns _name
        return this._name
    }
    speak() {
        console.log(`${this._name} makes a sound`)
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this._breed = breed
    }
    get breed() {
        return this._breed
    }
    speak() {
        super.speak()
        console.log(`${this.name} barks`)

    }
}










/* class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }    
}
class Cat extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} meows`)
    }    
}

let simba = new Dog('Simba','Shepard')
let machi = new Dog('The Machine','Pitbull')
let salem = new Cat('Salem', 'American Shorthair')

let farm = [simba,machi,salem]

for( a of farm ){
    a.speak()
} */