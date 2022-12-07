//Adding character experience
//Improve our example RPG program to add an experience property named xp to the character. 
//Its initial value is 0. Experience must appear in character description.

// TODO: create the character object here
const aurora = {
    name: 'Aurora',
    health: 100,
    strength: 50,

    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} strength,\nand a growing XP of ${this.xp}.`;
    }
}

aurora.xp = 777
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learns a new skill
aurora.xp += 15;

document.querySelector('.aurora').innerText = aurora.describe()



//Modeling a circle
//Complete the following program to add the circle object definition.Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"));
// TODO: create the circle object here
const circle = {
    radius: r,
    circumference: r * 2 * 3.14,
    area: 3.14 * (r * r),

    describe() {
        return `It's circumference is ${this.circumference} and it's area is ${this.area}.`;
    }
}

document.querySelector('.circle').innerText = circle.describe()


// Modeling a bank account
// Write a program that creates an account object with the following characteristics:

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the(positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

// Execution result