//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function MakeSkater(skateboard, hair, height, skills, phrase) {
    this.skateboard = skateboard
    this.hair = hair
    this.height = height
    this.skills = skills
    this.phrase = phrase
    this.describe = function () {
        console.log(`This guy has a ${this.skateboard} skateboard, ${this.hair} hair, an ${this.skills} skill level. ${this.phrase}`)
    }
}

let tonyShocks = new MakeSkater('orange', 'long', '6.0', 80, `Let's do this`)

tonyShocks.describe()