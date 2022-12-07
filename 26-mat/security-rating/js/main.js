//Create a security object that has four properties and three methods

function SecurityRating(name = 'not defined', numLasers = 0, numOfGuards = 0, numCameras = 0, softwareUsed = 'not defined') {
    this.name = name
    this.active = true
    this.lasers = numLasers
    this.guards = numOfGuards
    this.cameras = numCameras
    this.software = softwareUsed
    this.arrayOfNums = [this.lasers, this.guards, this.cameras]
    this.getRating = _ => numLasers * 5 + (numOfGuards * 3) + (numCameras) + (this.software === 'splunk' ? 100 : 0)

}

let brelaEstates = new SecurityRating('Brela Estates', 5, 1, 3, 'splunk')
console.log(brelaEstates)
console.log(brelaEstates.getRating())
// SecurityRating(1, 2, 3, 4)
